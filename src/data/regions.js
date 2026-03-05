export const wineRegionsData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-1.1, 44.5], [-0.2, 44.5], [-0.2, 45.3], [-1.1, 45.3], [-1.1, 44.5]]] },
            properties: {
                id: "bordeaux", name: "Bordeaux", country: "France",
                history: "Wine was introduced to the Bordeaux region by the Romans, probably in the mid-1st century. The marriage of Eleanor of Aquitaine to Henry Plantagenet in 1152 opened the English market.",
                geography: "Located in southwest France near the Atlantic coast. The Gironde estuary and its two rivers (Garonne, Dordogne) define the 'Left Bank' vs 'Right Bank'. Warm maritime climate.",
                terroir: "Left Bank: Deep gravel soils over limestone bedrock, excellent drainage. Right Bank: Clay, limestone, and sand, cooler and moister.",
                grapes: "🍷 **Cabernet Sauvignon** (Left Bank dominant): High acid, high tannin. Blackcurrant, cedar, tobacco. \n🍷 **Merlot** (Right Bank dominant): Medium acid, medium tannin. Plum, chocolate.\n🥂 **Sauvignon Blanc & Sémillon**: Crisp dry whites and botrytized sweet wines (Sauternes).",
                estates: [
                    { name: "Château Lafite Rothschild", description: "First Growth. Known for elegance, perfumed aromatics, and extreme longevity.", wines: [{ name: "Château Lafite Rothschild", url: "https://www.vivino.com/search/wines?q=Chateau+Lafite+Rothschild" }] },
                    { name: "Château Petrus", description: "The most famous wine from Pomerol. A near-pure expression of Merlot on blue clay.", wines: [{ name: "Petrus", url: "https://www.vivino.com/search/wines?q=Petrus+Pomerol" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[4.7, 46.9], [5.0, 46.9], [4.7, 47.3], [4.4, 47.3], [4.7, 46.9]]] },
            properties: {
                id: "burgundy", name: "Burgundy (Bourgogne)", country: "France",
                history: "Monasteries (Benedictines/Cistercians) established the vineyards in the Middle Ages, founding the concept of 'climats' and terroir.",
                geography: "Continental climate with cold winters and unpredictable weather. Divided into Chablis, Côte d'Or, Côte Chalonnaise, and Mâconnais.",
                terroir: "Jurassic limestone and marl. Variations over mere meters dictate whether a vine yields a generic Bourgogne or Grand Cru.",
                grapes: "🍷 **Pinot Noir**: Low-medium tannin, high acidity. Strawberry, turning into forest floor (sous-bois) with age.\n🥂 **Chardonnay**: Originates here. Offers steely lemon in Chablis to complex, buttery hazelnut in Montrachet.",
                estates: [
                    { name: "Domaine de la Romanée-Conti (DRC)", description: "The most prestigious and expensive wine estate in the world.", wines: [{ name: "Romanée-Conti Grand Cru", url: "https://www.vivino.com/search/wines?q=Romanee+Conti" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[10.9, 43.1], [11.6, 43.1], [11.5, 43.7], [10.9, 43.7], [10.9, 43.1]]] },
            properties: {
                id: "tuscany", name: "Tuscany", country: "Italy",
                history: "Winemaking dates back to the Etruscans (8th century BC). The 'Super Tuscan' revolution in the 1970s broke DOC rules to use French grapes.",
                geography: "Hilly terrain providing altitude and diurnal shifts. Mediterranean climate by the coast transitioning to warmer continental inland.",
                terroir: "Galestro (clay-schist) and Alberese (limestone) are prized in Chianti Classico. Sandy clay is favored in Montalcino.",
                grapes: "🍷 **Sangiovese**: High acidity, high tannin. Sour cherry, dried herbs, clay, balsamic notes.\n🍷 **Cabernet & Merlot** (Super Tuscans): Grown on the coastal Maremma areas yielding opulent, modern wines.",
                estates: [
                    { name: "Tenuta San Guido", description: "Birthplace of the Super Tuscan. Flagship wine 'Sassicaia'.", wines: [{ name: "Sassicaia", url: "https://www.vivino.com/search/wines?q=Sassicaia" }] },
                    { name: "Biondi-Santi", description: "Inventor of Brunello di Montalcino. Traditional and long-lived.", wines: [{ name: "Brunello di Montalcino Riserva", url: "https://www.vivino.com/search/wines?q=Biondi+Santi" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-122.5, 38.2], [-122.2, 38.2], [-122.3, 38.6], [-122.6, 38.6], [-122.5, 38.2]]] },
            properties: {
                id: "napa", name: "Napa Valley", country: "USA",
                history: "The 1976 'Judgment of Paris', where Napa Cabernet defeated top Bordeaux in a blind tasting, catapulted the region to global superstardom.",
                geography: "A 30-mile valley. San Pablo Bay funnels fog and cool breezes northwards (cooler in south Carneros, hotter in Calistoga).",
                terroir: "Over 100 soil variations. Valley floor gives lush wines; mountains (Howell, Veeder) give concentrated, high-tannin wines.",
                grapes: "🍷 **Cabernet Sauvignon**: Huge body, high tannin. Black cherry, cassis, vanilla, mocha (heavy new oak).\n🥂 **Chardonnay**: Full-bodied, malolactic-heavy, buttery.",
                estates: [
                    { name: "Screaming Eagle", description: "The ultimate California 'Cult Wine'.", wines: [{ name: "Cabernet Sauvignon", url: "https://www.vivino.com/search/wines?q=Screaming+Eagle" }] },
                    { name: "Opus One", description: "Historic joint venture between Mondavi and Rothschild.", wines: [{ name: "Opus One", url: "https://www.vivino.com/search/wines?q=Opus+One" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[7.7, 44.5], [8.1, 44.5], [8.2, 44.8], [7.8, 44.8], [7.7, 44.5]]] },
            properties: {
                id: "piedmont", name: "Piedmont (Piemonte)", country: "Italy",
                history: "Reached peak prestige in the 1980s via the 'Barolo Boys' who introduced modern winemaking.",
                geography: "Surrounded by the Alps. The Po River creates morning autumn fogs (nebbia) that ripen late-harvesting grapes.",
                terroir: "Calcareous marl and sandstone. Yields everything from perfumed softer wines (La Morra) to immensely structured ones (Serralunga).",
                grapes: "🍷 **Nebbiolo**: Paradoxically light color but extremely high acid/tannins. Tar, roses, cherry, truffle.\n🍷 **Barbera**: High acid, low tannin. Juicy dark cherry.\n🥂 **Moscato**: Sweet, low-alcohol, frothy.",
                estates: [
                    { name: "Gaja", description: "Visionary who modernized Barbaresco and Barolo.", wines: [{ name: "Barbaresco", url: "https://www.vivino.com/search/wines?q=Gaja+Barbaresco" }] },
                    { name: "Giacomo Conterno", description: "The absolute pinnacle of traditional Barolo.", wines: [{ name: "Monfortino Barolo Riserva", url: "https://www.vivino.com/search/wines?q=Conterno+Monfortino" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-2.8, 42.2], [-2.0, 42.2], [-2.0, 42.6], [-2.9, 42.6], [-2.8, 42.2]]] },
            properties: {
                id: "rioja", name: "Rioja", country: "Spain",
                history: "Modernized rapidly in the 19th century when phylloxera devastated Bordeaux, bringing French winemakers across the Pyrenees.",
                geography: "Located along the Ebro River. Protected from harsh Atlantic weather by the Cantabrian Mountains. Divided into Alta, Alavesa, and Oriental.",
                terroir: "Chalky-clay and limestone (Alta/Alavesa) produce acidic, age-worthy wines. Ferrous clay and silt (Oriental) favor Garnacha.",
                grapes: "🍷 **Tempranillo**: Medium+ acid, medium+ tannin. Strawberry, plum. Huge affinity for American oak (coconut, vanilla).\n🍷 **Garnacha**: Adds body and strawberry jam notes.",
                estates: [
                    { name: "La Rioja Alta, S.A.", description: "Standard-bearer for traditional Rioja. Long American oak aging.", wines: [{ name: "Gran Reserva 890", url: "https://www.vivino.com/search/wines?q=La+Rioja+Alta+890" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[4.7, 43.9], [5.1, 43.9], [4.9, 45.3], [4.6, 45.3], [4.7, 43.9]]] },
            properties: {
                id: "rhone", name: "Rhône Valley", country: "France",
                history: "Winemaking established by Greeks. Hand-terraced in the North; propelled in the South by the 14th century Avignon Papacy.",
                geography: "Follows the Rhône river. Starkly divided: North is narrow and continental, South is broad and Mediterranean with Mistral winds.",
                terroir: "North: Sheer granite slopes reflecting sun. South: 'Galets Roulés' (smooth stones) that store daytime heat.",
                grapes: "🍷 **Syrah** (North): High tannin/acid. Blackberry, black pepper, smoked meat.\n🍷 **GSM Blend** (South): Grenache/Syrah/Mourvèdre. High alcohol, red fruit, spice.\n🥂 **Viognier**: Aromatic apricot, honeysuckle.",
                estates: [
                    { name: "E. Guigal", description: "Master of the Northern Rhône, famous for their 'La La's' in Côte-Rôtie.", wines: [{ name: "Côte-Rôtie 'La Mouline'", url: "https://www.vivino.com/search/wines?q=Guigal+La+Mouline" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[6.8, 49.7], [7.2, 49.7], [7.4, 50.3], [7.0, 50.3], [6.8, 49.7]]] },
            properties: {
                id: "mosel", name: "Mosel", country: "Germany",
                history: "Planted by ancient Romans. Historically commanded higher prices than First Growth Bordeaux.",
                geography: "Serpentine gorge cut by the Mosel River. Incredibly steep slopes (70° gradients) facing south.",
                terroir: "Blue and red Devonian slate absorbs weak northern sun and provides razor-sharp minerality.",
                grapes: "🥂 **Riesling**: High acidity balanced by residual sugar. Green apple, lime blossom, 'petrol' (TDN) with age. Low alcohol.",
                estates: [
                    { name: "Joh. Jos. Prüm", description: "Legendary for age-worthy, brilliantly precise sweet wines.", wines: [{ name: "Wehlener Sonnenuhr Spätlese", url: "https://www.vivino.com/search/wines?q=JJ+Prum+Wehlener" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[173.5, -41.7], [174.2, -41.7], [174.4, -41.4], [173.8, -41.4], [173.5, -41.7]]] },
            properties: {
                id: "marlborough", name: "Marlborough", country: "New Zealand",
                history: "First commercial vines planted in 1973. Exploded onto the world stage in the 1980s via Cloudy Bay.",
                geography: "Northeastern tip of the South Island. High sunshine and huge diurnal shifts from cool coastal nights.",
                terroir: "Old riverbed soils (Wairau) produce tropical wines; cooler windier valleys (Awatere) produce herbaceous styles.",
                grapes: "🥂 **Sauvignon Blanc**: Intensely aromatic. Passionfruit, gooseberry, jalapeño, fresh-cut grass.\n🍷 **Pinot Noir**: Brighter and fleshier than Burgundy.",
                estates: [
                    { name: "Cloudy Bay", description: "The estate that defined the style in the 80s.", wines: [{ name: "Sauvignon Blanc", url: "https://www.vivino.com/search/wines?q=Cloudy+Bay+Sauvignon+Blanc" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[18.8, -34.0], [19.0, -34.0], [18.9, -33.8], [18.7, -33.8], [18.8, -34.0]]] },
            properties: {
                id: "stellenbosch", name: "Stellenbosch", country: "South Africa",
                history: "Longest viticultural history in the 'New World' dating to 1679. Modernized heavily post-apartheid.",
                geography: "Warm Mediterranean climate cooled by the 'Cape Doctor' south-easterly summer wind.",
                terroir: "Ancient weathered granite and sandstone soils encircled by dramatic mountains.",
                grapes: "🍷 **Cabernet Sauvignon**: Herbal graphite mixed with ripe black fruit.\n🍷 **Pinotage**: SA signature cross (Pinot Noir x Cinsault). Smoky, rooibos tea, blackberry.\n🥂 **Chenin Blanc**: Bruised apple, honey.",
                estates: [
                    { name: "Kanonkop", description: "Masters of Pinotage and Bordeaux blends. The 'First Growth' of the Cape.", wines: [{ name: "Paul Sauer", url: "https://www.vivino.com/search/wines?q=Kanonkop+Paul+Sauer" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[4.0, 48.9], [4.5, 48.9], [4.6, 49.3], [3.9, 49.3], [4.0, 48.9]]] },
            properties: {
                id: "champagne", name: "Champagne", country: "France",
                history: "Perfected the 'Méthode Champenoise' (second fermentation in bottle) over centuries. Dom Pérignon, a monk, contributed greatly to blending and cork usage.",
                geography: "Northernmost limit of commercial winemaking in France. Extremely cold climate forcing high acidity.",
                terroir: "Thick beds of Belemnite chalk reflecting heat to the vines and holding moisture in dry summers.",
                grapes: "🥂 **Pinot Noir / Pinot Meunier / Chardonnay**: Harvested early for maximum acidity. Autolytic notes (brioche, toast, biscuit) from lees aging define the profile.",
                estates: [
                    { name: "Dom Pérignon", description: "Moët & Chandon's prestige cuvée. Only produced in exceptional vintage years.", wines: [{ name: "Dom Pérignon Vintage", url: "https://www.vivino.com/search/wines?q=Dom+Perignon" }] },
                    { name: "Krug", description: "The ultimate expression of blended, barrel-fermented Champagne.", wines: [{ name: "Grande Cuvée", url: "https://www.vivino.com/search/wines?q=Krug+Grande+Cuvee" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[10.6, 45.3], [11.5, 45.3], [11.5, 45.9], [10.6, 45.9], [10.6, 45.3]]] },
            properties: {
                id: "veneto", name: "Veneto", country: "Italy",
                history: "A diverse powerhouse producing more wine than any other Italian region. Ancient roman 'Retico' wines were early ancestors of Amarone.",
                geography: "Stretches from Lake Garda in the west, across alpine foothills, to Venice in the east.",
                terroir: "Glacial moraines near Lake Garda, volcanic basalt in Soave/Valpolicella, and alluvial plains.",
                grapes: "🍷 **Corvina**: Base of Valpolicella and Amarone. Dried grapes (Appassimento) yield massive alcohol, chocolate, and raisin flavors.\n🥂 **Glera**: Base of Prosecco, made in the Charmat method for light floral bubbles.",
                estates: [
                    { name: "Quintarelli", description: "The mythical master of artisan Amarone.", wines: [{ name: "Amarone della Valpolicella Classico", url: "https://www.vivino.com/search/wines?q=Quintarelli+Amarone" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-69.3, -33.6], [-68.5, -33.6], [-68.5, -32.8], [-69.3, -32.8], [-69.3, -33.6]]] },
            properties: {
                id: "mendoza", name: "Mendoza", country: "Argentina",
                history: "Spanish settlers brought vines in the 1500s. The French grape Malbec found its true spiritual home here in the 1850s before phylloxera hit Europe.",
                geography: "A high-altitude desert sitting in the rain shadow of the Andes Mountains. Vineyards extend from 2,000 to over 5,000 feet in altitude (Uco Valley).",
                terroir: "Alluvial sand, clay, and rock irrigated by Andean snowmelt. High altitude ensures brilliant UV radiation and cold nights maintaining acidity.",
                grapes: "🍷 **Malbec**: Deep purple, full-bodied. Blackberry, plum, cocoa, and violet florals. Velvet, soft tannins compared to Cabernet.\n🥂 **Torrontés**: Highly aromatic, soaring floral (jasmine) white wine.",
                estates: [
                    { name: "Catena Zapata", description: "Pioneers of extreme high-altitude Malbec planting.", wines: [{ name: "Adrianna Vineyard Malbec", url: "https://www.vivino.com/search/wines?q=Catena+Zapata+Adrianna" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-7.8, 41.1], [-7.2, 41.1], [-7.2, 41.4], [-7.8, 41.4], [-7.8, 41.1]]] },
            properties: {
                id: "douro", name: "Douro Valley", country: "Portugal",
                history: "The world's oldest demarcated and regulated wine region (1756). Created the global Port wine industry driven by British merchants.",
                geography: "Steep, serpentine river valley winding through harsh, remote mountains in northern Portugal.",
                terroir: "Solid schist rock. Vine roots must shatter deep into the schist to find water during blistering 40°C summers.",
                grapes: "🍷 **Touriga Nacional, Touriga Franca, Tinta Roriz (Tempranillo)**: Used for both unctuous, fortified Port and, increasingly, concentrated dark, dry table wines.",
                estates: [
                    { name: "Quinta do Noval", description: "Famous for 'Nacional', a vintage Port made from ungrafted, pre-phylloxera vines.", wines: [{ name: "Vintage Port Nacional", url: "https://www.vivino.com/search/wines?q=Quinta+do+Noval+Nacional" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-123.3, 44.8], [-122.8, 44.8], [-122.8, 45.4], [-123.3, 45.4], [-123.3, 44.8]]] },
            properties: {
                id: "willamette", name: "Willamette Valley", country: "USA",
                history: "Pioneered in the 1960s by UC Davis graduates searching for the perfect cool-climate substitute to Burgundy. Now a global Pinot Noir epicenter.",
                geography: "A 150-mile long valley in Oregon shielded from the Pacific Ocean by the Coast Range. Cool, wet winters and dry, warm summers.",
                terroir: "Marine sedimentary (Willakenzie) soils vs volcanic basalt (Jory) dictate the flavor of the wine (dark and structured vs red fruit and elegant).",
                grapes: "🍷 **Pinot Noir**: Straddles Old World earthiness and New World fruit. Cranberry, cherry, damp earth, and tea leaf.\n🥂 **Chardonnay & Pinot Gris**: High quality but overshadowed by Pinot Noir.",
                estates: [
                    { name: "Domaine Serene", description: "Massively critical acclaim, helping prove Oregon can rival Grand Cru Burgundy.", wines: [{ name: "Evenstad Reserve Pinot Noir", url: "https://www.vivino.com/search/wines?q=Domaine+Serene+Evenstad" }] },
                    { name: "Ken Wright Cellars", description: "Pioneer in mapping the distinct terroir and AVAs of the valley.", wines: [{ name: "Shea Vineyard Pinot Noir", url: "https://www.vivino.com/search/wines?q=Ken+Wright+Shea" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-70.8, -33.8], [-70.3, -33.8], [-70.3, -33.2], [-70.8, -33.2], [-70.8, -33.8]]] },
            properties: {
                id: "maipo", name: "Maipo Valley", country: "Chile",
                history: "Often called the 'Bordeaux of South America'. Pre-phylloxera Bordeaux vines were brought here in the mid-19th century by wealthy landowners.",
                geography: "Located just south of Santiago. Enclosed by the Andes on the east and the Coastal Range on the west.",
                terroir: "Alluvial gravel from the Andes provides perfect drainage for Cabernet Sauvignon. Cool air descending from the mountains provides needed diurnal shifts.",
                grapes: "🍷 **Cabernet Sauvignon**: Minty, eucalyptus-tinged, black fruit-driven elegance.\n🍷 **Carménère**: Chile's signature. Mistaken for Merlot for 100 years. Exhibits green bell pepper, cocoa, and red berry.',",
                estates: [
                    { name: "Concha y Toro", description: "Their 'Don Melchor' defined high-end Chilean Cabernet worldwide.", wines: [{ name: "Don Melchor Cabernet Sauvignon", url: "https://www.vivino.com/search/wines?q=Don+Melchor" }] },
                    { name: "Almaviva", description: "Another joint venture of Baron Philippe de Rothschild, this time in Chile.", wines: [{ name: "Almaviva", url: "https://www.vivino.com/search/wines?q=Almaviva+Chile" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[138.8, -34.8], [139.1, -34.8], [139.1, -34.4], [138.8, -34.4], [138.8, -34.8]]] },
            properties: {
                id: "barossa", name: "Barossa Valley", country: "Australia",
                history: "Settled by Silesian (German) immigrants in 1842. Home to the world's oldest continuously producing Shiraz vines.",
                geography: "A warm, low-lying continental valley about 60km northeast of Adelaide in South Australia.",
                terroir: "Red-brown earths and sandy loams. The heat bakes the fruit, producing intensely concentrated, high-alcohol wines.",
                grapes: "🍷 **Shiraz**: Opulent, full-bodied. Blackberry jam, dark chocolate, eucalyptus.\n🍷 **GSM Blends**: Grenache, Shiraz, Mataro.",
                estates: [
                    { name: "Penfolds", description: "Creators of 'Grange', the most famous Australian wine.", wines: [{ name: "Grange", url: "https://www.vivino.com/search/wines?q=Penfolds+Grange" }] },
                    { name: "Henschke", description: "Tends to the legendary 'Hill of Grace' single vineyard.", wines: [{ name: "Hill of Grace", url: "https://www.vivino.com/search/wines?q=Henschke+Hill+of+Grace" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[14.8, 37.0], [15.1, 37.0], [15.1, 37.8], [14.8, 37.8], [14.8, 37.0]]] },
            properties: {
                id: "sicily", name: "Sicily (Mt. Etna)", country: "Italy",
                history: "Wine has been produced here for millennia, but only recently has Mt. Etna exploded in popularity as the 'Burgundy of the Mediterranean'.",
                geography: "Elevated vineyards on the slopes of the active volcano Mount Etna, reaching dizzying heights to escape the Mediterranean heat.",
                terroir: "Pure, black, mineral-rich volcanic ash and pumice. Imparts a profoundly smoky, iron-like minerality to the wines.",
                grapes: "🍷 **Nerello Mascalese**: Often compared to Pinot Noir. High acid, fine tannin, pale color, wild red cherry, and smoke.\n🥂 **Carricante**: Razor-sharp, wildly acidic, saline white wine with extreme aging potential.",
                estates: [
                    { name: "Tenuta delle Terre Nere", description: "Pioneers of single-vineyard (Contrada) bottling on Etna.", wines: [{ name: "Etna Rosso", url: "https://www.vivino.com/search/wines?q=Terre+Nere+Etna+Rosso" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[-4.3, 41.5], [-3.7, 41.5], [-3.7, 41.8], [-4.3, 41.8], [-4.3, 41.5]]] },
            properties: {
                id: "ribera", name: "Ribera del Duero", country: "Spain",
                history: "While Vega Sicilia dominated since the 1800s, the DO was only created in 1982. It's now Spain's most prestigious zone for powerful reds.",
                geography: "A high-altitude, flat, central plateau cut by the Duero river. Punishing continental climate: scorching summers and freezing winters.",
                terroir: "Limestone, chalk, and clay. Extreme diurnal shifts (hot days, freezing nights) lock in acidity.",
                grapes: "🍷 **Tinto Fino (Tempranillo clone)**: Unlike Rioja, these are monolithic, inky, massive, black-fruit-driven, and highly concentrated wines typically aged in French oak.",
                estates: [
                    { name: "Vega Sicilia", description: "The undisputed king of Spanish wine. Their 'Unico' ages for a decade before release.", wines: [{ name: "Unico", url: "https://www.vivino.com/search/wines?q=Vega+Sicilia+Unico" }] },
                    { name: "Dominio de Pingus", description: "The original Spanish 'Cult Wine', created by Peter Sisseck. Minuscule production and vast prices.", wines: [{ name: "Pingus", url: "https://www.vivino.com/search/wines?q=Pingus" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[7.2, 48.0], [7.7, 48.0], [7.7, 48.9], [7.2, 48.9], [7.2, 48.0]]] },
            properties: {
                id: "alsace", name: "Alsace", country: "France",
                history: "Has bounced between French and German control for centuries. Uniquely labels by grape variety rather than geographic region.",
                geography: "A completely dry, sun-drenched corridor nestled in the deep rain shadow of the Vosges mountains in eastern France.",
                terroir: "A mosaic of over 13 soil types (granite, limestone, pink sandstone). Incredibly diverse.",
                grapes: "🥂 **Riesling**: Dry, steely, and more powerful/alcoholic than German counterparts.\n🥂 **Gewürztraminer**: Insanely aromatic. Lychee, rose petal, ginger. Full-bodied, oily texture.",
                estates: [
                    { name: "Trimbach", description: "Produces 'Clos Ste Hune', arguably the greatest dry Riesling on the planet.", wines: [{ name: "Clos Ste Hune Riesling", url: "https://www.vivino.com/search/wines?q=Trimbach+Clos+Ste+Hune" }] },
                    { name: "Zind-Humbrecht", description: "Masters of biodynamics producing incredibly intense, rich, off-dry styles.", wines: [{ name: "Gewurztraminer Hengst Grand Cru", url: "https://www.vivino.com/search/wines?q=Zind+Humbrecht+Hengst" }] }
                ]
            }
        }
    ]
};
