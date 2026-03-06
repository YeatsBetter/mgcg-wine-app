import json
import os
import re
import google.generativeai as genai

# Configure Gemini API
# Assuming GEMINI_API_KEY is in the environment
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("Error: GEMINI_API_KEY environment variable not set.")
    exit(1)

genai.configure(api_key=api_key)

# Read regions.js
with open('src/data/regions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON part
json_match = re.search(r'export const wineRegionsData = (\{.*?\});', content, re.DOTALL)
if not json_match:
    print("Error: Could not find JSON data in regions.js")
    exit(1)

json_str = json_match.group(1)
data = json.loads(json_str)

# We want to translate the following fields for each feature:
# - feature['properties']['name'] (maybe keep English or format like "Bordeaux (波尔多)")
# - feature['properties']['history']
# - feature['properties']['geography']
# - feature['properties']['terroir']
# - feature['properties']['grapes'] (name, description)
# - feature['properties']['estates'] (name, description)
# - feature['properties']['subRegions'] (name, description, geography, grapes)

# To avoid hitting size limits or timeout, we should perhaps process feature by feature or in small batches.
# But for translation, a single prompt with the whole JSON structure might work if we use structural output, but it's 80KB.
# Better to iterate over features.

model = genai.GenerativeModel('gemini-2.0-flash')

translated_features = []

for idx, feature in enumerate(data['features']):
    print(f"Translating {feature['properties']['name']} ({idx+1}/{len(data['features'])})...")
    
    prompt = f"""
    You are an expert sommelier and professional wine translator (WSET Diploma level).
    Translate the following JSON object containing wine region data from English to highly professional, elegant Chinese.
    
    Guidelines:
    - Crucial: Keep the main region `name` in English but add the Chinese translation in parentheses if appropriate, e.g., "Bordeaux (波尔多)". For `grapes` and `estates` names, keep them in English, or "English Name (中文翻译)" if helpful. In `subRegions` name, keep English or "English (中文)".
    - Translate all long text fields professionally, accurately conveying WSET terminology (e.g., "malolactic conversion" -> "苹果酸-乳酸发酵", "noble rot" -> "贵腐菌", "terroir" -> "风土", "appellation" -> "产区").
    - Ensure the output is strictly valid JSON matching the exact structure of the input, except with translated values. Do not wrap in markdown or add explanations. Just return the raw JSON object.

    Input JSON:
    {json.dumps(feature['properties'], indent=2)}
    """
    
    response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
    
    try:
        translated_props = json.loads(response.text)
        feature['properties'] = translated_props
    except Exception as e:
        print(f"Error parsing JSON for {feature['properties']['name']}: {e}")
        print("Raw response:", response.text)
        # Fallback to original if failure
    
    translated_features.append(feature)

data['features'] = translated_features

# Write out to regions_zh.js
out_content = f"export const wineRegionsDataZh = {json.dumps(data, indent=2, ensure_ascii=False)};\n"
with open('src/data/regions_zh.js', 'w', encoding='utf-8') as f:
    f.write(out_content)

print("Successfully created src/data/regions_zh.js")
