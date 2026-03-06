export const wineRegionsData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.5,
          44.8
        ]
      },
      "properties": {
        "id": "bordeaux",
        "name": "Bordeaux",
        "country": "France",
        "history": "Following the WSET Level 3 curriculum, Bordeaux's reputation is built upon centuries of trade facilitated by the Gironde Estuary, Rivers Garonne and Dordogne. It gained global prominence when Eleanor of Aquitaine married Henry Plantagenet (later King Henry II of England) in 1152, starting a monopoly on the English wine market. The 1855 Classification established a hierarchy of estates on the Left Bank that still influences global prices today. In the modern era, the emphasis has shifted towards precision viticulture and terroir expression, overcoming historic issues with bulk production.",
        "geography": "Located in southwestern France on the 45th parallel, Bordeaux enjoys a moderate maritime climate. The Gulf Stream transports warm water from the Caribbean, warming the region and extending its growing season, which is essential for late-ripening varieties like Cabernet Sauvignon. The Landes forest to the west protects vineyards from the worst Atlantic storms. However, high rainfall throughout the year can disrupt flowering, cause rot, and dilute flavors during harvest. Frost is also a periodic hazard.",
        "terroir": "Terroir in Bordeaux is strictly divided by the rivers. The Left Bank (Médoc, Graves) is dominated by gravelly soils deposited by river action; these soils drain rapidly and reflect heat, crucial for ripening Cabernet Sauvignon. The Right Bank (Saint-Émilion, Pomerol) features clay-limestone and sandier soils which are cooler, perfectly suited for Merlot and Cabernet Franc. Underlying limestone beds provide excellent drainage across the region.",
        "grapes": [
          {
            "name": "Cabernet Sauvignon",
            "description": "Thick-skinned and late-ripening, thriving on the Left Bank gravels. Produces high-tannin, high-acidity wines with blackcurrant (cassis), green bell pepper, and cedar notes that age for decades.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Merlot",
            "description": "Early ripening and the most widely planted grape. Grown primarily on the Right Bank's cooler clay soils. It offers soft tannins, medium to high alcohol, with plum, blackberry, and fruitcake flavors.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Sauvignon Blanc & Sémillon",
            "description": "Sauvignon Blanc provides grassy, gooseberry aromas and high acidity for dry whites. Sémillon provides body and affinity for botrytis (noble rot), essential for the great sweet wines of Sauternes.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Château Lafite Rothschild",
            "description": "First Growth. Known for elegance, perfumed aromatics, and extreme longevity.",
            "wines": [
              {
                "name": "Château Lafite Rothschild",
                "url": "https://www.vivino.com/search/wines?q=Chateau+Lafite+Rothschild"
              }
            ]
          },
          {
            "name": "Château Petrus",
            "description": "The most famous wine from Pomerol. A near-pure expression of Merlot on blue clay.",
            "wines": [
              {
                "name": "Petrus",
                "url": "https://www.vivino.com/search/wines?q=Petrus+Pomerol"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Haut-Médoc (Left Bank)",
            "description": "The pinnacle of Cabernet Sauvignon production, containing the famous communes of Pauillac, Margaux, Saint-Julien, and Saint-Estèphe.",
            "geography": "Gravel mounds (croupes) parallel to the Gironde estuary.",
            "grapes": "Cabernet Sauvignon dominant, blended with Merlot."
          },
          {
            "name": "Saint-Émilion & Pomerol (Right Bank)",
            "description": "Home to the original 'garagiste' movement and opulent, softer, earlier-drinking reds.",
            "geography": "The plateau of Saint-Émilion (limestone) and the blue clay of Pomerol.",
            "grapes": "Merlot dominant, with Cabernet Franc."
          },
          {
            "name": "Graves & Pessac-Léognan",
            "description": "Located south of the city of Bordeaux, excelling in both red and premium dry white wines.",
            "geography": "Deep gravel soils similar to the Médoc but slightly warmer.",
            "grapes": "Cabernet Sauvignon, Sauvignon Blanc, Sémillon."
          },
          {
            "name": "Sauternes",
            "description": "World-famous sweet wine appellation reliant on Botrytis cinerea (noble rot).",
            "geography": "Morning autumn mists from the cool Ciron joining the warmer Garonne river promote noble rot.",
            "grapes": "Sémillon (dominant), Sauvignon Blanc."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.8,
          47
        ]
      },
      "properties": {
        "id": "burgundy",
        "name": "Burgundy (Bourgogne)",
        "country": "France",
        "history": "Burgundy (Bourgogne) represents the global standard for terroir-driven Pinot Noir and Chardonnay. Its history is deeply intertwined with the Cistercian and Benedictine monks who meticulously mapped the soil variations (climats) over centuries in the Middle Ages. The French Revolution dismantled Church and aristocratic holdings, and the Napoleonic inheritance laws resulted in extreme fragmentation of vineyard ownership. Today, a single Grand Cru vineyard like Clos de Vougeot is divided among dozens of individual producers.",
        "geography": "Burgundy stretches across eastern France with a moderate continental climate. The region experiences cold winters and warm summers. Weather hazards are severe: spring frosts can wipe out buds (Chablis is notoriously susceptible), and localized summer hailstorms can destroy crops. Rain during harvest is also a persistent threat, requiring careful canopy management and vintage variation acceptance.",
        "terroir": "The soils are predominantly limestone and marl (calcareous clay) dating back to the Jurassic period. The exact ratio determines the grape planting: Chardonnay performs best on limestone-dominant soils (e.g., Côte de Beaune, Chablis), while Pinot Noir demands more marl (e.g., Côte de Nuits). The best vineyards (Grand Cru and Premier Cru) are located mid-slope (mi-coteau) where drainage is optimal and frost risk is minimized.",
        "grapes": [
          {
            "name": "Pinot Noir",
            "description": "A notoriously fickle, thin-skinned grape highly sensitive to terroir. Produces wines with low to medium tannins, high acidity, and flavors ranging from red cherry/strawberry in youth to earth, mushroom, and game with bottle age.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chardonnay",
            "description": "A non-aromatic variety that acts as a blank canvas for terroir and winemaking techniques. Ranges from steely, high-acid, green-apple Chablis to rich, buttery, hazelnut-scented Meursault.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Domaine de la Romanée-Conti (DRC)",
            "description": "The most prestigious and expensive wine estate in the world.",
            "wines": [
              {
                "name": "Romanée-Conti Grand Cru",
                "url": "https://www.vivino.com/search/wines?q=Romanee+Conti"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Chablis",
            "description": "The northernmost part of Burgundy, producing exclusively white wines known for their steely, citrus, and flinty (pierres à fusil) character.",
            "geography": "Cool continental climate with severe frost risks. Famous for upper Kimmeridgian clay-limestone soils containing fossilized oyster shells.",
            "grapes": "100% Chardonnay."
          },
          {
            "name": "Côte de Nuits",
            "description": "The northern half of the Côte d'Or ('Slopes of Gold'), producing virtually all of Burgundy's Grand Cru red wines.",
            "geography": "East-facing limestone and marl slopes. Famous villages include Gevrey-Chambertin, Vosne-Romanée, and Nuits-Saint-Georges.",
            "grapes": "Pinot Noir."
          },
          {
            "name": "Côte de Beaune",
            "description": "The southern half of the Côte d'Or, famous for the world's greatest dry white wines and elegant reds.",
            "geography": "Limestone-rich soils with famous communes like Meursault, Puligny-Montrachet, and Volnay.",
            "grapes": "Chardonnay and Pinot Noir."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.3,
          43.4
        ]
      },
      "properties": {
        "id": "tuscany",
        "name": "Tuscany",
        "country": "Italy",
        "history": "Tuscany's identity is inextricably linked to the Sangiovese grape and the sweeping hills of the Renaissance heartland. The Chianti region dates back to a 1716 edict by the Grand Duke of Tuscany. In the 1970s, frustration with archaic, restrictive DOC laws forcing producers to blend white grapes into Chianti led to the 'Super Tuscan' rebellion, where winemakers illegally blended Sangiovese with Bordeaux varieties or used 100% Cabernet, changing Italian wine laws forever.",
        "geography": "Tuscany is characterized by a warm Mediterranean climate along the coast, shifting to a more moderate continental climate in the inland hills. Altitude is the most critical quality factor. High-altitude vineyards (up to 500m) experience high diurnal temperature ranges (warm days, cool nights), which is vital to retain Sangiovese's naturally high acidity and extend its ripening window.",
        "terroir": "The region features a patchwork of soils. The best inland zones (Chianti Classico, Montalcino) are characterized by 'Galestro' (a crumbly, rocky clay-marl) and 'Alberese' (hard limestone). These poor soils limit vigor and concentrate flavors. Towards the coastal Maremma (Bolgheri), soils are flat and sandy-clay, better suited to Bordeaux varieties.",
        "grapes": [
          {
            "name": "Sangiovese",
            "description": "Late ripening with naturally high acidity and high tannins. Exhibits tart red cherry, plum, dried herbs, and earth. Requires careful canopy management to avoid uneven ripening.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cabernet Sauvignon & Merlot",
            "description": "Introduced via the Super Tuscan movement. Often blended with Sangiovese to add dark fruit color, soften acidity, and introduce international appeal. Dominant on the coast.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Tenuta San Guido",
            "description": "Birthplace of the Super Tuscan. Flagship wine 'Sassicaia'.",
            "wines": [
              {
                "name": "Sassicaia",
                "url": "https://www.vivino.com/search/wines?q=Sassicaia"
              }
            ]
          },
          {
            "name": "Biondi-Santi",
            "description": "Inventor of Brunello di Montalcino. Traditional and long-lived.",
            "wines": [
              {
                "name": "Brunello di Montalcino Riserva",
                "url": "https://www.vivino.com/search/wines?q=Biondi+Santi"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Chianti Classico",
            "description": "The historic heartland of Chianti, producing the most concentrated, structured, and age-worthy Sangiovese blends (now requiring 80% minimum Sangiovese).",
            "geography": "High altitude hills between Florence and Siena with Galestro soils.",
            "grapes": "Sangiovese, Canaiolo, Cabernet Sauvignon."
          },
          {
            "name": "Brunello di Montalcino",
            "description": "The pinnacle of powerful, 100% Sangiovese. By law, it requires an immense 5 years of aging before release (6 for Riserva), resulting in garnet-colored, highly complex wines.",
            "geography": "Warmer, drier microclimate in southern Tuscany, leading to fuller bodies.",
            "grapes": "100% Sangiovese (local clone: Grosso)."
          },
          {
            "name": "Bolgheri (Coastal Tuscany)",
            "description": "The birthplace of the Super Tuscans (e.g., Sassicaia, Ornellaia), heavily influenced by the maritime climate of the Tyrrhenian Sea.",
            "geography": "Lower-lying coastal plains with gravel and clay.",
            "grapes": "Cabernet Sauvignon, Merlot, Cabernet Franc."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.3,
          38.4
        ]
      },
      "properties": {
        "id": "napa",
        "name": "Napa Valley",
        "country": "USA",
        "history": "Napa Valley, though producing wine since the mid-19th century, was truly catapulted to global fame by the pivotal 1976 'Judgment of Paris', a blind tasting where Napa Valley Cabernet and Chardonnay dramatically defeated top-tier Bordeaux and Burgundy. The region operates on immense capital investment, producing ultra-premium, cult-status wines (e.g., Screaming Eagle, Harlan Estate) that redefine modern power and concentration. It is the driving force behind American AVA (American Viticultural Area) legislation and world-class wine tourism.",
        "geography": "Geographically tiny, measuring just 30 miles long. Flanked by the Mayacamas Mountains to the west and the Vaca Range to the east. The overarching climate is defined by the San Pablo Bay in the south. In summer, the hot central valley pulls in cool, moist fog from the bay every evening. This fog funnels northwards, drastically chilling the southern AVA's (e.g., Carneros) while the northernmost reaches (Calistoga) remain scorching hot until late in the day. This creates massive diurnal temperature shifts essential to acid retention.",
        "terroir": "Due to ancient seismic activity and volcanic eruptions, Napa's soils are uniquely complex containing half the world's soil orders. The valley floor comprises deep, fertile, alluvial deposits that produce luscious, massive-bodied Cabernets. Conversely, the mountain AVAs (Howell Mountain, Mount Veeder) consist of thin, well-draining volcanic and sedimentary rock. These nutrient-scarce slopes stress the vines, resulting in minute berries with incredibly dense, structural tannins and lower alcohol.",
        "grapes": [
          {
            "name": "Cabernet Sauvignon",
            "description": "The undisputed king of Napa. Produces opulent, full-bodied wines with explosive aromas of crème de cassis, mint, baked blackberry, and heavy integration of new vanilla-scented American and French oak.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chardonnay",
            "description": "Historically vinified in a massive, buttery, heavily oaked style with full malolactic conversion. Modern trends are shifting toward more elegant, crisp interpretations, especially in cooler Carneros.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Merlot",
            "description": "Widely planted to blend with Cabernet. Yields incredibly soft, plush, chocolate-and-plum driven wines with silky tannins.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Screaming Eagle",
            "description": "The ultimate California 'Cult Wine'.",
            "wines": [
              {
                "name": "Cabernet Sauvignon",
                "url": "https://www.vivino.com/search/wines?q=Screaming+Eagle"
              }
            ]
          },
          {
            "name": "Opus One",
            "description": "Historic joint venture between Mondavi and Rothschild.",
            "wines": [
              {
                "name": "Opus One",
                "url": "https://www.vivino.com/search/wines?q=Opus+One"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Rutherford & Oakville (Valley Floor)",
            "description": "The 'sweet spot' in the mid-valley producing the most famous cult Cabernets. Known for 'Rutherford Dust'—a unique textural tannin profile.",
            "geography": "Warm daytime temperatures balanced by morning fog. Alluvial fan deposits.",
            "grapes": "Cabernet Sauvignon."
          },
          {
            "name": "Howell Mountain & Atlas Peak",
            "description": "High-altitude AVAs producing massive, brooding, fiercely tannic wines requiring extensive cellaring.",
            "geography": "Above the fog line facing west. Harsh, thin volcanic soils.",
            "grapes": "Cabernet Sauvignon, Zinfandel."
          },
          {
            "name": "Los Carneros",
            "description": "The southernmost AVA stretching into Sonoma. Exclusively produces premium Pinot Noir and Chardonnay for still and traditional method sparkling wines.",
            "geography": "The coolest region due to persistent, intense morning bay fogs and coastal breezes.",
            "grapes": "Chardonnay, Pinot Noir."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8,
          44.6
        ]
      },
      "properties": {
        "id": "piedmont",
        "name": "Piedmont (Piemonte)",
        "country": "Italy",
        "history": "Piedmont, literally 'at the foot of the mountains,' is Italy's equivalent to Burgundy. It is culturally distinct, heavily influenced by its proximity to France and its history as the seat of the House of Savoy, Italy's royal family. The reputation of Piedmont relies entirely on small, fiercely independent estates producing highly aromatic, age-worthy single-varietal wines, particularly from the noble Nebbiolo grape.",
        "geography": "Located in northwest Italy, surrounded on three sides by the Alps and Apennines. It has a moderate continental climate with long, cold winters and summers subject to severe thunderstorms and hail. A critical climatic feature is the autumn fog ('nebbia'), which gives the Nebbiolo grape its name and provides a slow, extended ripening period essential for tannin and flavor development.",
        "terroir": "The finest vineyards of the Langhe hills (Barolo and Barbaresco) are situated on steep, south-facing slopes composed of calcareous marl and sandstone at altitudes between 300 to 500 meters. The exact composition dictates the style: Tortonian blue marl yields more approachable, perfumed Barolos, while Helvetian sandstone yields fiercely tannic wines requiring decades to soften.",
        "grapes": [
          {
            "name": "Nebbiolo",
            "description": "A profoundly challenging, late-ripening grape. In its youth, it has brutal tannins and searing acidity, masking pale color. With age, it reveals intoxicating aromas of 'tar and roses,' sour cherry, truffle, and leather.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Barbera",
            "description": "The most widely planted grape. Naturally high in acidity and low in tannin, providing the everyday juicy, sour-cherry driven wine for locals while they wait for their Barolos to age.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Gaja",
            "description": "Visionary who modernized Barbaresco and Barolo.",
            "wines": [
              {
                "name": "Barbaresco",
                "url": "https://www.vivino.com/search/wines?q=Gaja+Barbaresco"
              }
            ]
          },
          {
            "name": "Giacomo Conterno",
            "description": "The absolute pinnacle of traditional Barolo.",
            "wines": [
              {
                "name": "Monfortino Barolo Riserva",
                "url": "https://www.vivino.com/search/wines?q=Conterno+Monfortino"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Barolo DOCG",
            "description": "The 'King of Wines and Wine of Kings.' Requires a minimum of 38 months aging before release (62 for Riserva). Highly tannic, majestic expressions of Nebbiolo.",
            "geography": "A tight cluster of villages (e.g., La Morra, Serralunga) on calcareous marl hills.",
            "grapes": "100% Nebbiolo."
          },
          {
            "name": "Barbaresco DOCG",
            "description": "Barolo's slightly lower-altitude, warmer neighbor. The wines ripen earlier, have slightly softer tannins, and require less cellaring (26 months minimum).",
            "geography": "South-facing hillsides adjacent to the Tanaro River.",
            "grapes": "100% Nebbiolo."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -2.5,
          42.4
        ]
      },
      "properties": {
        "id": "rioja",
        "name": "Rioja",
        "country": "Spain",
        "history": "Rioja is Spain's most famous and historic wine region. Its modern identity was forged in the 19th century when phylloxera devastated Bordeaux; French merchants crossed the Pyrenees mountains seeking wine, bringing with them the 225-liter oak barrique. The traditional reliance on extended American oak aging (often for a decade before release) defined the classic style, though a modern wave now emphasizes French oak and primary fruit expression.",
        "geography": "Located in northern Spain, Rioja is sheltered from the wet, cold Atlantic weather systems by the Cantabrian Mountains. The region is divided into three distinct zones flanking the Ebro River. The climate shifts from maritime-influenced in the northwest to hotter, drier, and more Mediterranean in the southeast. Vineyards are planted at altitudes up to nearly 800m.",
        "terroir": "Soils vary distinctly by sub-zone. Rioja Alavesa and Alta have chalky clay-limestone and iron-rich clay soils, which promote freshness, structure, and elegance. Rioja Oriental (formerly Baja) in the southeast features heavier, alluvial silt and clay, resulting in higher yields of robust, high-alcohol grapes.",
        "grapes": [
          {
            "name": "Tempranillo",
            "description": "An early-ripening variety (temprano = early) yielding medium acid, medium tannin wines with strawberry, plum, and a strong affinity for vanilla/coconut flavors derived from American oak.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Garnacha (Grenache)",
            "description": "Adds alcohol, body, and red fruit to the traditional Rioja blend. Dominant in the hotter Rioja Oriental zone.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Viura (Macabeo)",
            "description": "The principal white grape, historically heavily oaked and oxidized, but modern versions are crisp, fresh, and stainless-steel fermented.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "La Rioja Alta, S.A.",
            "description": "Standard-bearer for traditional Rioja. Long American oak aging.",
            "wines": [
              {
                "name": "Gran Reserva 890",
                "url": "https://www.vivino.com/search/wines?q=La+Rioja+Alta+890"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Rioja Alta",
            "description": "The high-altitude zone producing the most elegant, age-worthy Tempranillos.",
            "geography": "South of the Ebro river at high elevations. Clay and iron soils.",
            "grapes": "Tempranillo."
          },
          {
            "name": "Rioja Alavesa",
            "description": "The smallest, coolest zone governed by the Basque country. Produces lighter, highly aromatic wines often consumed younger via semi-carbonic maceration.",
            "geography": "North of the Ebro, highest elevations, pure chalky soils.",
            "grapes": "Tempranillo."
          },
          {
            "name": "Rioja Oriental (Baja)",
            "description": "The warmest, flattest zone, acting as the structural blending backbone for Garnacha.",
            "geography": "Mediterranean influence, alluvial soils.",
            "grapes": "Garnacha."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.9,
          44.5
        ]
      },
      "properties": {
        "id": "rhone",
        "name": "Rhône Valley",
        "country": "France",
        "history": "The Rhône Valley follows the path of the Rhône River from central France toward the Mediterranean. It is viticulturally split into two distinct sectors (North and South) that share little besides the river. The region boasts deep historical ties to the Avignon Papacy in the 14th century, which established the fame of Châteauneuf-du-Pape ('New Castle of the Pope').",
        "geography": "The Northern Rhône has a moderate continental climate. The valley is extremely narrow and steep, requiring vines to be planted on terraced slopes. The Southern Rhône expands into a broad, flat valley with a warm Mediterranean climate. Both regions are battered by the Mistral, a ferocious, cold, dry wind blowing down from the Alps that can strip leaves off vines but crucially prevents fungal diseases.",
        "terroir": "In the North, soils are dominated by heat-retaining granite on steep slopes, crucial for ripening Syrah at its northern limit. In the South, soils are incredibly diverse, from sandy plots to the iconic galets roulés (large, smooth river stones) of Châteauneuf-du-Pape which absorb the sun's heat during the day and radiate it back to the vines at night.",
        "grapes": [
          {
            "name": "Syrah",
            "description": "The only permitted red grape in the Northern Rhône. Yields deeply colored, full-bodied wines with high tannin and distinctive aromas of black pepper, smoked meat, and black olive.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Grenache, Syrah, Mourvèdre (GSM)",
            "description": "In the South, Grenache dominates (red fruit, high alcohol, low tannin), blended with Syrah (color, tannin) and Mourvèdre (gamey, dark fruit, structure).",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Viognier",
            "description": "An aromatic white grape from the North (Condrieu) producing low-acid, high-alcohol wines with exotic aromas of apricot, peach, and blossom.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "E. Guigal",
            "description": "Master of the Northern Rhône, famous for their 'La La's' in Côte-Rôtie.",
            "wines": [
              {
                "name": "Côte-Rôtie 'La Mouline'",
                "url": "https://www.vivino.com/search/wines?q=Guigal+La+Mouline"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Côte Rôtie (North)",
            "description": "The 'Roasted Slope' produces the most elegant, perfumed Syrahs, historically co-fermented with a tiny percentage of white Viognier.",
            "geography": "Extremely steep, south-facing granite terraces.",
            "grapes": "Syrah, Viognier."
          },
          {
            "name": "Hermitage (North)",
            "description": "A single, massive south-facing hill that produces legendary, long-lived, powerful Syrah and full-bodied whites.",
            "geography": "Granite hill commanding the river bend.",
            "grapes": "Syrah, Marsanne, Roussanne."
          },
          {
            "name": "Châteauneuf-du-Pape (South)",
            "description": "The grandest appellation of the south, famous for permitting up to 13 different grape varieties in a single blend.",
            "geography": "Vast flatter plain covered in 'galets' stones and heavily impacted by the Mistral.",
            "grapes": "Grenache, Mourvèdre, Syrah, Cinsault."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7,
          50
        ]
      },
      "properties": {
        "id": "mosel",
        "name": "Mosel",
        "country": "Germany",
        "history": "The Mosel river valley represents the absolute pinnacle of global Riesling production. Cultivated since the Roman era, the steep slaty slopes were historically worked by monks. By the late 19th century, top German Rieslings from the Mosel and Rheingau commanded prices higher than First Growth Bordeaux. Despite enduring challenges with world wars and the 1970s sweet-wine reputation crisis, the 'Prädikatswein' system classifies these noble, ethereal wines purely on the un-chaptalized natural sugar weight (Oechsle) of the grape at harvest.",
        "geography": "With latitudes around 50°N, the Mosel endures a cool continental climate pushing the extreme limits of viticulture. Maximizing solar radiation is an obsessive necessity. The Mosel river winds its way through extreme gorges, ensuring the best vineyards face directly south. The river itself acts as a massive thermal mirror, bouncing sunlight directly into the canopy to aid slow, steady ripening well into late autumn without losing acidity.",
        "terroir": "The iconic terroir is composed of pure Devonian blue, red, and grey slate. This rock is virtually devoid of organic matter and incredibly heat-retentive. It fractures easily, storing heat during the day and radiating it back onto the vines at night, preventing frost. The slopes are impossibly steep—frequently 60 to 70 degrees—requiring all vineyard work (and harvest) to be painstakingly done by hand via winch lines.",
        "grapes": [
          {
            "name": "Riesling",
            "description": "The absolute king of the Mosel. Its natural resistance to frost and ability to hang on the vine for extended periods yield wines with searingly high, crystalline acidity, extremely low alcohol (often 7-9%), and unbelievable tension, residual sugar balance, and longevity.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Joh. Jos. Prüm",
            "description": "Legendary for age-worthy, brilliantly precise sweet wines.",
            "wines": [
              {
                "name": "Wehlener Sonnenuhr Spätlese",
                "url": "https://www.vivino.com/search/wines?q=JJ+Prum+Wehlener"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Middle Mosel (Mittelmosel)",
            "description": "The epicenter of quality encompassing incredibly famous villages like Bernkastel, Wehlen, and Piesport.",
            "geography": "Dramatic river meanders where pure slate vineyards (e.g., Wehlener Sonnenuhr) perfectly face south/south-west.",
            "grapes": "100% Riesling."
          },
          {
            "name": "Lower Mosel (Terrassenmosel)",
            "description": "The northern stretch toward the Rhine river. So narrow that the slopes are literally terraced with stone walls.",
            "geography": "Steepest vineyards globally (like the Bremmer Calmont), exceptionally warm trapped microclimates.",
            "grapes": "Riesling."
          },
          {
            "name": "Saar & Ruwer",
            "description": "Two small tributaries of the Mosel. Historically too cold to ripen grapes, but in a warming climate, they now produce some of Germany's most racy, austere, and electric Rieslings.",
            "geography": "Higher altitude, cooler side-valleys.",
            "grapes": "Riesling."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          173.8,
          -41.5
        ]
      },
      "properties": {
        "id": "marlborough",
        "name": "Marlborough",
        "country": "New Zealand",
        "history": "Unlike ancient European regions, Marlborough's fame is explosive and incredibly recent. Until 1973, it was primarily sheep grazing land. The planting of Sauvignon Blanc here entirely disrupted the global wine market by the 1980s, introducing an unprecedented, intensely aromatic style of wine that created an immediate, insatiable global demand. It transformed New Zealand into a world-leading exporter.",
        "geography": "Located at the northeast tip of New Zealand’s South Island, Marlborough enjoys a remarkably sunny, cool maritime climate. The massive Southern Alps to the west completely block the torrential rains coming off the Tasman Sea (the rain shadow effect) making it one of NZ's sunniest and driest regions. The key feature is the massive diurnal shift: brilliant, high UV-index sunny days matched by freezing, crisp nights that completely halt ripening and lock in searing malic acidity.",
        "terroir": "Situated along the Wairau River valley floor. Over millennia, glacial action deposited varying depths of free-draining gravelly soils. These stones limit vine vigor (vital for the hyper-vigorous Sauvignon Blanc grape) and absorb solar heat during the day, radiating it back at night. Soils closer to the coast become siltier and heavier, retaining more water.",
        "grapes": [
          {
            "name": "Sauvignon Blanc",
            "description": "The defining grape. Explosively aromatic, characterized by pungent passionfruit, gooseberry, jalapeño, and undeniably striking 'cat’s pee on a gooseberry bush' notes, backed by razor-sharp acidity.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Pinot Noir",
            "description": "Increasing in importance. Produces medium-bodied, fruit-forward wines packed with dark cherry, raspberry, and spicy oak notes. Crucial for both still and traditional method sparkling wines.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chardonnay",
            "description": "A major component for Marlborough's massive sparkling wine industry, often exhibiting crisp citrus and stone fruit profiles with high natural acidity.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Cloudy Bay",
            "description": "The estate that defined the style in the 80s.",
            "wines": [
              {
                "name": "Sauvignon Blanc",
                "url": "https://www.vivino.com/search/wines?q=Cloudy+Bay+Sauvignon+Blanc"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Wairau Valley",
            "description": "The historic, sprawling heart of the region offering the classic, explosive passionfruit and tropical-leaning style of Sauvignon Blanc.",
            "geography": "A wide, ancient riverbed with deep, highly-draining stony gravels. The warmest sub-region.",
            "grapes": "Sauvignon Blanc."
          },
          {
            "name": "Awatere Valley",
            "description": "Located to the south, it produces a radically different style: searingly high acidity, lean, and dominated by intense herbaceous, tomato-leaf, and jalapeño notes.",
            "geography": "Cooler, windier, and drier. Vines struggle in the loess and stony soils.",
            "grapes": "Sauvignon Blanc, Pinot Noir."
          },
          {
            "name": "Southern Valleys",
            "description": "A series of tributary valleys jutting into the hillsides, highly prized for producing the region's best structured Pinot Noirs.",
            "geography": "Heavy, water-retaining clay soils (loess) on hillside slopes that naturally restrict vigor.",
            "grapes": "Pinot Noir."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.8,
          -33.9
        ]
      },
      "properties": {
        "id": "stellenbosch",
        "name": "Stellenbosch",
        "country": "South Africa",
        "history": "Stellenbosch is the historic, academic, and qualitative heartland of South African wine, established in 1679 by the Dutch East India Company. It hosts the country’s leading viticultural university. In the post-Apartheid era, massive modernization of vineyards shifted the focus from high-yield bulk production towards premium, internationally recognized Bordeaux blends, premium Chenin Blanc, and the domestic crossing, Pinotage.",
        "geography": "A moderate-to-warm Mediterranean climate set against spectacular mountainous backdrops. Sitting just inland from the coast, the region is saved from overwhelming heat by the 'Cape Doctor'—an infamous, fiercely powerful southeasterly wind. This wind relentlessly cools the vineyards, lowers humidity (eradicating fungal diseases), and batters the vines into submission, naturally reducing grape yields towards premium concentration.",
        "terroir": "The topography is extremely rugged and folded with dramatic granite mountains dominating the landscape. Soils are impressively diverse: the valley floors boast deep, water-retaining alluvial soils, while the mountain slopes are marked by ancient decomposed granite and shale. These well-draining, infertile slopes are the holy grail for premium Cabernet Sauvignon.",
        "grapes": [
          {
            "name": "Cabernet Sauvignon",
            "description": "The crown jewel. Produces exceptionally structured, muscular wines combining the massive blackcurrant/cassis power of Napa with the refined, herbal/cedar elegance of Bordeaux.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chenin Blanc (Steen)",
            "description": "The historic white workhorse successfully elevated to premium status. Expect rich, full-bodied whites laden with bruised apple, peach, honey, and high natural acidity.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Pinotage",
            "description": "A distinctly South African crossing of Pinot Noir and Cinsault. Historically maligned for 'burnt rubber' aromas, modern premium examples are rich, dark-fruited, spicy, and deeply complex.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Kanonkop",
            "description": "Masters of Pinotage and Bordeaux blends. The 'First Growth' of the Cape.",
            "wines": [
              {
                "name": "Paul Sauer",
                "url": "https://www.vivino.com/search/wines?q=Kanonkop+Paul+Sauer"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Simonsberg-Stellenbosch",
            "description": "The preeminent 'First Growth' ward of South Africa, famous for profound, incredibly age-worthy Bordeaux blends and Cabernet Sauvignon.",
            "geography": "High mountain slopes facing perfectly to capture the sun while avoiding the most brutal winds.",
            "grapes": "Cabernet Sauvignon, Merlot."
          },
          {
            "name": "Bottelary Hills",
            "description": "An important undulating ward noted for its exceptional premium Chenin Blanc and Pinotage derived from old, low-yielding bush vines.",
            "geography": "Rolling hills acting as a funnel for the cooling Cape Doctor wind.",
            "grapes": "Chenin Blanc, Pinotage."
          },
          {
            "name": "Helderberg",
            "description": "Situated closer to the ocean (False Bay).",
            "geography": "Strongest maritime influence, producing slightly cooler, more elegant expressions of Cabernet and premium Sauvignon Blanc.",
            "grapes": "Cabernet Sauvignon, Sauvignon Blanc."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4,
          49.1
        ]
      },
      "properties": {
        "id": "champagne",
        "name": "Champagne",
        "country": "France",
        "history": "Champagne is synonymous with luxury and celebration, but historically it struggled with its cold climate, leading to wines that unintentionally refermented in the bottle during the spring thaw. Dom Pérignon did not 'invent' sparkling wine, but rather perfected blending techniques to balance harsh acidity. The region was the pioneer of the Traditional Method (Méthode Champenoise). Its landscape is scarred by history, notably the World War I trenches that ravaged the vineyards.",
        "geography": "Located at 49°N latitude, Champagne pushes the extreme northern limit for reliable viticulture. It has a cool continental climate with maritime influences. The primary challenges are winter freeze, spring frosts, and rainy, cloudy weather that threatens ripening. Extreme blending across villages, varieties, and vintages (Non-Vintage) is a historical necessity to ensure consistency.",
        "terroir": "The defining feature of Champagne is its deep, porous chalk soil (Belemnite and Micraster). This chalk serves two vital functions: it reflects sunlight back onto the vines to aid ripening, and it acts as a massive sponge, regulating water supply—draining efficiently in wet years and retaining moisture during dry spells.",
        "grapes": [
          {
            "name": "Pinot Noir",
            "description": "Provides structural backbone, red fruit aromas, and body to the blend. Planted heavily in the Montagne de Reims and Aube.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chardonnay",
            "description": "Provides high acidity, floral notes, and citrus elegance. Critical for the aging potential of the wine. Dominant in the Côte des Blancs.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Meunier",
            "description": "A late-budding mutation of Pinot Noir that avoids spring frost. Provides fruity, accessible flavors in youth but ages rapidly. Planted in the frost-prone Vallée de la Marne.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Dom Pérignon",
            "description": "Moët & Chandon's prestige cuvée. Only produced in exceptional vintage years.",
            "wines": [
              {
                "name": "Dom Pérignon Vintage",
                "url": "https://www.vivino.com/search/wines?q=Dom+Perignon"
              }
            ]
          },
          {
            "name": "Krug",
            "description": "The ultimate expression of blended, barrel-fermented Champagne.",
            "wines": [
              {
                "name": "Grande Cuvée",
                "url": "https://www.vivino.com/search/wines?q=Krug+Grande+Cuvee"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Montagne de Reims",
            "description": "A broad, wooded plateau known for fuller-bodied blends.",
            "geography": "Chalky slopes facing north, south, and east. Known for powerful Pinot Noir.",
            "grapes": "Pinot Noir."
          },
          {
            "name": "Vallée de la Marne",
            "description": "The valley following the Marne river, prone to deep spring frosts.",
            "geography": "Clay and sand soils where chalk is buried deep. Retreat for Meunier.",
            "grapes": "Meunier."
          },
          {
            "name": "Côte des Blancs",
            "description": "A perfectly east-facing ridge south of Épernay that produces the purest, most long-lived Blanc de Blancs.",
            "geography": "Outcroppings of the purest white chalk.",
            "grapes": "100% Chardonnay."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.9,
          45.4
        ]
      },
      "properties": {
        "id": "veneto",
        "name": "Veneto",
        "country": "Italy",
        "history": "Veneto is Italy's largest wine-producing region by volume, boasting global export giants like Prosecco and Pinot Grigio. However, its historical prestige is rooted entirely in the Valpolicella zone, where the ancient Roman technique of 'appassimento' (drying grapes before fermentation) was perfected to produce the legendary, massive, and powerful Amarone.",
        "geography": "A broad, diverse region stretching from the cooling alpine foothills and Lake Garda in the west down to the hot, flat Po Valley plains and the Adriatic Sea in the east. It features a warm to moderate continental climate. Lake Garda provides a crucial moderating effect for nearby vineyards, preventing winter freeze and extending the growing season.",
        "terroir": "The quality dichotomy is sharp: the flat, highly fertile alluvial plains yield massive quantities of simple, dilute wine. By contrast, the premium 'Classico' zones (e.g., Soave Classico, Valpolicella Classico) are situated squarely in the steep, well-draining limestone and volcanic hills. These poor soils restrict vine vigor, concentrating flavor.",
        "grapes": [
          {
            "name": "Corvina",
            "description": "The absolute backbone of Valpolicella and Amarone. A thick-skinned grape that excels in the drying process, offering sour cherry, bitter almond, and high acidity.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Garganega",
            "description": "The star of Soave. A late-ripening white grape producing wines with piercing acidity, chamomile, lemon, and white almond aromas that age beautifully into immense honeyed complexity.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Quintarelli",
            "description": "The mythical master of artisan Amarone.",
            "wines": [
              {
                "name": "Amarone della Valpolicella Classico",
                "url": "https://www.vivino.com/search/wines?q=Quintarelli+Amarone"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Valpolicella Classico",
            "description": "The historic, hilly heartland producing light, fresh reds up to the massively concentrated, 15%+ alcohol Amarone della Valpolicella DOCG.",
            "geography": "Steep limestone terraces north of Verona. Cool breezes from the Lessini mountains.",
            "grapes": "Corvina, Rondinella."
          },
          {
            "name": "Soave Classico",
            "description": "One of Italy's greatest white wines. The Classico zone represents the original, steep hillside plantings.",
            "geography": "Dark, basaltic volcanic soils mixed with limestone.",
            "grapes": "Garganega, Trebbiano di Soave."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.8,
          -33.4
        ]
      },
      "properties": {
        "id": "mendoza",
        "name": "Mendoza",
        "country": "Argentina",
        "history": "Mendoza historically pumped out vast quantities of low-quality wine for domestic consumption until the incredible export-driven Malbec boom of the late 90s. The region is inextricably tied to the efforts of Nicolás Catena Zapata, who abandoned high-yielding valley floor vineyards and dared to plant vines at extreme altitudes in the Uco Valley, revolutionizing global perception by proving Argentina could produce world-class, age-worthy red wines.",
        "geography": "A high-altitude desert situated in the foothills of the colossal Andes Mountains. The climate is starkly continental and incredibly arid (less than 200mm rain annually). Viticulture is only possible due to an ancient Inca canal system ('acequias') capturing crystal-clear glacial snowmelt from the Andes mountains. Summer hail—capable of instantly destroying entire vintages—is the greatest viticultural hazard, forcing producers to net their vines.",
        "terroir": "Terroir here is dictated solely by altitude. Because it sits in a desert, higher altitude decreases the temperature significantly. The finest AVAs (Luján de Cuyo and the Uco Valley) are situated between 900m to 1,500m above sea level. This extreme elevation massively increases UV radiation, forcing the Malbec grape to develop incredibly thick skins for protection, resulting in profound color intensity and tannin.",
        "grapes": [
          {
            "name": "Malbec",
            "description": "The undisputed star, originally a minor blending grape from Bordeaux. In the Andean sun, it thrives, producing deeply pigmented, plush wines brimming with dark plum, violet, and blackberry with velvet tannins.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cabernet Sauvignon",
            "description": "Increasingly important. Cultivated at high altitudes, it ripens perfectly without the 'leafy' greenness of cooler climates, offering intense blackcurrant aromas and powerful structure.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Torrontés",
            "description": "Argentina's signature white grape. Highly aromatic, exuding heady perfumes of jasmine, rose petal, and peach, yet fermenting completely bone-dry on the palate with refreshing acidity.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Catena Zapata",
            "description": "Pioneers of extreme high-altitude Malbec planting.",
            "wines": [
              {
                "name": "Adrianna Vineyard Malbec",
                "url": "https://www.vivino.com/search/wines?q=Catena+Zapata+Adrianna"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Uco Valley (Valle de Uco)",
            "description": "The undisputed premium frontier of Argentine wine, home to the most iconic, high-altitude estates globally (e.g., Gualtallary, Altamira).",
            "geography": "Extreme altitudes (up to 1,500m+) with highly calcareous (limestone-rich) alluvial soils offering searing acidity.",
            "grapes": "Malbec, Cabernet Franc, Chardonnay."
          },
          {
            "name": "Luján de Cuyo",
            "description": "The historic heart of premium Malbec, located closer to Mendoza city. Home to the first generation of grand estates.",
            "geography": "Lower altitude (900m-1,000m) than the Uco Valley. Warmer days yield lusher, rounder, sweeter-fruited Malbecs.",
            "grapes": "Malbec, Cabernet Sauvignon."
          },
          {
            "name": "Maipú",
            "description": "An older, lower-altitude sub-region containing some of the oldest pre-phylloxera vines in the world.",
            "geography": "Situated lower down, producing robust, heavily fruited wines and old-vine Syrah.",
            "grapes": "Malbec, Syrah."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -7.5,
          41.2
        ]
      },
      "properties": {
        "id": "douro",
        "name": "Douro Valley",
        "country": "Portugal",
        "history": "Demarcated in 1756 by the Marquis of Pombal, the Douro in Portugal is the oldest strictly regulated, geographically mapped wine region in the world. Historically the exclusive source of Port wine, a booming market for premium, dry, unfortified red 'Douro DOC' table wines has exploded since the 1990s, using the same indigenous grape varieties but harvested to prioritize freshness and tannin balance.",
        "geography": "Located deep inland following the Douro River, isolated from the Atlantic Ocean by the Marão mountains. The climate is harsh continental: brutally hot, arid summers and freezing winters. Rainfall is incredibly scarce, making water retention and drought management the absolute central tenets of Douro viticulture.",
        "terroir": "The steepness of the slopes is extreme (often exceeding 60 degrees), requiring incredible feats of engineering. The entire valley is carved into narrow stone terraces ('socalcos') built by hand over centuries. The bedrock is exclusively vertical schist. The vines must force their roots up to 20 meters deep into the fractured vertical schist to find microscopic water reserves.",
        "grapes": [
          {
            "name": "Touriga Nacional",
            "description": "The most prized and lowest-yielding variety. Produces intensely colored, massive-tannin wines displaying concentrated flavors of black fruit, bergamot, and violet.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Touriga Franca",
            "description": "The most widely planted variety. Needs less heat to ripen than Nacional. Essential for blending, providing intense floral aromatics and structural backbone.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Quinta do Noval",
            "description": "Famous for 'Nacional', a vintage Port made from ungrafted, pre-phylloxera vines.",
            "wines": [
              {
                "name": "Vintage Port Nacional",
                "url": "https://www.vivino.com/search/wines?q=Quinta+do+Noval+Nacional"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Baixo Corgo",
            "description": "The westernmost sub-region. The coolest and wettest part of the Douro, producing lighter wines generally intended for cheaper Ruby and Tawny Ports.",
            "geography": "Lower altitude, highest rainfall, relatively fertile soils.",
            "grapes": "Tinta Roriz, Touriga Franca."
          },
          {
            "name": "Cima Corgo",
            "description": "The heart of the region centered around Pinhão. The source of almost all the top Vintage Ports and premium dry red wines.",
            "geography": "Warmer and significantly drier than Baixo Corgo, featuring the steepest slopes.",
            "grapes": "Touriga Nacional, Touriga Franca."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.1,
          45.1
        ]
      },
      "properties": {
        "id": "willamette",
        "name": "Willamette Valley",
        "country": "USA",
        "history": "In the 1960s, a group of visionary UC Davis graduates fled the heat of California searching for a climate capable of ripening Pinot Noir to Burgundian standards. They boldly planted in the Willamette Valley in Oregon. Today, it stands shoulder-to-shoulder with Burgundy, celebrated globally for its delicate, nuanced, and intensely terroir-transparent Pinot Noirs, leading a stringent sustainability movement.",
        "geography": "Located south of Portland, Oregon. It enjoys a cool maritime climate. The Coastal Range mountains to the west block the savage Pacific Ocean storms but allow cool marine air to flow through breaks in the mountains (like the Van Duzer Corridor). Summers are dry and uniquely cool compared to California, extending the hang time deep into a risky, rainy autumn.",
        "terroir": "The terroir is famous for two strictly distinct soil profiles. 'Jory' soils are ancient, iron-rich, bright red volcanic soils that yield highly aromatic, red-fruited elegant wines. 'Willakenzie' soils are marine sedimentary soils deposited by ancient oceans, yielding darker, denser, more tannic, and structurally brooding wines. Nearly all top AVAs are located on slopes (200ft-800ft) to avoid hazardous valley floor frost.",
        "grapes": [
          {
            "name": "Pinot Noir",
            "description": "The absolute king. Stylistically positioned precisely between the delicate, earthy austerity of Burgundy and the rich, plush, jammy fruit of California. Offers vibrant cranberry, earth, and silky tannins.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chardonnay",
            "description": "Rapidly ascending alongside Pinot Noir, producing razor-sharp, flinty, high-acid white wines that strongly mimic modern Chablis.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Domaine Serene",
            "description": "Massively critical acclaim, helping prove Oregon can rival Grand Cru Burgundy.",
            "wines": [
              {
                "name": "Evenstad Reserve Pinot Noir",
                "url": "https://www.vivino.com/search/wines?q=Domaine+Serene+Evenstad"
              }
            ]
          },
          {
            "name": "Ken Wright Cellars",
            "description": "Pioneer in mapping the distinct terroir and AVAs of the valley.",
            "wines": [
              {
                "name": "Shea Vineyard Pinot Noir",
                "url": "https://www.vivino.com/search/wines?q=Ken+Wright+Shea"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Dundee Hills",
            "description": "The defining, original sub-AVA of the region. Famous for producing the most elegant, highly sought-after, red-fruited Pinot Noirs in the state.",
            "geography": "Protected from the coastal winds. Dominated exclusively by the famous red volcanic Jory soils.",
            "grapes": "Pinot Noir."
          },
          {
            "name": "Eola-Amity Hills",
            "description": "A significantly cooler AVA that produces darker, tenser, and highly age-worthy, structured Pinot Noir.",
            "geography": "Directly exposed to the howling, chilling Pacific winds funneled through the Van Duzer Corridor. Shallow, rocky soils.",
            "grapes": "Pinot Noir, Chardonnay."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.5,
          -33.6
        ]
      },
      "properties": {
        "id": "maipo",
        "name": "Maipo Valley",
        "country": "Chile",
        "history": "Maipo Valley is the historic birthplace of the Chilean wine industry. Proximity to the capital city, Santiago, led wealthy 19th-century magnates (who made fortunes in mining) to import direct, pre-phylloxera cuttings of noble vines straight from Bordeaux, alongside hiring prominent French winemakers. This legacy cemented Maipo as the aristocratic home of South America's greatest Cabernet Sauvignon.",
        "geography": "Maipo boasts an incredibly stable, warm Mediterranean climate. To the east lie the towering, snow-capped Andes Mountains, and to the west lies the Coastal Range. The climate is notoriously dry, with 300+ days of blazing sunshine annually. Crucially, as the sun sets, icy air plunges down from the Andes via the Maipo River gorge, plunging nighttime temperatures by 20°C. This extreme diurnal shift prevents over-ripening and locks in acidity.",
        "terroir": "The supreme terroir is the 'Alto Maipo' (Upper Maipo), situated at the immediate foothills of the Andes (up to 800m elevation). The soils here are a complex alluvial mix of rocks, gravel, and sand washed down by ancient glaciers. These soils are extremely fast-draining, restricting vine growth and forcing deep root penetration, leading to smaller, highly concentrated Cabernet berries.",
        "grapes": [
          {
            "name": "Cabernet Sauvignon",
            "description": "The undisputed flagship. Characterized by minty, eucalyptus, and intense blackcurrant flavors, paired with smooth, powdery tannins that offer immense aging potential.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Carménère",
            "description": "Originally a Bordeaux blending grape thought entirely extinct due to phylloxera, it was rediscovered hiding among Merlot vines in Chile in 1994. Thrives in warmer pockets, yielding deep red fruit, roasted red pepper, and chocolate notes.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Concha y Toro",
            "description": "Their 'Don Melchor' defined high-end Chilean Cabernet worldwide.",
            "wines": [
              {
                "name": "Don Melchor Cabernet Sauvignon",
                "url": "https://www.vivino.com/search/wines?q=Don+Melchor"
              }
            ]
          },
          {
            "name": "Almaviva",
            "description": "Another joint venture of Baron Philippe de Rothschild, this time in Chile.",
            "wines": [
              {
                "name": "Almaviva",
                "url": "https://www.vivino.com/search/wines?q=Almaviva+Chile"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Alto Maipo",
            "description": "The highest altitude, coolest, and most prestigious sub-region, producing the country's most iconic and expensive Cabernet Sauvignons.",
            "geography": "Eastern edge situated in the direct foothills of the Andes. Heavily subjected to the freezing nighttime mountain downdrafts.",
            "grapes": "Cabernet Sauvignon."
          },
          {
            "name": "Maipo Medio (Central Maipo)",
            "description": "The warmer, flatter, traditional heartland producing softer, fleshier interpretations of Cabernet and excellent Carménère.",
            "geography": "The central, lower-altitude plains. Warmer and less influenced by the Andes night air.",
            "grapes": "Cabernet Sauvignon, Carménère."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          139,
          -34.4
        ]
      },
      "properties": {
        "id": "barossa",
        "name": "Barossa Valley",
        "country": "Australia",
        "history": "German Lutheran immigrants fleeing persecution settled the Barossa Valley in the 1840s, bringing with them a strong work ethic and their beloved Shiraz cuttings. The region narrowly escaped the global phylloxera epidemic, making it an incredibly rare sanctuary containing some of the oldest continually producing, pre-phylloxera, ungrafted grapevines in the world (some dating confidently back to 1843).",
        "geography": "Located in South Australia, fundamentally defined by a scorching-hot, dry Mediterranean climate. Summer temperatures frequently exceed 40°C (104°F). Bushfires and severe drought are constant, critical existential threats. Given the intense heat, viticulture hinges heavily on canopy management to shade the berries from sunburn and the availability of strictly monitored drip irrigation from the Murray River.",
        "terroir": "The valley floor consists of deep, iron-rich, red-brown clay soils (Terra Rossa) which retain a modicum of moisture during dry spells, mixed with sandy loams. This deep soil, combined with immense heat, allows old-vine Shiraz to root deeply and naturally limit vigor, producing infinitesimal yields of microscopic, flavor-packed berries that form the core of legendary wines like Penfolds Grange.",
        "grapes": [
          {
            "name": "Shiraz (Syrah)",
            "description": "The undisputed hero. Unapologetically massive, full-bodied, high-alcohol wines dominated by cooked blackberry, eucalyptus/mint, heavy sweet American oak (vanilla, chocolate), and mouth-coating tannins.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Grenache & Mourvèdre",
            "description": "Often blended with Shiraz (the classic GSM blend). Grenache provides jammy raspberry fruit and high alcohol, while Mourvèdre adds gamey, earthy, structural tannin backbone.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Riesling",
            "description": "While the valley floor is too hot, the neighboring high-altitude Eden Valley produces profound, bone-dry Rieslings with lime juice acidity and rapid aging into toasty/kerosene complexity.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Penfolds",
            "description": "Creators of 'Grange', the most famous Australian wine.",
            "wines": [
              {
                "name": "Grange",
                "url": "https://www.vivino.com/search/wines?q=Penfolds+Grange"
              }
            ]
          },
          {
            "name": "Henschke",
            "description": "Tends to the legendary 'Hill of Grace' single vineyard.",
            "wines": [
              {
                "name": "Hill of Grace",
                "url": "https://www.vivino.com/search/wines?q=Henschke+Hill+of+Grace"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Barossa Valley Floor",
            "description": "The scorching heart of the region responsible for massive, opulent, full-throttle old-vine Shiraz.",
            "geography": "Hot, low-altitude flat plains composed of rich, iron-heavy red clays.",
            "grapes": "Shiraz, Grenache, Mourvèdre."
          },
          {
            "name": "Eden Valley (Often bundled with Barossa)",
            "description": "A radically different neighboring high-altitude region famed globally for its world-class, searingly dry Rieslings.",
            "geography": "High elevations (400m-500m) with exceptionally cool nights and rocky, acidic soils.",
            "grapes": "Riesling, elegant Shiraz."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15,
          37.7
        ]
      },
      "properties": {
        "id": "sicily",
        "name": "Sicily (Mt. Etna)",
        "country": "Italy",
        "history": "Historically known for producing immense volumes of bulk wine and fortified Marsala for the British Navy, Sicily has undergone a remarkable renaissance over the past two decades. A new generation of viticulturists 'discovered' the potential of the high-altitude, volcanic soils of Mount Etna, abandoning high-yielding plain vineyards in favor of restoring ancient, bush-trained indigenous vines.",
        "geography": "A Mediterranean island with a brutally hot, arid climate at sea level. However, Mount Etna in the east drastically alters the viticultural landscape. Vineyards are planted at incredible elevations—up to 1,000 meters above sea level. This high altitude ensures a severe diurnal temperature shift, preserving acidity and generating immense elegance.",
        "terroir": "The defining terroir is the active stratovolcano, Mount Etna. The 'Contrade' (single vineyards / ancient lava flows) are composed of dark, porous, mineral-rich pumice, ash, and basalt. These incredibly well-draining, infertile soils force deep root penetration and naturally restrict yields.",
        "grapes": [
          {
            "name": "Nerello Mascalese",
            "description": "Often compared to Pinot Noir and Nebbiolo. Produces pale, highly tannic, high-acid wines with haunting aromas of red cherry, dried herbs, and an undeniable smoky/volcanic minerality.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Carricante",
            "description": "The primary white grape of Etna. Retains searingly high acidity even in the Sicilian sun, producing highly age-worthy, linear, citrus-driven whites with saline notes.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Tenuta delle Terre Nere",
            "description": "Pioneers of single-vineyard (Contrada) bottling on Etna.",
            "wines": [
              {
                "name": "Etna Rosso",
                "url": "https://www.vivino.com/search/wines?q=Terre+Nere+Etna+Rosso"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Northern Slopes (Etna DOC)",
            "description": "The premier cru zone of Etna, characterized by a string of ancient lava flows (Contrade).",
            "geography": "North-facing vineyards with extreme high altitude. Perfect for elegant, slow-ripening Nerello Mascalese.",
            "grapes": "Nerello Mascalese, Nerello Cappuccio."
          },
          {
            "name": "Eastern Slopes (Etna DOC)",
            "description": "Facing the Ionian Sea, experiencing significantly higher rainfall and humidity.",
            "geography": "Cooler eastern exposure overlooking the sea, deeply specialized in world-class, searingly acidic Carricante whites.",
            "grapes": "Carricante."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4,
          41.6
        ]
      },
      "properties": {
        "id": "ribera",
        "name": "Ribera del Duero",
        "country": "Spain",
        "history": "While Vega Sicilia was producing legendary wines here in the mid-19th century, Ribera del Duero was largely a rural, cooperative-dominated region until its official DO status was granted in 1982. A massive influx of modern winemaking technology and investment transformed it into Rioja's younger, bolder, and significantly more powerful rival, prioritizing dark, muscular Tinto Fino (Tempranillo).",
        "geography": "Located on the vast, elevated northern plateau of Spain (the Meseta Central) following the Duero River. It endures an extreme continental climate: brutally hot, arid summers completely devoid of rain, offset by bitter, freezing winters. The exceptionally high elevation (up to 850m) ensures massive diurnal temperature swings, slowing the ripening process in the autumn and retaining crucial acidity in the thick-skinned grapes.",
        "terroir": "The terrain is rugged and punishing. The best vineyards are situated on the sun-baked, terraced slopes above the riverbed. The soils are a complex mixture of chalky limestone atop layers of clay and silt. The limestone reflects heat and restricts vine vigor, while the deeper clay provides just enough moisture retention to allow the vines to survive the rainless summer desert conditions.",
        "grapes": [
          {
            "name": "Tinto Fino (Tempranillo variant)",
            "description": "A strictly local clone of Tempranillo uniquely adapted to the harsh climate. It has significantly thicker skins than its Rioja counterpart, resulting in nearly opaque color, massive tannins, and concentrated flavors of black plum, blackberry, and dark chocolate.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cabernet Sauvignon / Merlot",
            "description": "Historically permitted and championed by Vega Sicilia, providing backbone, acidity, and longevity to the predominantly Tempranillo blends.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Vega Sicilia",
            "description": "The undisputed king of Spanish wine. Their 'Unico' ages for a decade before release.",
            "wines": [
              {
                "name": "Unico",
                "url": "https://www.vivino.com/search/wines?q=Vega+Sicilia+Unico"
              }
            ]
          },
          {
            "name": "Dominio de Pingus",
            "description": "The original Spanish 'Cult Wine', created by Peter Sisseck. Minuscule production and vast prices.",
            "wines": [
              {
                "name": "Pingus",
                "url": "https://www.vivino.com/search/wines?q=Pingus"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "The 'Golden Mile'",
            "description": "Not officially a sub-region, but this illustrious stretch of road connecting Peñafiel and Valladolid is home to the region's most iconic estates.",
            "geography": "High chalky plateaus overlooking the Duero river with optimal sun exposure.",
            "grapes": "Tinto Fino."
          },
          {
            "name": "Roa & Burgos",
            "description": "Situated at the absolute highest, coldest elevations in the eastern part of the DO, producing some of the most powerfully structured old-vine wines.",
            "geography": "Highest altitude terraces where frost is an extreme hazard.",
            "grapes": "Tinto Fino."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4,
          48.3
        ]
      },
      "properties": {
        "id": "alsace",
        "name": "Alsace",
        "country": "France",
        "history": "Alsace has a tumultuous history, having passed between France and Germany multiple times. This dual heritage profoundly influences its wine culture: it uses Germanic grape varieties but ferments them in the traditional French dry style. It is uniquely organized not by village appellations like Burgundy, but by 51 distinct Alsace Grand Cru Vineyards, emphasizing single-varietal purity rather than blends.",
        "geography": "Located in northeast France on the German border. It has a cool to moderate continental climate, but crucially, it is one of the driest regions in France. This is entirely due to the 'rain shadow' effect of the Vosges Mountains to the west, which block rain-bearing Atlantic winds. This results in long, dry, sunny autumns, perfect for achieving extremely high ripeness and extended hang-time without rot.",
        "terroir": "Alsace boasts the most complex geology in France due to the collapse of the Rhine graben. Soils include granite, limestone, schist, volcanic, and clay-marl. The Grand Cru vineyards are located exclusively on the steepest, most optimally exposed (south/southeast) slopes of the Vosges foothills to maximize sunlight interception.",
        "grapes": [
          {
            "name": "Riesling",
            "description": "The most planted 'noble' grape in Alsace. Ranges from dry to sweet, featuring high acidity, medium/full body, and intense aromas of citrus, stone fruit, and an iconic petrol/kerosene note with age.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Gewurztraminer",
            "description": "An incredibly pungent, thick-skinned grape. Low acidity, high alcohol, full-bodied, with explosive aromas of lychee, rose petal, baking spices, and Turkish delight.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Pinot Gris",
            "description": "Unlike the light, neutral Italian style, Alsatian Pinot Gris is rich, full-bodied, high in alcohol, with flavors of fresh and dried fruits, honey, and ginger.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Trimbach",
            "description": "Produces 'Clos Ste Hune', arguably the greatest dry Riesling on the planet.",
            "wines": [
              {
                "name": "Clos Ste Hune Riesling",
                "url": "https://www.vivino.com/search/wines?q=Trimbach+Clos+Ste+Hune"
              }
            ]
          },
          {
            "name": "Zind-Humbrecht",
            "description": "Masters of biodynamics producing incredibly intense, rich, off-dry styles.",
            "wines": [
              {
                "name": "Gewurztraminer Hengst Grand Cru",
                "url": "https://www.vivino.com/search/wines?q=Zind+Humbrecht+Hengst"
              }
            ]
          }
        ],
        "subRegions": [
          {
            "name": "Haut-Rhin",
            "description": "The southern half of the region, housing the steepest slopes and the vast majority of the 51 Grand Cru vineyards.",
            "geography": "Protected maximally by the highest peaks of the Vosges mountains. Warmer and drier.",
            "grapes": "Riesling, Gewurztraminer, Pinot Gris."
          },
          {
            "name": "Bas-Rhin",
            "description": "The northern half of the region, generally producing lighter, earlier-drinking styles.",
            "geography": "Lower elevation Vosges peaks provide less rain shadow effect. Cooler soils.",
            "grapes": "Sylvaner, Pinot Blanc."
          }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.6,
          47.4
        ]
      },
      "properties": {
        "history": "Known as the Garden of France, the Loire Valley has been a center of French nobility and viticulture for centuries. WSET Level 3 highlights the diversity of its sub-regions, from the Atlantic-influenced Muscadet to the inland Sancerre. The region is historically significant for its role in the trade along the Loire River, the longest river in France.",
        "geography": "Spans over 1,000km from the Atlantic to central France. Climate ranges from maritime in Nantes (Muscadet) to continental in the Central Vineyards (Sancerre). The river and its tributaries provide microclimates that mitigate frost and humidity, essential for rot-prone varieties.",
        "terroir": "Tremendously varied: volcanic and metamorphic soils in Nantes, Tuffeau limestone in Anjou-Saumur (ideal for Chenin Blanc and Cabernet Franc), and Kimmeridgian marl or flint (silex) in the Central Vineyards (ideal for Sauvignon Blanc).",
        "grapes": [
          {
            "name": "Sauvignon Blanc",
            "description": "Crisp, high acidity, green fruit and herbaceous notes (grass, elderflower). Sancerre and Pouilly-Fumé are global benchmarks.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chenin Blanc",
            "description": "The 'chameleon' grape; produces dry, sweet, and sparkling wines with high acidity and flavors of apple, honey, and wet wool.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cabernet Franc",
            "description": "Thrives in Chinon and Bourgueil, producing aromatic reds with raspberry, violet, and graphite notes.",
            "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Didier Dagueneau",
            "description": "The legendary producer of Sancerre and Pouilly-Fumé, known for the flinty 'Silex'.",
            "wines": [
              {
                "name": "Silex Blanc",
                "url": "https://www.vivino.com/search/wines?q=Didier+Dagueneau+Silex"
              }
            ]
          }
        ],
        "id": "loire-valley",
        "name": "Loire Valley",
        "country": "France"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.7,
          46.1
        ]
      },
      "properties": {
        "history": "Historically part of the Burgundy region but distinct in style and administration. Famous for Gamay and particularly the 'carbonic maceration' technique. The 10 Crus of Beaujolais represent the pinnacle of quality, often rivaling Village-level Burgundy.",
        "geography": "Located south of Mâcon. Rolling hills with the Saône river valley. The north is hilly and suited for the Crus, while the south is flatter with richer soils for generic Beaujolais.",
        "terroir": "The North features granite and schist soils (ideal for Gamay to express structure and mineral character). The South has mostly limestone and clay, producing lighter, softer wines.",
        "grapes": [
          {
            "name": "Gamay",
            "description": "The sole red grape, producing light-bodied wines with high acidity, low tannins, and vibrant red fruit (strawberry, cherry) and bubblegum notes from carbonic maceration.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Marcel Lapierre",
            "description": "Pioneer of natural winestyles in Morgon.",
            "wines": [
              {
                "name": "Morgon",
                "url": "https://www.vivino.com/search/wines?q=Marcel+Lapierre+Morgon"
              }
            ]
          }
        ],
        "id": "beaujolais",
        "name": "Beaujolais",
        "country": "France"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.8,
          41.2
        ]
      },
      "properties": {
        "history": "A rugged region in Catalonia that saw a massive resurgence in the 1980s led by the 'Clos' pioneers. One of only two Spanish regions (with Rioja) to hold the top DOCa/DOQ status.",
        "geography": "Inland from Tarragona. Highly mountainous with many small, steep terraces, necessitating costly hand-harvesting.",
        "terroir": "The famous 'Llicorella' soil: reddish-black slate with mica. It is heat-reflecting and moisture-retaining, forcing vines to dig deep for water, resulting in low-yield, concentrated grapes.",
        "grapes": [
          {
            "name": "Garnacha & Cariñena",
            "description": "Old-vines produce powerful, high-alcohol reds with intense dark fruit, licorice, and distinct mineral/slate characteristics.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Álvaro Palacios",
            "description": "Renowned for L'Ermita, one of Spain's most iconic wines.",
            "wines": [
              {
                "name": "L'Ermita",
                "url": "https://www.vivino.com/search/wines?q=Alvaro+Palacios+L+Ermita"
              }
            ]
          }
        ],
        "id": "priorat",
        "name": "Priorat",
        "country": "Spain"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.4,
          48.1
        ]
      },
      "properties": {
        "history": "Produces the legendary 'Vinum Regum, Rex Vinorum' (Wine of Kings, King of Wines). Tokaj was the world's first vineyard classification system (1730). Famous for Aszú, one of the world's great sweet wines.",
        "geography": "Northeast Hungary near the border of Slovakia and Ukraine. Rivers Tisza and Bodrog create high humidity and autumnal mists, perfect for Botrytis.",
        "terroir": "Volcanic soils dominate the hillsides, providing excellent drainage and heat retention. Loess-based soils on lower slopes.",
        "grapes": [
          {
            "name": "Furmint",
            "description": "High acidity and thick skin. Susceptible to botrytis. Produces dry whites and the backbone of Aszú with apple and apricot notes.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Royal Tokaji",
            "description": "Renowned for its commitment to the historic single vineyards of Tokaj.",
            "wines": [
              {
                "name": "Aszú 5 Puttonyos",
                "url": "https://www.vivino.com/search/wines?q=Royal+Tokaji+Aszu"
              }
            ]
          }
        ],
        "id": "tokaj",
        "name": "Tokaj",
        "country": "Hungary"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -6.1,
          36.7
        ]
      },
      "properties": {
        "history": "The home of Sherry, a unique fortified wine. Centered on the 'Sherry Triangle' (Jerez de la Frontera, Sanlúcar de Barrameda, El Puerto de Santa María). WSET highlights the Solera aging system.",
        "geography": "Southwestern Andalusia. Hot and dry Mediterranean climate, moderated by the 'Poniente' (cool, damp Atlantic wind) and 'Levante' (hot, dry interior wind).",
        "terroir": "The unique 'Albariza' soil: white, chalky clay with high calcium carbonate content. It reflects sunlight and acts as a reservoir for water during the dry summers by forming a crust.",
        "grapes": [
          {
            "name": "Palomino",
            "description": "The workhorse grape of Sherry, neutral in aroma, allowing the biological (flor) or oxidative aging to define the wine.",
            "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "González Byass",
            "description": "Famous for the Tio Pepe Fino.",
            "wines": [
              {
                "name": "Tio Pepe Fino",
                "url": "https://www.vivino.com/search/wines?q=Tio+Pepe+Sherry"
              }
            ]
          }
        ],
        "id": "jerez",
        "name": "Jerez (Sherry)",
        "country": "Spain"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          169.2,
          -45
        ]
      },
      "properties": {
        "history": "New Zealand's only inland wine region and its most southerly. Established significantly in the 1990s, it quickly became a world leader for premium Pinot Noir, driven by pioneers like Felton Road and Rippon.",
        "geography": "Surrounded by mountains in the South Island. Extremely continental climate with high diurnal temperature variation. Frost is a severe and persistent risk throughout the year.",
        "terroir": "Soils are mostly schist and heavy silt loams. Low rainfall requires irrigation. Intense UV light due to clean air and ozone holes leads to thick skins and high phenolic maturity.",
        "grapes": [
          {
            "name": "Pinot Noir",
            "description": "Produces intense, high-alcohol, full-bodied reds with flavors of black cherry, plum, and firm tannins.",
            "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Felton Road",
            "description": "Iconic producer known for biodynamic viticulture and block-specific Pinot Noirs.",
            "wines": [
              {
                "name": "Block 3 Pinot Noir",
                "url": "https://www.vivino.com/search/wines?q=Felton+Road+Pinot+Noir"
              }
            ]
          }
        ],
        "id": "central-otago",
        "name": "Central Otago",
        "country": "New Zealand"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.4,
          -33.3
        ]
      },
      "properties": {
        "history": "A relatively new region in Chile, pioneered in the 1980s by Pablo Morandé. It revolutionized Chilean viticulture by proving cool-climate varieties could thrive in what was previously considered pasture land.",
        "geography": "Located between the Coastal Range and the Pacific Ocean. Cool maritime climate influenced by the Humboldt Current, providing morning fogs and afternoons sea breezes.",
        "terroir": "Gently undulating landscape. Soils are predominantly sandy clay. Frost is a significant hazard during spring in the valley floor.",
        "grapes": [
          {
            "name": "Sauvignon Blanc & Chardonnay",
            "description": "Produces crisp whites with citrus and tropical notes. Chardonnay often shows high acidity and subtle oak integration.",
            "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Casa Lapostolle",
            "description": "Renowned for their high-end cool climate selections.",
            "wines": [
              {
                "name": "Cuvee Alexandre Chardonnay",
                "url": "https://www.vivino.com/search/wines?q=Lapostolle+Casablanca+Chardonnay"
              }
            ]
          }
        ],
        "id": "casablanca-valley",
        "name": "Casablanca Valley",
        "country": "Chile"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.5,
          46.5
        ]
      },
      "properties": {
        "history": "Washington State's engine of production. Most vineyards are located east of the Cascade Mountains, which act as a rain shadow, creating a desert-like environment.",
        "geography": "Vast region bordering Oregon. Arid continental climate. Long daylight hours due to high latitude (46-47°N) allow for rapid sugar accumulation while cool nights preserve acidity.",
        "terroir": "Soils are mostly sandy and free-draining (vulnerable to phylloxera, but sand often deters it). Winter freeze (below -20°C) is a major risk, sometimes killing vines to the roots.",
        "grapes": [
          {
            "name": "Merlot & Cabernet Sauvignon",
            "description": "Merlot is highly successful here, showing plummy fruit and structured tannins. Syrah is also gaining prominence.",
            "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "estates": [
          {
            "name": "Chateau Ste. Michelle",
            "description": "The founding winery of Washington State.",
            "wines": [
              {
                "name": "Eroica Riesling",
                "url": "https://www.vivino.com/search/wines?q=Chateau+Ste+Michelle+Eroica"
              }
            ]
          }
        ],
        "id": "columbia-valley",
        "name": "Columbia Valley",
        "country": "USA (Washington)"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [3.8, 43.3] },
      "properties": {
        "id": "languedoc-roussillon",
        "name": "Languedoc-Roussillon",
        "country": "France",
        "history": "Once the 'wine lake' of France, producing vast oceans of cheap, undistinguished table wine. From the 1990s onward, major EU-funded vine-pull schemes removed low-quality vines, and pioneering producers embraced terroir-driven winemaking. Today it is France's largest and most dynamic wine region, offering extraordinary value.",
        "geography": "Stretches along the Mediterranean coast from the Spanish border to the Rhône delta. Hot, dry Mediterranean climate with over 300 days of sunshine. The Tramontane and Mistral winds help prevent fungal disease. Inland areas toward the Massif Central are cooler and higher in altitude.",
        "terroir": "Incredibly diverse soils: schist in the Cru zones (Faugères, Saint-Chinian), garrigue-covered limestone plateaus, alluvial river plains, and coastal sandy soils. The best wines come from the hillside schist and limestone terroirs that restrict yields.",
        "grapes": [
          { "name": "Grenache, Syrah, Mourvèdre, Carignan", "description": "The GSM blend dominates, with old-vine Carignan adding structure and depth in the Cru appellations. Wines range from fresh rosé to powerful, structured reds.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Viognier, Roussanne, Marsanne", "description": "White varieties from the Rhône perform well here, producing aromatic, full-bodied whites with stone fruit and floral notes.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Mas de Daumas Gassac", "description": "The 'Grand Cru of the Languedoc', pioneering premium wines since the 1970s.", "wines": [{ "name": "Rouge", "url": "https://www.vivino.com/search/wines?q=Daumas+Gassac" }] }
        ],
        "subRegions": [
          { "name": "Corbières & Minervois", "description": "Rugged, hilly appellations producing structured, garrigue-scented reds from old vines.", "geography": "Limestone and schist hills with Mediterranean scrubland.", "grapes": "Carignan, Grenache, Syrah." },
          { "name": "Pic Saint-Loup", "description": "A rising star appellation north of Montpellier, producing elegant, higher-altitude reds.", "geography": "Cooler elevations with limestone soils at the foot of the Cévennes.", "grapes": "Syrah, Grenache, Mourvèdre." },
          { "name": "Roussillon (Banyuls, Maury)", "description": "Home to France's finest Vins Doux Naturels (fortified sweet wines) from Grenache Noir and Muscat.", "geography": "Steep terraced hillsides on schist, close to the Spanish border.", "grapes": "Grenache Noir, Muscat." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [6.2, 43.5] },
      "properties": {
        "id": "provence",
        "name": "Provence",
        "country": "France",
        "history": "One of the oldest wine regions in France, dating to Greek colonization around 600 BC. Provence has become the global epicenter of premium dry rosé, a style that now accounts for nearly 90% of its production. The pale, salmon-pink 'Provençal rosé' has driven an enormous international trend.",
        "geography": "Mediterranean climate with hot, dry summers and over 2,800 hours of sunshine annually. The Mistral wind is a constant presence, keeping vineyards dry and healthy. Mountain ranges to the north provide shelter from cold continental air.",
        "terroir": "Extremely diverse geology including limestone, schist, granite, volcanic, and sandstone soils. The best rosé vineyards occupy well-drained limestone and clay hillsides. Bandol, on the coast, benefits from unique terraced limestone slopes.",
        "grapes": [
          { "name": "Grenache, Cinsault, Mourvèdre", "description": "The rosé blend trio. Grenache provides body and red fruit, Cinsault adds delicate floral notes and pale color, and Mourvèdre contributes structure.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Mourvèdre (Bandol)", "description": "In Bandol, Mourvèdre must comprise at least 50% of the red blend, producing deeply structured, gamey, age-worthy reds with leather, blackberry, and herbal complexity.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Domaine Tempier", "description": "The legendary Bandol estate that proved Mourvèdre's greatness.", "wines": [{ "name": "Bandol Rouge", "url": "https://www.vivino.com/search/wines?q=Domaine+Tempier+Bandol" }] }
        ],
        "subRegions": [
          { "name": "Bandol", "description": "The most prestigious appellation, producing France's finest Mourvèdre-based reds requiring 18 months minimum aging.", "geography": "South-facing limestone terraces receiving maximal sun exposure.", "grapes": "Mourvèdre (≥50%), Grenache, Cinsault." },
          { "name": "Côtes de Provence", "description": "The largest appellation and source of the world's most famous pale rosés.", "geography": "Rolling hills from the coast to inland limestone plateaus.", "grapes": "Grenache, Cinsault, Syrah." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-122.8, 38.5] },
      "properties": {
        "id": "sonoma",
        "name": "Sonoma County",
        "country": "USA",
        "history": "Sonoma is California's most diverse wine region, home to the oldest commercial winery, Buena Vista (1857). While Napa focused on luxury Cabernet, Sonoma developed a broader, more diverse identity encompassing cool-climate Pinot Noir, old-vine Zinfandel, and coastal Chardonnay. It has become the epicenter of American sustainable and organic viticulture.",
        "geography": "Far more topographically diverse than Napa, stretching from the cold, foggy Pacific coastline to warm, sheltered inland valleys. The Petaluma Gap channels ocean air and fog deep into the county, creating dramatically different microclimates within short distances.",
        "terroir": "Soils range from volcanic (Sonoma Mountain) to marine sedimentary (Sonoma Coast) to Gold Ridge sandy loam (Russian River Valley). This geological diversity allows an exceptionally wide range of grape varieties to thrive.",
        "grapes": [
          { "name": "Pinot Noir", "description": "The star of the cool Russian River Valley and Sonoma Coast. Produces silky, perfumed wines with red cherry, cola, and baking spice notes, bridging Burgundy and New World styles.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay", "description": "Ranges from lean, mineral coastal styles to rich, buttery Russian River interpretations. Among California's finest.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Zinfandel", "description": "Old-vine Zinfandel from Dry Creek Valley produces jammy, spicy, high-alcohol reds with raspberry, black pepper, and licorice notes.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Williams Selyem", "description": "Iconic producer that defined luxury Russian River Pinot Noir.", "wines": [{ "name": "Pinot Noir", "url": "https://www.vivino.com/search/wines?q=Williams+Selyem+Pinot+Noir" }] }
        ],
        "subRegions": [
          { "name": "Russian River Valley", "description": "The premier cool-climate AVA for Pinot Noir and Chardonnay, defined by morning fog from the Pacific.", "geography": "Low-lying valley floor with fog channeling from the coast. Gold Ridge sandy loam soils.", "grapes": "Pinot Noir, Chardonnay." },
          { "name": "Dry Creek Valley", "description": "A warm, narrow valley famous for heritage old-vine Zinfandel dating back to the 1880s.", "geography": "Benchland terraces with well-draining gravelly loam.", "grapes": "Zinfandel, Cabernet Sauvignon." },
          { "name": "Sonoma Coast", "description": "A vast, cool AVA stretching along the Pacific, producing some of California's most elegant, Burgundian-style wines.", "geography": "Steep, windswept ridges with thin, rocky soils and persistent fog and wind.", "grapes": "Pinot Noir, Chardonnay." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [115, -33.9] },
      "properties": {
        "id": "margaret-river",
        "name": "Margaret River",
        "country": "Australia",
        "history": "A young region established only in 1967 after Dr. John Gladstones identified its Bordeaux-like climate. Despite producing less than 3% of Australia's total wine, it accounts for over 20% of its premium wine market. It rapidly defined itself as Australia's finest source of Bordeaux-style blends and structured Chardonnay.",
        "geography": "A narrow peninsula in Western Australia bounded by the Indian Ocean on two sides. The strong maritime influence creates an incredibly stable, moderate Mediterranean climate with minimal vintage variation. Warm, dry summers are tempered by constant sea breezes (the 'Fremantle Doctor').",
        "terroir": "Predominately ancient, nutrient-poor, well-draining gravelly loam over granite and gneiss bedrock. The infertile soils naturally restrict vine vigor, concentrating flavors. The dual-ocean influence moderates temperatures year-round.",
        "grapes": [
          { "name": "Cabernet Sauvignon & Bordeaux Blends", "description": "Margaret River's Cabernets are Australia's most elegant: firm tannins, blackcurrant, bay leaf, and cedar, with a distinctive eucalyptus note. Often blended with Merlot.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay", "description": "Produces world-class, full-bodied Chardonnay rivaling white Burgundy, with citrus, stone fruit, cashew, and integrated oak.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Semillon-Sauvignon Blanc (SSB)", "description": "A classic regional blend inspired by white Bordeaux. Semillon provides weight and texture, while Sauvignon Blanc adds herbaceous lift.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Leeuwin Estate", "description": "Their 'Art Series' Chardonnay is consistently ranked among the world's greatest.", "wines": [{ "name": "Art Series Chardonnay", "url": "https://www.vivino.com/search/wines?q=Leeuwin+Art+Series+Chardonnay" }] },
          { "name": "Cullen Wines", "description": "Pioneer of biodynamic viticulture in Australia. Their 'Diana Madeline' is iconic.", "wines": [{ "name": "Diana Madeline", "url": "https://www.vivino.com/search/wines?q=Cullen+Diana+Madeline" }] }
        ],
        "subRegions": [
          { "name": "Wilyabrup", "description": "The heartland of premium Cabernet Sauvignon, home to the region's most concentrated and structured reds.", "geography": "Gravelly loam over laterite (ironstone). Sheltered from the strongest sea winds.", "grapes": "Cabernet Sauvignon, Merlot." },
          { "name": "Wallcliffe", "description": "The southernmost sub-region with the strongest maritime influence, ideal for elegant whites.", "geography": "Closest to the Southern Ocean. Cooler, with granite-derived soils.", "grapes": "Chardonnay, Sauvignon Blanc." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [151.3, -32.8] },
      "properties": {
        "id": "hunter-valley",
        "name": "Hunter Valley",
        "country": "Australia",
        "history": "One of Australia's oldest wine regions, established in the 1820s. Despite a challenging climate (hot, humid, and prone to vintage rain), it produces two of Australia's most unique wine styles: age-worthy Semillon (picked early at low sugar levels) and soft, earthy Shiraz. Hunter Semillon is arguably Australia's most distinctive contribution to world wine.",
        "geography": "Located 150km north of Sydney in New South Wales. Hot, humid, subtropical climate with the majority of rainfall occurring during the crucial harvest period (January-March). Cloud cover during the growing season actually moderates temperatures, preventing excessive heat stress.",
        "terroir": "Valley floor soils are heavy, red volcanic basalt and alluvial loam. The unique combination of cloud cover reducing UV intensity and volcanic soil creates wines of surprising elegance despite the warm latitude.",
        "grapes": [
          { "name": "Semillon", "description": "Harvested extremely early (10-11% alc), unoaked, and tightly wound in youth. After 10-20 years, transforms into one of the world's great aged white wines with toast, honey, and lanolin complexity.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Shiraz", "description": "A softer, more medium-bodied style than Barossa, characterized by earthy, leathery, sweaty-saddle aromas with plum and regional 'regional' character.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Tyrrell's", "description": "Historic family estate, famous for Vat 1 Semillon.", "wines": [{ "name": "Vat 1 Semillon", "url": "https://www.vivino.com/search/wines?q=Tyrrell+Vat+1+Semillon" }] }
        ],
        "subRegions": [
          { "name": "Lower Hunter", "description": "The historic core of the region, centered around Pokolbin, producing the classic aged Semillon and earthy Shiraz.", "geography": "Valley floor with red volcanic basalt soils. Cloud cover provides natural UV protection.", "grapes": "Semillon, Shiraz." },
          { "name": "Upper Hunter", "description": "Higher altitude, drier, and warmer. More focused on commercial varieties.", "geography": "Sandy, lighter soils with less humidity.", "grapes": "Chardonnay, Semillon." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [140.8, -37.3] },
      "properties": {
        "id": "coonawarra",
        "name": "Coonawarra",
        "country": "Australia",
        "history": "Coonawarra achieved fame for its unique 'terra rossa' soil—a narrow strip of red soil over limestone just 12km long and 2km wide. It is Australia's most terroir-specific region, producing Cabernet Sauvignon with a distinctive 'cool-climate' elegance that rivals Bordeaux at its best.",
        "geography": "Located in South Australia's Limestone Coast zone. A surprisingly cool maritime-influenced climate for Australia, moderated by proximity to the Southern Ocean. Temperatures are significantly lower than Barossa, allowing slow, even ripening of Cabernet Sauvignon.",
        "terroir": "The famous terra rossa (red earth) soil is a thin layer (30-60cm) of iron-rich, well-draining red clay sitting atop a deep limestone base. The limestone acts as a natural water reservoir, feeding the vines from below during dry periods while the red clay provides excellent drainage from above.",
        "grapes": [
          { "name": "Cabernet Sauvignon", "description": "The undisputed star. Produces structured, medium to full-bodied wines with blackcurrant, mint/eucalyptus, and mulberry, supported by firm tannins and natural acidity. Among Australia's most age-worthy.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Shiraz", "description": "A cooler, more peppery and elegant style compared to Barossa, with dark fruit, spice, and earth.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Wynns Coonawarra Estate", "description": "The defining producer. Their Black Label Cabernet is an Australian icon.", "wines": [{ "name": "Black Label Cabernet", "url": "https://www.vivino.com/search/wines?q=Wynns+Black+Label+Cabernet" }] }
        ],
        "subRegions": [
          { "name": "Terra Rossa Strip", "description": "The narrow, renowned strip of red soil that produces the region's finest Cabernet Sauvignon.", "geography": "Just 12km long by 2km wide. Red clay over limestone.", "grapes": "Cabernet Sauvignon." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [138.6, -35.2] },
      "properties": {
        "id": "mclaren-vale",
        "name": "McLaren Vale",
        "country": "Australia",
        "history": "One of Australia's oldest regions, planted in 1838. Located just south of Adelaide, it has evolved from a bulk-wine producer into a premium region renowned for old-vine Shiraz and GSM blends. It was the first Australian wine region to develop a comprehensive sustainability program.",
        "geography": "Mediterranean climate moderated by Gulf St Vincent to the west and the Mount Lofty Ranges to the east. Afternoon sea breezes ('the Doctor') cool vineyards daily. The region experiences significant mesoclimate variation across its compact area.",
        "terroir": "Extraordinarily diverse: over 40 distinct soil types within a small area, including sand over clay, hard ironstone, rich alluvium, and limestone. This diversity allows an unusually wide range of varieties and styles.",
        "grapes": [
          { "name": "Shiraz", "description": "Rich, full-bodied, with dark chocolate, black fruit, and earthy notes. Often from ancient bush vines over 80 years old. Softer and more approachable than Barossa.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Grenache", "description": "Old-vine Grenache is experiencing a renaissance, producing ethereal, perfumed reds with raspberry, spice, and silky texture.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "d'Arenberg", "description": "Iconic for eccentric labels and outstanding old-vine wines.", "wines": [{ "name": "Dead Arm Shiraz", "url": "https://www.vivino.com/search/wines?q=d+Arenberg+Dead+Arm" }] }
        ],
        "subRegions": [
          { "name": "Blewitt Springs", "description": "Famous for deep sand over clay soils and ancient bush vine Grenache.", "geography": "Higher elevation with strong maritime influence. Sandy soils.", "grapes": "Grenache, Shiraz." },
          { "name": "Seaview", "description": "Among McLaren Vale's coolest sites, producing more elegant, structured wines.", "geography": "South-facing slopes closest to the coast.", "grapes": "Shiraz, Cabernet Sauvignon." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [138.7, -34.9] },
      "properties": {
        "id": "adelaide-hills",
        "name": "Adelaide Hills",
        "country": "Australia",
        "history": "Originally planted in the 1840s but abandoned for warmer regions. Revived in the 1970s-80s as Australia's search for cool-climate elegance intensified. Now recognized as one of Australia's premier cool-climate regions, producing benchmark Sauvignon Blanc and sparkling wine alongside impressive Pinot Noir and Chardonnay.",
        "geography": "Located in the Mount Lofty Ranges east of Adelaide, with vineyards planted at 400-700m elevation. Significantly cooler than neighboring Barossa and McLaren Vale. High rainfall by Australian standards, with cold winters and cool summers.",
        "terroir": "Soils are predominantly sandy loam over clay subsoils, with patches of ancient ironstone and decomposed quartzite. The altitude provides natural acid retention and slow, even ripening.",
        "grapes": [
          { "name": "Sauvignon Blanc", "description": "Produces Australia's finest examples: vibrant, herbaceous, with gooseberry and citrus, rivaling Loire and Marlborough styles.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Pinot Noir & Chardonnay", "description": "Essential for premium sparkling wine (traditional method) and increasingly impressive still wines with Burgundian elegance.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Shaw + Smith", "description": "Benchmark producers of cool-climate Sauvignon Blanc and Chardonnay.", "wines": [{ "name": "M3 Chardonnay", "url": "https://www.vivino.com/search/wines?q=Shaw+Smith+M3+Chardonnay" }] }
        ],
        "subRegions": [
          { "name": "Piccadilly Valley", "description": "The coolest, highest sub-region, ideal for sparkling base wines and elegant Chardonnay.", "geography": "650-700m elevation. Heavy clay soils with high water retention.", "grapes": "Chardonnay, Pinot Noir." },
          { "name": "Lenswood", "description": "Slightly warmer, producing structured Sauvignon Blanc and Pinot Noir.", "geography": "Northeast-facing slopes with decomposed sandstone.", "grapes": "Sauvignon Blanc, Pinot Noir." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [176.8, -39.6] },
      "properties": {
        "id": "hawkes-bay",
        "name": "Hawke's Bay",
        "country": "New Zealand",
        "history": "New Zealand's oldest wine region and second largest after Marlborough. While Marlborough dominates Sauvignon Blanc, Hawke's Bay has carved out a distinct identity as the country's premier red wine region, pioneering Bordeaux-style blends and world-class Syrah.",
        "geography": "Located on the east coast of the North Island. The warmest and sunniest wine region in New Zealand, with a maritime climate moderated by the Pacific. Protected from westerly rain by mountain ranges, creating a rain shadow.",
        "terroir": "The Gimblett Gravels sub-region is the crown jewel: a former riverbed composed of deep, free-draining alluvial gravels that absorb and radiate heat, creating a uniquely warm mesoclimate perfect for late-ripening red varieties.",
        "grapes": [
          { "name": "Cabernet Sauvignon & Merlot", "description": "Bordeaux-style blends are the flagship: medium to full-bodied with blackcurrant, plum, and bell pepper, with fine-grained tannins.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Syrah", "description": "Hawke's Bay Syrah is gaining international acclaim, producing peppery, medium-bodied, elegant wines reminiscent of Northern Rhône.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay", "description": "Full-bodied, rich examples with stone fruit, citrus, and well-integrated oak.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Craggy Range", "description": "Iconic producer with single-vineyard expressions from Gimblett Gravels.", "wines": [{ "name": "Sophia", "url": "https://www.vivino.com/search/wines?q=Craggy+Range+Sophia" }] }
        ],
        "subRegions": [
          { "name": "Gimblett Gravels", "description": "New Zealand's most terroir-specific sub-region, a former riverbed producing the country's finest red wines.", "geography": "Deep, free-draining alluvial gravels that absorb and radiate heat. One of NZ's warmest mesoclimates.", "grapes": "Cabernet Sauvignon, Merlot, Syrah." },
          { "name": "Bridge Pa Triangle", "description": "A sheltered inland triangle producing rich reds and aromatic whites.", "geography": "Silt and gravel soils between old river terraces.", "grapes": "Merlot, Syrah, Chardonnay." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [8, 50] },
      "properties": {
        "id": "rheingau",
        "name": "Rheingau",
        "country": "Germany",
        "history": "The historic heart of German Riesling, home to Schloss Johannisberg where late-harvest wines (Spätlese) were reportedly discovered by accident in 1775. The Rheingau is the birthplace of the VDP classification system and its 'Erste Lage' (First Growth) and 'Grosse Lage' (Grand Cru) vineyard designations, modeled after Burgundy.",
        "geography": "Located where the Rhine turns sharply west, creating a unique south-facing amphitheater of slopes. This orientation maximizes sun exposure at this northerly latitude. The Rhine River acts as a heat reservoir, reflecting warmth onto the vines and moderating frost risk.",
        "terroir": "Soils are diverse: slate and quartzite on the upper slopes (producing racy, mineral Rieslings), phyllite and loess in the middle (richer, fuller wines), and deep loess and clay on the lower slopes. The south-facing aspect is the defining quality factor.",
        "grapes": [
          { "name": "Riesling", "description": "Produces a distinctly fuller, drier, more powerful style than the Mosel. Rheingau Rieslings tend toward ripe stone fruit, quince, and slate minerality with firm acidity and medium body.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Spätburgunder (Pinot Noir)", "description": "The Rheingau's Assmannshausen village is famous for Germany's finest Pinot Noir: delicate, perfumed, and earthy.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Schloss Johannisberg", "description": "The world's first documented Riesling vineyard (1720) and birthplace of Spätlese.", "wines": [{ "name": "Gelblack Spätlese", "url": "https://www.vivino.com/search/wines?q=Schloss+Johannisberg+Riesling" }] }
        ],
        "subRegions": [
          { "name": "Hochheim", "description": "The easternmost commune, situated on the Main river. Produces fuller, richer Rieslings. The English word 'Hock' (for German wine) derives from this town.", "geography": "Warmer mesoclimate on the Main river. Loess and marl soils.", "grapes": "Riesling." },
          { "name": "Rüdesheim & Assmannshausen", "description": "Rüdesheim's Berg vineyards produce powerful Riesling; neighboring Assmannshausen is Germany's most prestigious Pinot Noir site.", "geography": "Steep, south-facing slate slopes overlooking the Rhine gorge.", "grapes": "Riesling, Spätburgunder." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [8.2, 49.8] },
      "properties": {
        "id": "rheinhessen",
        "name": "Rheinhessen",
        "country": "Germany",
        "history": "Germany's largest wine region by area, historically known for producing Liebfraumilch and other mass-market cheap sweet wines. Over the past two decades, a new generation of quality-focused producers has transformed its reputation, particularly around the 'Roter Hang' (Red Slope) in Nierstein, where remarkable dry Rieslings now rival the Rheingau and Mosel.",
        "geography": "A broad, gently rolling region on the west bank of the Rhine. Protected from cold winds by surrounding hills, it is one of Germany's warmest and driest regions. The best vineyards face east and southeast toward the Rhine.",
        "terroir": "Extremely varied soils. The famous 'Roter Hang' near Nierstein features red iron oxide-rich sandstone and slate that produce uniquely mineral, spicy Rieslings. Elsewhere, loess, limestone, and clay dominate.",
        "grapes": [
          { "name": "Riesling", "description": "From the best sites (Roter Hang), produces powerful, mineral-driven dry wines with peach, citrus, and distinctive iron/blood-orange notes.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Silvaner", "description": "The traditional variety, producing round, gentle wines with subtle herbal and apple notes. Still important in older plantings.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Keller", "description": "Now among Germany's most sought-after estates, with Grand Cru Rieslings commanding Burgundian prices.", "wines": [{ "name": "G-Max Riesling", "url": "https://www.vivino.com/search/wines?q=Keller+G+Max+Riesling" }] }
        ],
        "subRegions": [
          { "name": "Nierstein (Roter Hang)", "description": "The steep red-soiled slopes along the Rhine producing Rheinhessen's most prestigious and mineral Rieslings.", "geography": "East-facing slopes with unique red sandstone and iron-rich soils.", "grapes": "Riesling." },
          { "name": "Wonnegau", "description": "The southern section, increasingly recognized for limestone-based dry Riesling and Burgundian varieties.", "geography": "Gently rolling hills with calcareous soils.", "grapes": "Riesling, Spätburgunder." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [15.4, 48.4] },
      "properties": {
        "id": "wachau",
        "name": "Wachau",
        "country": "Austria",
        "history": "A UNESCO World Heritage site and Austria's most prestigious wine region. The Wachau pioneers developed their own unique quality classification system: Steinfeder (lightest), Federspiel (medium), and Smaragd (the most powerful, richest wines). This independent system operates outside the standard Austrian wine law, reflecting the fiercely proud local identity.",
        "geography": "A dramatic, narrow Danube gorge carved through crystalline bedrock in Lower Austria. The river creates a warm corridor sheltered from cold northern winds. Continental climate with warm Pannonian influences from the east.",
        "terroir": "Steep, terraced hillsides composed of ancient primary rock: granite (Loiben) and gneiss (Spitz), along with patches of loess. The stone terraces absorb daytime heat and radiate it at night, critical for ripening at this latitude. Vineyards can exceed 45° slope angles.",
        "grapes": [
          { "name": "Grüner Veltliner", "description": "Austria's signature white grape. In the Wachau, it produces powerful, dry wines with white pepper, green bean, citrus, and lentil notes, developing remarkable honeyed complexity with age.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Riesling", "description": "The Wachau's finest vineyards (Achleiten, Kellerberg) produce Rieslings that rival the Rheingau and Alsace: powerful, mineral, with apricot, peach, and stony tension.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Domäne Wachau", "description": "The largest and most important cooperative, producing benchmark wines across all three tiers.", "wines": [{ "name": "Smaragd Grüner Veltliner Achleiten", "url": "https://www.vivino.com/search/wines?q=Domane+Wachau+Smaragd" }] },
          { "name": "F.X. Pichler", "description": "The cult icon of Austrian wine, famous for age-worthy, monumental Smaragd Rieslings.", "wines": [{ "name": "Unendlich Riesling", "url": "https://www.vivino.com/search/wines?q=FX+Pichler+Unendlich" }] }
        ],
        "subRegions": [
          { "name": "Loiben", "description": "The warmest section, home to the legendary Loibenberg vineyard. Produces the most powerful Grüner Veltliners.", "geography": "South-facing terraced slopes of primary granite rock.", "grapes": "Grüner Veltliner, Riesling." },
          { "name": "Spitz", "description": "Cooler western section producing the most elegant, mineral-driven Rieslings.", "geography": "Steeper, narrower gorge with gneiss and mica-schist soils.", "grapes": "Riesling, Grüner Veltliner." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-8.8, 42.3] },
      "properties": {
        "id": "rias-baixas",
        "name": "Rías Baixas",
        "country": "Spain",
        "history": "Located in Galicia, northwestern Spain, Rías Baixas is Spain's most important white wine region. The Albariño grape was traditionally grown on pergolas (parras) to maximize airflow in this damp climate. The region gained DO status in 1988 and has since become internationally synonymous with fresh, aromatic, Atlantic-influenced white wine.",
        "geography": "Atlantic climate: cool, wet, and heavily influenced by the ocean. High rainfall (over 1,500mm annually) creates constant pressure from mildew and rot. Vines are traditionally trained high on granite pergolas to maximize ventilation and reduce disease.",
        "terroir": "Predominantly granite and sandy soils over granite bedrock. These acidic, free-draining soils maintain naturally high acidity in the wines. The granite also provides a subtle mineral quality often described as 'salty' or 'stony.'",
        "grapes": [
          { "name": "Albariño", "description": "The signature grape: thick-skinned, aromatic, producing crisp, refreshing wines with peach, apricot, citrus, and a distinctive saline, almond-skin finish. High natural acidity.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Pazo de Señoráns", "description": "Benchmark producer of age-worthy Albariño with remarkable complexity.", "wines": [{ "name": "Selección de Añada", "url": "https://www.vivino.com/search/wines?q=Pazo+de+Senorans+Seleccion" }] }
        ],
        "subRegions": [
          { "name": "Val do Salnés", "description": "The original and coolest sub-zone, closest to the Atlantic. Produces the crispest, most mineral Albariños.", "geography": "Closest to the ocean with the highest rainfall. Granite soils.", "grapes": "Albariño." },
          { "name": "Condado do Tea", "description": "The warmest, most inland sub-zone, producing fuller-bodied wines with more tropical fruit.", "geography": "Protected from Atlantic influence by hills. Alluvial and granite soils.", "grapes": "Albariño, Treixadura." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-71.2, -34.7] },
      "properties": {
        "id": "colchagua",
        "name": "Colchagua Valley",
        "country": "Chile",
        "history": "Part of Chile's Rapel Valley, Colchagua has emerged as the country's most exciting red wine region since the 1990s. Massive investment from both domestic and international producers has transformed this warm valley into a source of world-class Carménère, Syrah, and Cabernet Sauvignon. The Apalta sub-valley is its crown jewel.",
        "geography": "A warm, dry Mediterranean climate with the Andes to the east and the Coastal Range to the west. Pacific breezes funnel through gaps in the Coastal Range, providing crucial afternoon cooling. The Tinguiririca River provides irrigation water from Andean snowmelt.",
        "terroir": "Diverse soils from alluvial deposits in the valley floor to decomposed granite and clay on hillsides. The Apalta amphitheater has unique colluvial soils (granite and clay washed down from surrounding mountains) that stress vines and concentrate flavors.",
        "grapes": [
          { "name": "Carménère", "description": "Chile's signature grape finds its finest expression here. Rich, velvety wines with roasted red pepper, dark plum, chocolate, and coffee notes with supple tannins.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Cabernet Sauvignon & Syrah", "description": "Powerful, sun-drenched reds with blackberry, cassis, and spice. Syrah from cooler coastal sites shows remarkable peppery elegance.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Viña Montes", "description": "Pioneers of hillside planting in Apalta with their iconic Folly vineyard.", "wines": [{ "name": "Montes Alpha M", "url": "https://www.vivino.com/search/wines?q=Montes+Alpha+M" }] },
          { "name": "Lapostolle", "description": "French-owned estate producing Clos Apalta, a world-class Bordeaux-style blend.", "wines": [{ "name": "Clos Apalta", "url": "https://www.vivino.com/search/wines?q=Clos+Apalta" }] }
        ],
        "subRegions": [
          { "name": "Apalta", "description": "A unique, sheltered amphitheater producing Chile's most concentrated, powerful red wines.", "geography": "A natural amphitheater surrounded by mountains, trapping heat. Colluvial granite and clay soils.", "grapes": "Carménère, Cabernet Sauvignon, Merlot." },
          { "name": "Marchigüe", "description": "Closer to the coast, receiving more maritime influence for slightly cooler expressions.", "geography": "Rolling hills with alluvial soils. Coastal breezes moderate afternoon heat.", "grapes": "Syrah, Sauvignon Blanc." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [25, 38] },
      "properties": {
        "id": "greece",
        "name": "Greece (Santorini & Naoussa)",
        "country": "Greece",
        "history": "One of the oldest wine-producing countries in the world, with a winemaking history spanning over 4,000 years. Greece has undergone a dramatic revival since the 1980s, rediscovering and championing its unique indigenous grape varieties. Santorini's Assyrtiko and Naoussa's Xinomavro are now internationally acclaimed.",
        "geography": "Predominantly Mediterranean climate: hot, dry summers and mild, wet winters. Santorini is a volcanic island in the Aegean Sea with extreme wind exposure, where vines are trained in low basket shapes ('kouloura') to protect from wind. Naoussa, in northern Macedonia, has a cooler continental climate on the slopes of Mount Vermion.",
        "terroir": "Santorini's soils are volcanic pumice and ash, phylloxera-free, with some of the oldest vines in the world (200+ years). Naoussa features limestone and clay on mountain slopes at 200-450m elevation. Both terroirs produce wines of remarkable minerality and structure.",
        "grapes": [
          { "name": "Assyrtiko", "description": "Santorini's star: bone-dry, searingly high acidity, medium to full-bodied with citrus, stone fruit, saline minerality, and a chalky texture. Retains acidity despite extreme heat.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Xinomavro", "description": "Greece's answer to Nebbiolo: high acidity, high tannins, pale color, with aromas of tomato, olive, dried herbs, red fruit, and gooseberry. Highly age-worthy.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Domaine Sigalas", "description": "Benchmark Santorini producer, preserving ancient bush vines.", "wines": [{ "name": "Assyrtiko", "url": "https://www.vivino.com/search/wines?q=Sigalas+Assyrtiko" }] },
          { "name": "Kir-Yianni", "description": "Leading Naoussa producer, showcasing Xinomavro's aging potential.", "wines": [{ "name": "Ramnista Xinomavro", "url": "https://www.vivino.com/search/wines?q=Kir+Yianni+Ramnista" }] }
        ],
        "subRegions": [
          { "name": "Santorini PDO", "description": "Volcanic island producing Greece's most famous whites from ancient, pre-phylloxera Assyrtiko vines.", "geography": "Volcanic pumice soils, extreme wind, extremely arid summers. Vines trained as low baskets.", "grapes": "Assyrtiko, Athiri, Aidani." },
          { "name": "Naoussa PDO", "description": "Northern Greece's finest red wine appellation, producing age-worthy, structured Xinomavro.", "geography": "Mountain slopes of Mt. Vermion (200-450m) with limestone and clay. Cool continental climate.", "grapes": "100% Xinomavro." }
        ]
      }
    }
  ]
};
