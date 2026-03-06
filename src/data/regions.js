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
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-76.8, 42.6] },
      "properties": {
        "id": "finger-lakes",
        "name": "Finger Lakes",
        "country": "USA (New York)",
        "history": "New York State's premier wine region, centered around a series of deep, narrow glacial lakes in the western part of the state. Despite being at a northerly, challenging latitude, the Finger Lakes has become America's most important Riesling region, drawing comparisons to the Mosel and Alsace. The deep lakes moderate the harsh continental climate, making viticulture possible.",
        "geography": "Cold continental climate with severe winters (-20°C). The deep glacial lakes (Seneca, Cayuga, Keuka) act as thermal buffers: they absorb summer heat and slowly release it through autumn, extending the growing season and preventing deadly early frosts. Without the lakes, grapes simply could not ripen here.",
        "terroir": "The best vineyards are planted on the steep slopes directly above the lakes, benefiting from superior cold-air drainage and reflected warmth. Soils are predominantly shale and limestone, providing excellent drainage and adding mineral complexity. The slate retains heat during the day.",
        "grapes": [
          { "name": "Riesling", "description": "The star variety, producing dry to sweet styles with piercing acidity, green apple, lime, and petrol notes. Often compared favorably to German and Alsatian Rieslings.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Cabernet Franc", "description": "The most successful red variety, producing lighter, aromatic reds with raspberry, bell pepper, and herbaceous notes.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Dr. Konstantin Frank", "description": "The visionary who proved vinifera grapes could survive New York winters.", "wines": [{ "name": "Dry Riesling", "url": "https://www.vivino.com/search/wines?q=Dr+Konstantin+Frank+Riesling" }] },
          { "name": "Hermann J. Wiemer", "description": "Benchmark producer of world-class Finger Lakes Riesling.", "wines": [{ "name": "Dry Riesling", "url": "https://www.vivino.com/search/wines?q=Hermann+Wiemer+Riesling" }] }
        ],
        "subRegions": [
          { "name": "Seneca Lake", "description": "The deepest lake (188m), providing the most effective thermal moderation. Produces the region's most powerful, concentrated Rieslings.", "geography": "Steep shale slopes above the deepest Finger Lake.", "grapes": "Riesling, Cabernet Franc." },
          { "name": "Keuka Lake", "description": "The historic heart of Finger Lakes winemaking, site of the earliest commercial vineyards.", "geography": "Y-shaped lake with multiple slope exposures.", "grapes": "Riesling, Vignoles." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-120.2, 34.7] },
      "properties": {
        "id": "santa-barbara",
        "name": "Santa Barbara County",
        "country": "USA",
        "history": "Made famous by the film 'Sideways', Santa Barbara is unique in California because its valleys run east-west rather than north-south. This transverse orientation funnels cold Pacific air and fog deep inland, creating remarkably cool growing conditions in an otherwise warm state. It is now recognized as one of California's finest Pinot Noir and Chardonnay regions.",
        "geography": "Cool maritime climate due to the unique east-west oriented valleys that channel ocean influence far inland. The Santa Ynez and Santa Maria Valleys act as corridors for Pacific fog and wind. Temperatures can be 15°C cooler than regions just over the mountains.",
        "terroir": "Soils include marine sedimentary (diatomaceous earth in Sta. Rita Hills), sandy loam, and clay. The diatomaceous earth—ancient compressed marine organisms—provides exceptional drainage and adds a chalky, mineral quality.",
        "grapes": [
          { "name": "Pinot Noir", "description": "Produces elegant, Burgundy-inspired wines with bright red fruit, earth, and fine tannins. The Sta. Rita Hills AVA is particularly acclaimed.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay", "description": "Crisp, mineral-driven styles from cooler sites, ranging to richer, tropical expressions in warmer pockets.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Syrah", "description": "Increasingly important, producing peppery, cool-climate styles reminiscent of the Northern Rhône.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Au Bon Climat", "description": "Jim Clendenen's iconic estate, pioneering Burgundian winemaking in Santa Barbara.", "wines": [{ "name": "Pinot Noir", "url": "https://www.vivino.com/search/wines?q=Au+Bon+Climat+Pinot+Noir" }] }
        ],
        "subRegions": [
          { "name": "Sta. Rita Hills", "description": "The coolest, most fog-influenced AVA producing Santa Barbara's most acclaimed Pinot Noirs.", "geography": "Western end of the Santa Ynez Valley, fully exposed to Pacific fog. Diatomaceous earth and clay.", "grapes": "Pinot Noir, Chardonnay." },
          { "name": "Santa Maria Valley", "description": "A broad, cool valley producing excellent Chardonnay and Pinot Noir, home to legendary vineyards like Bien Nacido.", "geography": "East-west valley open to persistent ocean winds. Sandy loam soils.", "grapes": "Chardonnay, Pinot Noir, Syrah." },
          { "name": "Happy Canyon", "description": "The warmest, most inland AVA, sheltered from ocean influence, excelling with Bordeaux varieties.", "geography": "Eastern end of the Santa Ynez Valley. Sandy soils with gravel.", "grapes": "Cabernet Sauvignon, Sauvignon Blanc." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [11.3, 46.7] },
      "properties": {
        "id": "alto-adige",
        "name": "Alto Adige (Südtirol)",
        "country": "Italy",
        "history": "A bilingual, bicultural region at the foot of the Dolomites, historically part of Austria until 1919. German-speaking winemakers dominate, producing precise, aromatic white wines that blend Italian winemaking traditions with Germanic grape varieties and rigorous quality standards. It is Italy's northernmost and arguably most quality-consistent wine region.",
        "geography": "Alpine climate with warm, dry summers and cold winters. The key feature is extreme altitude—vineyards range from 200m on the valley floor to over 1,000m on mountain slopes. The Ora wind blows warm air up from Lake Garda daily, moderating temperatures. High diurnal variation is essential for aroma development.",
        "terroir": "Incredibly varied: porphyry (volcanic rock) in the lower Adige valley, limestone and dolomite on higher slopes, sandy-gravelly alluvium on the valley floor. The steep, terraced mountainside vineyards receive maximum sun exposure while benefiting from cool alpine nights.",
        "grapes": [
          { "name": "Pinot Grigio", "description": "Unlike the dilute, mass-produced Veneto style, Alto Adige Pinot Grigio is medium to full-bodied with pear, apple, and almond notes, often showing a subtle coppery hue.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Gewürztraminer", "description": "Named after the village of Tramin in Alto Adige. Intensely aromatic with lychee, rose, and Turkish delight. The local versions are among the world's finest.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Lagrein & Schiava", "description": "Indigenous red grapes. Lagrein produces deeply colored, full-bodied wines with dark berry and chocolate; Schiava is light, and cherry-scented for everyday drinking.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Elena Walch", "description": "Pioneer of premium single-vineyard Alto Adige whites.", "wines": [{ "name": "Kastelaz Gewürztraminer", "url": "https://www.vivino.com/search/wines?q=Elena+Walch+Gewurztraminer" }] }
        ],
        "subRegions": [
          { "name": "Termeno/Tramin", "description": "The birthplace of Gewürztraminer, producing the region's most aromatic and concentrated examples.", "geography": "Warm, south-facing slopes with porphyry and clay soils.", "grapes": "Gewürztraminer, Pinot Grigio." },
          { "name": "Bolzano/Bozen", "description": "The warmest zone, producing the best Lagrein reds and full-bodied whites.", "geography": "Low-altitude valley floor with porphyry and sandy gravel.", "grapes": "Lagrein, Schiava." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [14.8, 41] },
      "properties": {
        "id": "campania",
        "name": "Campania",
        "country": "Italy",
        "history": "Home to some of Italy's most ancient and prized grape varieties, cultivated since Greek colonization (8th century BC). The Greeks called southern Italy 'Oenotria' (land of wine). Campania was long overshadowed by northern Italy but is now recognized for producing some of Italy's most age-worthy, distinctive whites (Fiano, Greco) and its towering red, Taurasi from Aglianico.",
        "geography": "A diverse landscape dominated by Mount Vesuvius (active volcano) and the Apennine Mountains. The climate is Mediterranean on the coast, shifting to continental inland at higher altitudes where the best wines are produced. The volcanic soils of Vesuvius are phylloxera-free.",
        "terroir": "Volcanic tufo (volcanic tuff) around Vesuvius and Avellino provides excellent drainage and mineral complexity. In the highlands of Irpinia (Taurasi, Fiano di Avellino), clay and limestone soils at 400-600m altitude create high acidity and structure in the wines.",
        "grapes": [
          { "name": "Aglianico", "description": "The 'Barolo of the South'. Extremely late-ripening with massive tannins, high acidity, and dark fruit, tar, leather, and chocolate notes. Requires decades of aging to show its best.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Fiano", "description": "An aromatic white producing complex, age-worthy wines with hazelnut, honey, pear, and exotic spice notes.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Greco", "description": "High-acid, full-bodied white with almond, citrus, and mineral notes. Greco di Tufo is the finest expression.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Mastroberardino", "description": "Historic family estate that preserved Campania's indigenous varieties through the 20th century.", "wines": [{ "name": "Taurasi Radici", "url": "https://www.vivino.com/search/wines?q=Mastroberardino+Taurasi+Radici" }] }
        ],
        "subRegions": [
          { "name": "Taurasi DOCG", "description": "The flagship red appellation, producing powerful, age-worthy Aglianico requiring 3 years minimum aging.", "geography": "High-altitude (400-600m) inland hills of Irpinia. Clay and volcanic soils.", "grapes": "Aglianico." },
          { "name": "Fiano di Avellino DOCG", "description": "Produces Italy's most complex, age-worthy indigenous white wines.", "geography": "High-altitude hills near Avellino with limestone and volcanic soils.", "grapes": "Fiano." },
          { "name": "Greco di Tufo DOCG", "description": "Named for the volcanic tufo rock, producing structured, mineral whites.", "geography": "Sulfur-rich volcanic tufo soils near Tufo village.", "grapes": "Greco." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-8.6, 41.8] },
      "properties": {
        "id": "vinho-verde",
        "name": "Vinho Verde",
        "country": "Portugal",
        "history": "Portugal's largest demarcated wine region, famous for its light, fresh, slightly effervescent white wines. 'Vinho Verde' means 'green wine', referring not to color but to youthfulness—these wines are meant to be consumed young. The region is experiencing a quality revolution, with premium single-varietal Alvarinho wines now commanding international respect.",
        "geography": "Located in the cool, wet northwest of Portugal, between the Minho and Douro rivers. Atlantic-influenced maritime climate with high rainfall (1,200-1,500mm). Traditionally, vines were trained high on pergolas and trellises (vinha de enforcado) to combat humidity.",
        "terroir": "Predominantly granite-based soils that provide excellent drainage in this wet climate and contribute to the wines' characteristic mineral, slightly saline quality. River valleys create warmer mesoclimates for better ripening.",
        "grapes": [
          { "name": "Alvarinho (Albariño)", "description": "The premium grape, especially in the Monção e Melgaço sub-region. Produces aromatic, full-bodied wines with peach, apricot, and citrus. Higher alcohol and complexity than standard Vinho Verde.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Loureiro", "description": "The most planted variety, producing lighter, floral wines with acacia, orange blossom, and citrus notes.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Anselmo Mendes", "description": "Leading producer elevating Alvarinho to world-class status.", "wines": [{ "name": "Contacto Alvarinho", "url": "https://www.vivino.com/search/wines?q=Anselmo+Mendes+Alvarinho" }] }
        ],
        "subRegions": [
          { "name": "Monção e Melgaço", "description": "The northernmost, warmest sub-region on the Spanish border, producing the finest single-varietal Alvarinho.", "geography": "Sheltered river valley with granite soils. Warmer than the rest of the region.", "grapes": "Alvarinho." },
          { "name": "Lima & Cávado", "description": "The cooler, wetter central zones producing the classic light, fresh, slightly fizzy Vinho Verde blends.", "geography": "Higher rainfall, granite soils, pergola-trained vines.", "grapes": "Loureiro, Arinto, Trajadura." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-16.9, 32.6] },
      "properties": {
        "id": "madeira",
        "name": "Madeira",
        "country": "Portugal",
        "history": "A volcanic island in the Atlantic, 600km off the Moroccan coast. Madeira wine is one of the most unique and long-lived wines in the world—bottles from the 18th century remain drinkable. The fortified wine style was accidentally discovered when wines shipped through tropical heat improved rather than spoiled. The 'estufagem' process (heating) now deliberately replicates this.",
        "geography": "Subtropical volcanic island with steep, terraced mountainsides. The northern coast is wet and cool while the southern coast is warmer and drier. Vineyards climb from sea level to over 700m. The Gulf Stream provides a warm, humid maritime climate year-round.",
        "terroir": "Volcanic basalt soils provide excellent drainage on impossibly steep terrain. Vineyards are tiny, often terraced on 'poios' (narrow stone-walled ledges). The volcanic origin contributes to the wines' distinctive tangy, smoky character.",
        "grapes": [
          { "name": "Sercial", "description": "Produces the driest style of Madeira: high acidity, citrus, almond, and piercing minerality. Aged for years in heated 'estufas'.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Verdelho", "description": "Medium-dry style with smoky, honeyed character and high acidity.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Bual & Malmsey (Malvasia)", "description": "The sweetest styles. Bual is medium-sweet with caramel and coffee. Malmsey is the richest, most luscious, with dark sugar, dried fruit, and chocolate.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Blandy's", "description": "The most famous Madeira house, family-owned since 1811.", "wines": [{ "name": "10 Year Old Malmsey", "url": "https://www.vivino.com/search/wines?q=Blandy+Malmsey+10" }] }
        ],
        "subRegions": [
          { "name": "Câmara de Lobos", "description": "Traditional heartland of Madeira production on the warmer southern coast.", "geography": "South-facing terraced slopes above the fishing village.", "grapes": "Tinta Negra, Malmsey." },
          { "name": "São Vicente", "description": "Cooler northern coast, producing the finest Sercial and Verdelho.", "geography": "North-facing, cooler, higher rainfall. Steep volcanic terraces.", "grapes": "Sercial, Verdelho." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [1.8, 41.4] },
      "properties": {
        "id": "penedes-cava",
        "name": "Penedès (Cava)",
        "country": "Spain",
        "history": "Penedès is the heartland of Cava—Spain's traditional method sparkling wine. Cava production began in 1872 when Josep Raventós brought Champagne techniques to Catalonia. Today, Spain is one of the world's largest sparkling wine producers by volume. The region also produces excellent still wines, championed by the innovative Torres family.",
        "geography": "Mediterranean climate with warm summers and mild winters. The region is divided into three altitude zones: Baix-Penedès near the coast (warm, ideal for reds), Mig-Penedès in the middle (balanced, main Cava zone), and Alt-Penedès at higher elevations (cooler, producing the freshest base wines).",
        "terroir": "Limestone and clay soils dominate, providing good drainage and contributing to the mineral quality of the sparkling wines. Higher altitude zones have chalky, limestone-rich soils that preserve acidity essential for Cava production.",
        "grapes": [
          { "name": "Macabeo, Xarel·lo & Parellada", "description": "The classic Cava trio: Macabeo (freshness, floral), Xarel·lo (body, earthy structure, the backbone), and Parellada (elegance, citrus, high altitude). Xarel·lo is increasingly bottled as a still wine.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay & Pinot Noir", "description": "Now permitted in Cava production, adding richness and complexity. Premium Cavas increasingly use these international varieties.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Codorníu", "description": "One of the original Cava houses, founded in 1551 (oldest recorded family business in Spain).", "wines": [{ "name": "Anna de Codorníu Brut", "url": "https://www.vivino.com/search/wines?q=Codorniu+Anna" }] },
          { "name": "Torres", "description": "Family-owned icon producing world-class still wines alongside Cava.", "wines": [{ "name": "Mas La Plana Cabernet", "url": "https://www.vivino.com/search/wines?q=Torres+Mas+La+Plana" }] }
        ],
        "subRegions": [
          { "name": "Alt-Penedès", "description": "The highest, coolest zone producing the most elegant, citrus-driven Cava base wines.", "geography": "500-800m elevation with limestone soils and significant diurnal variation.", "grapes": "Parellada, Macabeo." },
          { "name": "Mig-Penedès", "description": "The main Cava production zone with ideal balance of warmth and acidity.", "geography": "200-500m elevation. Clay-limestone soils.", "grapes": "Xarel·lo, Macabeo, Parellada." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.7, 41.4] },
      "properties": {
        "id": "rueda",
        "name": "Rueda",
        "country": "Spain",
        "history": "Spain's most acclaimed white wine DO, located on the Castilian Meseta plateau. Historically known for oxidized, fortified wines, Rueda was transformed in the 1970s when Marqués de Riscal (from Rioja) brought temperature-controlled fermentation and modern winemaking, revealing Verdejo's stunning aromatic potential when vinified fresh.",
        "geography": "High-altitude continental plateau (600-800m) with extreme temperature variation: scorching summers and freezing winters. Very low rainfall makes drought a constant challenge. The altitude ensures cool nights that preserve acidity.",
        "terroir": "Sandy and gravelly soils over limestone and clay bedrock. The stony, free-draining soils concentrate flavors and the high calcium content contributes to Verdejo's distinctive bitter-almond mineral finish.",
        "grapes": [
          { "name": "Verdejo", "description": "Spain's finest indigenous white grape. Aromatic, full-bodied, with fennel, grass, stone fruit, and a distinctive bitter-almond finish. Higher body and lower acidity than Sauvignon Blanc.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Sauvignon Blanc", "description": "Increasingly planted alongside Verdejo, producing crisp, herbaceous wines that complement the local style.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Marqués de Riscal", "description": "The Rioja giant that revolutionized Rueda's white winemaking in the 1970s.", "wines": [{ "name": "Verdejo", "url": "https://www.vivino.com/search/wines?q=Marques+de+Riscal+Verdejo" }] }
        ],
        "subRegions": [
          { "name": "Rueda Central", "description": "The heart of the DO around the town of Rueda, producing the most concentrated Verdejo from old bush vines.", "geography": "High plateau (700-800m) with sandy soils over limestone.", "grapes": "Verdejo." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [8.2, 49.3] },
      "properties": {
        "id": "pfalz",
        "name": "Pfalz",
        "country": "Germany",
        "history": "Germany's second-largest wine region and its warmest, benefiting from the shelter of the Haardt Mountains (northern extension of the Vosges). Once known primarily for bulk production, the Pfalz has undergone a dramatic quality revolution, producing outstanding dry Rieslings and increasingly world-class Spätburgunder (Pinot Noir).",
        "geography": "The warmest and sunniest of Germany's wine regions. The Haardt Mountains to the west block Atlantic rain, creating Germany's driest microclimate. Almond and fig trees grow here—evidence of the near-Mediterranean conditions. Vineyards stretch along the 'Deutsche Weinstraße' (German Wine Route).",
        "terroir": "Diverse soils including sandstone, limestone, basalt (volcanic), loess, and clay. The Mittelhaardt zone features the finest terroirs: limestone and basalt at mid-slope elevations producing powerful, complex Rieslings.",
        "grapes": [
          { "name": "Riesling", "description": "Produces a richer, more generous style than nearly any other German region. Ripe stone fruit, exotic spice, and power define the Pfalz style. Often fermented bone-dry.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Spätburgunder (Pinot Noir)", "description": "The Pfalz is increasingly challenging Burgundy for Pinot Noir quality, producing concentrated, oak-aged reds with cherry, earth, and spice.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Bürklin-Wolf", "description": "One of Germany's greatest estates, biodynamic pioneer with Grand Cru vineyards.", "wines": [{ "name": "Kirchenstück Riesling GG", "url": "https://www.vivino.com/search/wines?q=Burklin+Wolf+Kirchenstuck" }] }
        ],
        "subRegions": [
          { "name": "Mittelhaardt", "description": "The premium northern section, home to the great villages of Forst, Deidesheim, and Ruppertsberg.", "geography": "Mid-slope limestone and basalt soils. Germany's warmest vineyards.", "grapes": "Riesling." },
          { "name": "Südliche Weinstraße", "description": "The larger southern section, increasingly producing excellent Spätburgunder and value Riesling.", "geography": "Gentle slopes with loess, limestone, and sandstone.", "grapes": "Riesling, Spätburgunder, Grauburgunder." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [145.5, -37.7] },
      "properties": {
        "id": "yarra-valley",
        "name": "Yarra Valley",
        "country": "Australia",
        "history": "Victoria's premier wine region, first planted in 1838. After phylloxera devastation in the early 20th century, it was abandoned until the 1960s revival. Now recognized as Australia's finest cool-climate region, producing benchmark Pinot Noir and Chardonnay that rival Burgundy, alongside exceptional traditional method sparkling wines.",
        "geography": "Located just east of Melbourne, the Yarra Valley enjoys a cool maritime-influenced climate. The Great Dividing Range provides shelter while elevation varies from 50m to 400m. This altitude variation creates a wide range of mesoclimates within a compact area.",
        "terroir": "Red volcanic basalt (deep, fertile) on the valley floor suits Cabernet and Shiraz, while grey clay and sandy soils on the cooler upper slopes are ideal for Pinot Noir and Chardonnay. The diversity of terroirs is the Yarra's greatest asset.",
        "grapes": [
          { "name": "Pinot Noir", "description": "The Yarra's finest achievement: elegant, perfumed, with dark cherry, spice, and forest floor notes. Among Australia's most Burgundian expressions.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay", "description": "Ranges from tight, citrus-driven to generous, nutty styles. Cool climate ensures natural acid retention.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Cabernet Sauvignon", "description": "From warmer, lower sites produces structured, elegant Bordeaux-style reds with cassis and mint.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "De Bortoli", "description": "Family estate producing wines across all tiers, from Noble One (botrytis Semillon) to premium Yarra Pinot.", "wines": [{ "name": "Yarra Valley Pinot Noir", "url": "https://www.vivino.com/search/wines?q=De+Bortoli+Yarra+Pinot+Noir" }] }
        ],
        "subRegions": [
          { "name": "Upper Yarra", "description": "Cooler, higher altitude (200-400m) producing the region's most elegant Pinot Noir and Chardonnay.", "geography": "Grey clay and sandy soils. Significantly cooler temperatures.", "grapes": "Pinot Noir, Chardonnay." },
          { "name": "Lower Yarra", "description": "Warmer valley floor suited to Cabernet, Shiraz, and richer Chardonnay styles.", "geography": "Red volcanic basalt soils. Warmer mesoclimate.", "grapes": "Cabernet Sauvignon, Shiraz." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [138.6, -33.8] },
      "properties": {
        "id": "clare-valley",
        "name": "Clare Valley",
        "country": "Australia",
        "history": "A small, historic region north of Adelaide, first planted by Jesuit settlers in the 1840s. Clare Valley is internationally renowned for producing Australia's greatest dry Rieslings—bone-dry, brilliantly acidic wines that rival the finest from Germany and Alsace. The region pioneered the screw-cap revolution in 2000.",
        "geography": "A series of narrow valleys and ridges at 400-500m elevation in the Mount Lofty Ranges. Despite being further north than Barossa, the altitude provides significantly cooler temperatures, especially at night. Low humidity and cooling afternoon breezes from the Gulf further moderate the climate.",
        "terroir": "Varied soils including red-brown earth, slate (particularly in the Polish Hill River sub-region), and limestone (in Watervale). Slate soils produce the most mineral, tightly structured Rieslings, while limestone yields richer, more generous styles.",
        "grapes": [
          { "name": "Riesling", "description": "Clare Valley Riesling is fermented bone-dry with electric lime, lemon, and mineral acidity in youth, developing classic toast and kerosene notes with age. A world benchmark.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Shiraz & Cabernet Sauvignon", "description": "From warmer sites, produces structured, age-worthy reds with dark fruit, eucalyptus, and firm tannins.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Grosset", "description": "Jeffrey Grosset's iconic estate producing Australia's most acclaimed Rieslings.", "wines": [{ "name": "Polish Hill Riesling", "url": "https://www.vivino.com/search/wines?q=Grosset+Polish+Hill+Riesling" }] }
        ],
        "subRegions": [
          { "name": "Polish Hill River", "description": "The cooler, more austere sub-region producing the most mineral, tightly wound Rieslings.", "geography": "Higher altitude with slate and shale soils.", "grapes": "Riesling." },
          { "name": "Watervale", "description": "Slightly lower and warmer, producing more generous, lime-juicy Rieslings from limestone soils.", "geography": "Terra rossa over limestone. Warmer daytime temperatures.", "grapes": "Riesling, Shiraz." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [175.5, -41.2] },
      "properties": {
        "id": "martinborough",
        "name": "Martinborough (Wairarapa)",
        "country": "New Zealand",
        "history": "A tiny but prestigious region at the southern tip of the North Island, established in 1978 after soil scientist Dr. Derek Milne identified its climate and terroir similarities to Burgundy. Martinborough quickly became New Zealand's first acclaimed Pinot Noir region, paving the way before Central Otago.",
        "geography": "Dry, cool climate in the rain shadow of the Tararua Ranges. Much drier than the rest of the North Island's wine regions. Low rainfall, high sunshine hours, and persistent winds create ideal conditions for Pinot Noir. Small-scale production with an artisanal focus.",
        "terroir": "Free-draining alluvial gravel terraces over ancient river deposits. The gravels are similar in structure to Burgundy's Côte d'Or, providing excellent drainage, heat retention, and natural vine stress that concentrates flavors.",
        "grapes": [
          { "name": "Pinot Noir", "description": "Martinborough's Pinot Noirs are among New Zealand's most complex: dark cherry, plum, earth, game, and silky tannins with significant aging potential.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Sauvignon Blanc", "description": "More restrained and mineral than Marlborough, with herbaceous, stony, and subtle tropical notes.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Ata Rangi", "description": "Founding estate and New Zealand Pinot Noir icon.", "wines": [{ "name": "Pinot Noir", "url": "https://www.vivino.com/search/wines?q=Ata+Rangi+Pinot+Noir" }] }
        ],
        "subRegions": [
          { "name": "Martinborough Terrace", "description": "The original, best-drained gravel terrace producing the region's most acclaimed Pinot Noirs.", "geography": "Ancient alluvial gravel deposits. Free-draining, low vigor.", "grapes": "Pinot Noir." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [18.7, -33.4] },
      "properties": {
        "id": "swartland",
        "name": "Swartland",
        "country": "South Africa",
        "history": "Once a bulk-wine wheat-farming region, Swartland has undergone South Africa's most dramatic quality revolution since the mid-2000s. A group of young, iconoclastic winemakers (the 'Swartland Revolution') championed old bush vine Chenin Blanc, Syrah, and Mediterranean blends, positioning Swartland as South Africa's most exciting and innovative wine region.",
        "geography": "Warm Mediterranean climate with hot, dry summers. Lower rainfall than Stellenbosch means many vineyards are dryland-farmed (unirrigated), naturally restricting yields and concentrating flavors. Cooling afternoon breezes from the Atlantic moderate temperatures.",
        "terroir": "Diverse soils: granite, shale, schist, and clay. The Paardeberg (granite mountain) is the quality epicenter, with decomposed granite soils that produce Swartland's most mineral, expressive Chenin Blancs. Ancient bush vines (50-80+ years old) are treasured.",
        "grapes": [
          { "name": "Chenin Blanc", "description": "Old bush vine Chenin is Swartland's crown jewel: complex, textured, with baked apple, quince, honey, and waxy notes. Often fermented in old oak for added complexity.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Syrah", "description": "Produces peppery, medium to full-bodied reds with dark fruit, olive tapenade, and smoked meat. Increasingly compared to the Northern Rhône.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Grenache & GSM Blends", "description": "Mediterranean varieties thrive in the heat, producing aromatic, spicy blends.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Mullineux", "description": "The leading light of the Swartland Revolution, producing terroir-driven wines.", "wines": [{ "name": "Old Vines White", "url": "https://www.vivino.com/search/wines?q=Mullineux+Old+Vines+White" }] }
        ],
        "subRegions": [
          { "name": "Paardeberg", "description": "The quality epicenter, a granite mountain producing South Africa's most celebrated old-vine Chenin Blanc.", "geography": "Decomposed granite soils at various elevations. Dryland-farmed.", "grapes": "Chenin Blanc, Grenache." },
          { "name": "Malmesbury", "description": "The broader valley producing excellent Syrah and GSM blends from shale soils.", "geography": "Shale and clay soils in the warmer valley floor.", "grapes": "Syrah, Mourvèdre." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-71.4, -33.8] },
      "properties": {
        "id": "leyda-san-antonio",
        "name": "Leyda / San Antonio Valley",
        "country": "Chile",
        "history": "One of Chile's most exciting new-wave regions, proving the country can produce world-class cool-climate wines. Planted only since the late 1990s, Leyda is just 14km from the Pacific Ocean, making it one of Chile's coolest and most maritime-influenced wine regions. It has quickly earned acclaim for Sauvignon Blanc, Pinot Noir, and Chardonnay.",
        "geography": "Cool coastal climate directly influenced by the cold Humboldt Current. Morning fogs roll in from the Pacific, clearing by midday. Afternoon sea breezes further cool the vineyards. The absence of the Coastal Range at this latitude allows unimpeded ocean influence.",
        "terroir": "Decomposed granite over clay subsoils. The thin, well-draining soils restrict vigor and concentrate flavors. Salinity in the soils from ancient marine deposits contributes to the wines' distinctive mineral, saline character.",
        "grapes": [
          { "name": "Sauvignon Blanc", "description": "Produces Chile's most acclaimed examples: intensely aromatic with grapefruit, lime, green herbs, and a distinctive salty minerality.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Pinot Noir", "description": "Elegant, cool-climate examples with bright cherry, strawberry, and earthy complexity. Growing in reputation.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Chardonnay", "description": "Crisp, mineral-driven with citrus and subtle oak. Among Chile's most refined examples.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Casa Marin", "description": "The pioneer that first planted vines in the San Antonio Valley coastal zone.", "wines": [{ "name": "Cipreses Sauvignon Blanc", "url": "https://www.vivino.com/search/wines?q=Casa+Marin+Sauvignon+Blanc" }] }
        ],
        "subRegions": [
          { "name": "Leyda", "description": "The most acclaimed sub-valley, just 14km from the ocean, producing Chile's most mineral white wines.", "geography": "Rolling coastal hills with decomposed granite soils. Persistent morning fog.", "grapes": "Sauvignon Blanc, Pinot Noir, Chardonnay." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [15.5, 48.2] },
      "properties": {
        "id": "kamptal-kremstal",
        "name": "Kamptal & Kremstal",
        "country": "Austria",
        "history": "Two adjacent regions flanking the Wachau that produce Austria's finest value Grüner Veltliner and Riesling. While less dramatic than the Wachau's steep terraces, these regions benefit from similar terroir elements and have gained international recognition through the DAC (Districtus Austriae Controllatus) quality system.",
        "geography": "Continental climate with warm Pannonian influence from the east. The Kamp and Krems rivers moderate temperatures. Slightly warmer and less extreme than the Wachau, allowing more consistent ripening and higher yields without sacrificing quality.",
        "terroir": "Mix of primary rock (gneiss, granite) on the riverbanks and deep loess deposits on the plateaus. Loess produces more generous, fruit-forward wines, while primary rock yields tighter, more mineral expressions. The interplay defines each village's character.",
        "grapes": [
          { "name": "Grüner Veltliner", "description": "From light, peppery everyday wines to powerful, oak-aged reserve bottlings with white pepper, citrus, lentil, and remarkable aging potential.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Riesling", "description": "Produces excellent, mineral-driven wines, slightly less intense than the Wachau but with greater accessibility and value.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Bründlmayer", "description": "Kamptal's most famous estate, producing benchmark Grüner Veltliner and sparkling wine.", "wines": [{ "name": "Heiligenstein Riesling", "url": "https://www.vivino.com/search/wines?q=Brundlmayer+Heiligenstein+Riesling" }] }
        ],
        "subRegions": [
          { "name": "Langenlois (Kamptal)", "description": "Austria's largest wine commune, home to the famous Heiligenstein vineyard—a warm, south-facing terroir of desert sandstone.", "geography": "Desert sandstone and volcanic soils on the Heiligenstein. Loess on surrounding plateaus.", "grapes": "Grüner Veltliner, Riesling." },
          { "name": "Krems (Kremstal)", "description": "Centered around the medieval town of Krems, producing elegant wines from a mix of loess and primary rock.", "geography": "Loess terraces and gneiss slopes along the Danube.", "grapes": "Grüner Veltliner, Riesling." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [1.2, 44.5] },
      "properties": {
        "id": "south-west-france",
        "name": "South West France",
        "country": "France",
        "history": "A collection of diverse appellations upstream from Bordeaux, historically oppressed by Bordeaux's trade monopoly that prevented their wines from reaching export markets. This forced the region to develop fiercely individual styles from unique indigenous grapes. Today, South West France is prized for authenticity and value, with Cahors, Madiran, and Bergerac leading the revival.",
        "geography": "Inland continental climate with warm summers and cold winters. The rivers Lot, Tarn, and Dordogne provide crucial moderating effects. Higher altitude areas experience significant frost risk. Proximity to the Pyrenees provides cooling mountain influences in the south.",
        "terroir": "Diverse: Cahors features iron-rich clay and limestone (causse) on high plateaus; Madiran has clay-limestone and galets; Bergerac mirrors Bordeaux with gravel and clay. The poor, well-drained soils on hillsides produce the most concentrated wines.",
        "grapes": [
          { "name": "Malbec (Côt)", "description": "In Cahors (its original home), Malbec produces the 'Black Wine'—deeply colored, tannic, with blackberry, violet, and dark spice.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Tannat", "description": "The brutally tannic grape of Madiran, producing massively structured reds with dark fruit, leather, and spice. Micro-oxygenation was invented here to tame the tannins.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Château Montus (Madiran)", "description": "Alain Brumont's iconic estate that proved Tannat could be world-class.", "wines": [{ "name": "Madiran Prestige", "url": "https://www.vivino.com/search/wines?q=Chateau+Montus+Madiran" }] }
        ],
        "subRegions": [
          { "name": "Cahors", "description": "The original home of Malbec, producing dense, dark, tannic reds known as 'Black Wine of Cahors.'", "geography": "High limestone plateaus (causses) and river terraces. Iron-rich clay.", "grapes": "Malbec (≥70%)." },
          { "name": "Madiran", "description": "Produces some of France's most tannic reds from Tannat at the foot of the Pyrenees.", "geography": "Clay and limestone on rolling hills near the Pyrenees.", "grapes": "Tannat (≥60%)." },
          { "name": "Bergerac & Monbazillac", "description": "An eastward extension of Bordeaux producing excellent value reds and world-class botrytis sweet whites.", "geography": "Mirrors Bordeaux's geology with clay, limestone, and gravel.", "grapes": "Merlot, Cabernet Sauvignon, Sémillon." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-120.7, 35.6] },
      "properties": {
        "id": "paso-robles",
        "name": "Paso Robles",
        "country": "USA",
        "history": "California's fastest-growing wine region and the state's Rhône Ranger capital. Originally planted in the 1790s by Franciscan missionaries, Paso Robles remained obscure until a boom in the 2000s. Today it is California's third-largest AVA, now divided into 11 distinct sub-AVAs, known for bold, full-throttle reds and outstanding value compared to Napa.",
        "geography": "Located halfway between Los Angeles and San Francisco on the Central Coast. Extreme diurnal temperature swings—up to 25°C between day and night—are the defining characteristic. The Templeton Gap channels cool Pacific air through the Santa Lucia Range, creating cooler western zones versus the hotter, drier east.",
        "terroir": "The west side features calcareous (limestone-rich) soils with significant marine influence; the east side has hotter, drier conditions with sandy and clay soils. This east-west divide creates dramatically different wine styles within the same appellation.",
        "grapes": [
          { "name": "Cabernet Sauvignon", "description": "Bold, ripe, and full-bodied with blackberry, chocolate, and sweet oak. Paso's warmth produces generous, fruit-forward Cabernets at a fraction of Napa prices.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Zinfandel", "description": "Historic plantings produce jammy, high-alcohol, spicy reds. Some of California's oldest Zinfandel vines are found here.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Rhône Varieties (Grenache, Syrah, Mourvèdre)", "description": "Paso Robles is the epicenter of California's Rhône movement, producing peppery Syrah, perfumed Grenache, and complex GSM blends.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Tablas Creek", "description": "Co-founded by the Perrin family (Châteauneuf-du-Pape), importing genuine Rhône clones.", "wines": [{ "name": "Esprit de Tablas", "url": "https://www.vivino.com/search/wines?q=Tablas+Creek+Esprit" }] }
        ],
        "subRegions": [
          { "name": "Adelaida District", "description": "The coolest, most mountainous western sub-AVA with limestone soils and marine influence.", "geography": "Steep, elevated terrain with calcareous soils. Cool Pacific breezes through the Templeton Gap.", "grapes": "Syrah, Grenache, Mourvèdre." },
          { "name": "Paso Robles Estrella District", "description": "The warmer, drier eastern side producing bold, ripe Cabernet and Zinfandel.", "geography": "Flat to rolling terrain with sandy-clay soils. Hot days and cold nights.", "grapes": "Cabernet Sauvignon, Zinfandel." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-123.3, 39.1] },
      "properties": {
        "id": "mendocino",
        "name": "Mendocino County",
        "country": "USA",
        "history": "California's northernmost major wine region, known for its pioneering organic and biodynamic viticulture—it has the highest concentration of organic vineyards in the US. The county offers dramatic contrasts: the foggy, redwood-forested Anderson Valley near the coast, and the warm, sheltered inland valleys. Mendocino has always attracted iconoclasts and independent spirits.",
        "geography": "Extremely diverse climate. Anderson Valley near the coast is one of California's coldest wine regions, ideal for sparkling wine and Pinot Noir. Inland valleys (Redwood Valley, Ukiah) are warm and sheltered, suited to Zinfandel and Cabernet. The Pacific fog is the dominant climate factor.",
        "terroir": "Coastal zones have thin, acidic, well-draining soils on steep hillsides. Inland valleys feature deeper alluvial soils with more warmth. Anderson Valley's marine-influenced soils produce wines of remarkable finesse and acidity.",
        "grapes": [
          { "name": "Pinot Noir", "description": "Anderson Valley produces elegant, cool-climate Pinot Noir with bright red fruit, mushroom, and spice—among California's most refined.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Sparkling Wine", "description": "The cold Anderson Valley attracted Champagne houses (Roederer, Scharffenberger) to establish sparkling wine operations. Among the finest in the New World.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Zinfandel", "description": "From warm inland valleys, old-vine Zinfandel produces powerful, brambly, spicy reds.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Roederer Estate", "description": "The California outpost of Champagne Louis Roederer, producing outstanding sparkling wine.", "wines": [{ "name": "L'Ermitage Brut", "url": "https://www.vivino.com/search/wines?q=Roederer+Estate+L+Ermitage" }] }
        ],
        "subRegions": [
          { "name": "Anderson Valley", "description": "A narrow, fog-filled valley producing California's finest sparkling wine and exceptional cool-climate Pinot Noir.", "geography": "Open to Pacific fog and wind. Thin, acidic soils on steep slopes.", "grapes": "Pinot Noir, Chardonnay, sparkling." },
          { "name": "Redwood Valley", "description": "A warm, inland valley producing rich, full-bodied reds from organic vineyards.", "geography": "Sheltered from coastal influence. Deep alluvial soils.", "grapes": "Zinfandel, Cabernet Sauvignon, Petite Sirah." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [13.5, 46] },
      "properties": {
        "id": "friuli",
        "name": "Friuli-Venezia Giulia",
        "country": "Italy",
        "history": "Italy's premier white wine region, located in the northeast bordering Slovenia and Austria. Friuli revolutionized Italian white winemaking in the 1960s-70s when Mario Schiopetto introduced temperature-controlled fermentation, producing Italy's first crisp, aromatic, modern whites. The region is also historically significant for its ancient 'orange wines' (skin-contact whites) made in large clay amphorae.",
        "geography": "Cool continental climate moderated by the Adriatic Sea and sheltered by the Alps. The Julian Alps block cold northern winds. Two main zones: the hillside 'Colli' areas (Collio and Colli Orientali) and the flat Grave del Friuli plains.",
        "terroir": "The Collio hills feature 'ponca'—compressed layers of marl and sandstone from ancient seabeds, providing excellent drainage and intense mineral character. The Grave plains have gravelly, alluvial soils that produce lighter, fresher wines.",
        "grapes": [
          { "name": "Pinot Grigio", "description": "Friuli's Pinot Grigio is Italy's finest: fuller-bodied, textured, with pear, almond, and mineral notes—completely different from the bland industrial versions.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Friulano (Tocai)", "description": "The signature local grape, producing round, almondy, medium-bodied whites with herbs and white flowers.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Ribolla Gialla", "description": "An ancient variety now famous for 'orange wine' (extended maceration). Conventional versions are crisp and citrusy; skin-contact versions are deep gold with dried fruit, tea, and tannic grip.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Gravner", "description": "The godfather of orange wine, aging Ribolla Gialla in buried Georgian clay amphorae.", "wines": [{ "name": "Ribolla Anfora", "url": "https://www.vivino.com/search/wines?q=Gravner+Ribolla" }] },
          { "name": "Jermann", "description": "Benchmark estate for pristine, aromatic Friulian whites.", "wines": [{ "name": "Vintage Tunina", "url": "https://www.vivino.com/search/wines?q=Jermann+Vintage+Tunina" }] }
        ],
        "subRegions": [
          { "name": "Collio", "description": "The most prestigious hillside zone on the Slovenian border, producing Italy's most complex, mineral whites.", "geography": "Steep ponca (marl and sandstone) hills. Cool, sheltered microclimate.", "grapes": "Pinot Grigio, Friulano, Sauvignon Blanc." },
          { "name": "Colli Orientali del Friuli", "description": "Eastern hills producing excellent whites and the unique sweet Picolit and red Schioppettino.", "geography": "Ponca soils with slightly warmer exposure than Collio.", "grapes": "Friulano, Ribolla Gialla, Picolit." },
          { "name": "Grave del Friuli", "description": "The largest zone on the alluvial plains, producing fresh, value-driven whites and reds.", "geography": "Flat, gravelly alluvial soils from ancient rivers.", "grapes": "Pinot Grigio, Merlot, Refosco." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [12.7, 43] },
      "properties": {
        "id": "umbria",
        "name": "Umbria",
        "country": "Italy",
        "history": "Known as the 'green heart of Italy', Umbria is a landlocked region that produces some of Italy's most distinctive wines. Orvieto has been produced since the Etruscans, while Sagrantino di Montefalco DOCG is one of Italy's most tannic and powerful reds. Long overshadowed by neighboring Tuscany, Umbria is now gaining recognition for its unique indigenous varieties.",
        "geography": "Hilly, landlocked region with a continental climate moderated by Lake Trasimeno. Cooler and wetter than Tuscany, with higher altitudes and more dramatic terrain. The town of Orvieto sits atop a volcanic plateau.",
        "terroir": "Volcanic tuff around Orvieto provides excellent drainage. Montefalco has clay and limestone hills that stress vines and concentrate Sagrantino's already massive tannins. The varied altitude creates diverse microclimates.",
        "grapes": [
          { "name": "Sagrantino", "description": "Endemic to Montefalco, producing one of the world's most tannic red wines: inky, powerful, with blackberry, leather, tar, and dark chocolate. Requires significant aging.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Grechetto & Trebbiano (Orvieto)", "description": "Orvieto Classico is a blend of these grapes, producing fresh, almond-scented whites. The 'Amabile' (off-dry) and late-harvest versions are historically important.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Arnaldo Caprai", "description": "The estate that single-handedly elevated Sagrantino di Montefalco to world-class status.", "wines": [{ "name": "Sagrantino 25 Anni", "url": "https://www.vivino.com/search/wines?q=Arnaldo+Caprai+Sagrantino" }] }
        ],
        "subRegions": [
          { "name": "Montefalco DOCG", "description": "A tiny zone producing Italy's most tannic red from the endemic Sagrantino grape.", "geography": "Clay and limestone hills at 300-400m altitude.", "grapes": "Sagrantino." },
          { "name": "Orvieto Classico", "description": "Ancient appellation at the heart of Umbria, producing fresh, everyday whites from a volcanic plateau.", "geography": "Volcanic tuff soils atop a dramatic mesa.", "grapes": "Grechetto, Trebbiano, Procanico." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [9.1, 39.2] },
      "properties": {
        "id": "sardinia",
        "name": "Sardinia (Sardegna)",
        "country": "Italy",
        "history": "The second-largest Mediterranean island, with a winemaking culture deeply influenced by Spanish rule (1323-1720). Its key grapes—Cannonau (Grenache) and Vermentino—reveal this Iberian connection. Sardinia is increasingly recognized for its ancient, ungrafted bush vines, unique terroir, and distinctive wines that taste unlike anything else in Italy.",
        "geography": "Mediterranean island climate with hot, dry summers and mild winters. The dominant 'Mistral' (Maestrale) wind blows from the northwest, cooling the island and preventing humidity-related disease. The interior is mountainous and rugged, with vineyards at various altitudes.",
        "terroir": "Dramatically varied: ancient granite in the north (Gallura, ideal for Vermentino), limestone and volcanic soils in the center, and sandy/clay soils in the south (Sulcis, home to old-vine Carignano/Carignan). Many vines are own-rooted, ungrafted, and over 100 years old.",
        "grapes": [
          { "name": "Cannonau (Grenache)", "description": "Sardinia claims Cannonau originated here before spreading to Spain. Produces warm, earthy, herb-scented reds with dried cherry, Mediterranean scrub, and rustic charm.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Vermentino", "description": "At its finest in Gallura DOCG (northeast Sardinia). Produces aromatic, saline whites with citrus, herbs, almond, and a distinctive sea-breeze minerality.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Carignano (Carignan)", "description": "Old, ungrafted bush vines in the sandy soils of Sulcis produce deeply concentrated, age-worthy reds with dark fruit and licorice.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Argiolas", "description": "Sardinia's most acclaimed estate, producing Turriga from old-vine Cannonau.", "wines": [{ "name": "Turriga", "url": "https://www.vivino.com/search/wines?q=Argiolas+Turriga" }] }
        ],
        "subRegions": [
          { "name": "Gallura DOCG", "description": "Northeast Sardinia, the only DOCG, producing Italy's finest Vermentino from granite soils.", "geography": "Granite hills swept by the Mistral. Windswept, arid terrain.", "grapes": "Vermentino." },
          { "name": "Sulcis (Carignano del Sulcis)", "description": "Southwest Sardinia, home to ancient, ungrafted Carignano bush vines on sandy soils.", "geography": "Sandy coastal soils that repel phylloxera. Hot, dry Mediterranean climate.", "grapes": "Carignano." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-5.7, 41.5] },
      "properties": {
        "id": "toro",
        "name": "Toro",
        "country": "Spain",
        "history": "One of Spain's most powerful wine regions, named after the ancient town of Toro on the Duero River in Castilla y León. The wines were historically called 'black wines' for their extreme concentration—they were so robust they survived the long sea voyages of Spanish conquistadors. Toro's Tinta de Toro (a local Tempranillo clone) has adapted to extreme conditions over centuries.",
        "geography": "Located on Spain's high central plateau (Meseta) at 600-800m altitude. Extreme continental climate: burning hot summers (40°C+) and freezing winters (-10°C). Very low rainfall (<400mm), making it essentially semi-arid. The Duero River provides the only reliable water source.",
        "terroir": "Sandy soils over bedrock of limestone and clay. The deep sand protected many vines from phylloxera, so Toro has a significant stock of ungrafted, pre-phylloxera vines over 100 years old. These ancient vines produce tiny yields of extraordinarily concentrated fruit.",
        "grapes": [
          { "name": "Tinta de Toro (Tempranillo)", "description": "A uniquely thick-skinned Tempranillo clone adapted to extreme heat and drought. Produces massively concentrated, nearly opaque wines with blackberry, fig, dark chocolate, and formidable tannins.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Numanthia", "description": "Renowned for powerfully concentrated wines from pre-phylloxera Tinta de Toro vines.", "wines": [{ "name": "Numanthia", "url": "https://www.vivino.com/search/wines?q=Numanthia+Toro" }] }
        ],
        "subRegions": [
          { "name": "Toro Central (Old Vines)", "description": "The core zone with the highest concentration of ungrafted, centenarian bush vines.", "geography": "Sandy soils over limestone. Very old, low-yielding vines.", "grapes": "Tinta de Toro." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-6.6, 42.6] },
      "properties": {
        "id": "bierzo",
        "name": "Bierzo",
        "country": "Spain",
        "history": "A remote, mountainous DO in northwest Spain that has emerged as one of the country's most exciting regions. The indigenous Mencía grape was long dismissed as a minor variety until a new generation of producers (led by Álvaro Palacios and his nephew Ricardo Pérez) proved it could produce hauntingly beautiful, terroir-expressive wines rivaling fine Burgundy.",
        "geography": "A natural amphitheater surrounded by mountains, creating a unique microclimate that is warmer and drier than surrounding Galicia but cooler than the central Meseta. Atlantic and Mediterranean influences mix. Altitude ranges from 450m to over 800m.",
        "terroir": "Steep, slate and quartzite hillsides (similar to the Mosel or Priorat) with patches of clay and alluvial soils. The mineral-rich slate reflects heat and drains water rapidly, stressing the vines and producing wines of remarkable minerality and elegance.",
        "grapes": [
          { "name": "Mencía", "description": "A hauntingly aromatic, medium-bodied red with violet, dark cherry, smoky mineral, and graphite notes. Often compared to Pinot Noir for its elegance and transparency, with the structure of a Rhône Syrah.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Godello", "description": "A fine white grape producing textured, mineral whites with stone fruit, citrus, and almond notes.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Descendientes de J. Palacios", "description": "Álvaro Palacios and nephew Ricardo Pérez, elevating Mencía to world-class status.", "wines": [{ "name": "Pétalos del Bierzo", "url": "https://www.vivino.com/search/wines?q=Petalos+del+Bierzo" }] }
        ],
        "subRegions": [
          { "name": "Corullón", "description": "The rugged mountain village producing Bierzo's most acclaimed single-vineyard Mencías from ancient slate terraces.", "geography": "Steep slate and quartzite slopes at 600-800m. Old bush vines.", "grapes": "Mencía." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [16.8, 47.8] },
      "properties": {
        "id": "burgenland",
        "name": "Burgenland",
        "country": "Austria",
        "history": "Austria's warmest wine region, located on the Hungarian border and deeply influenced by Lake Neusiedl (Neusiedlersee)—one of Europe's largest steppe lakes. Burgenland produces Austria's finest red wines and its most famous sweet wines (Beerenauslese and Trockenbeerenauslese), rivaling Sauternes and Tokaj. The region has undergone a dramatic quality revolution since the 1985 wine scandal.",
        "geography": "Warm Pannonian continental climate with hot summers and cold winters. Lake Neusiedl acts as a massive temperature moderator and humidity generator. Autumn mists and fogs from the lake create ideal conditions for noble rot (botrytis). The Leithaberg hills provide cooler, elevated vineyard sites.",
        "terroir": "Flat to gently rolling terrain around the lake with sandy, gravelly, and clay soils. The Leithaberg hills feature limestone and schist at higher elevations, producing Austria's most structured, mineral reds. The lake's humidity is essential for the world-class botrytized sweet wines.",
        "grapes": [
          { "name": "Blaufränkisch", "description": "Austria's most important red grape: medium to full-bodied with sour cherry, blackberry, pepper, and a distinctive savory, spicy character. Age-worthy from the best sites.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Zweigelt", "description": "Austria's most-planted red grape (a cross of Blaufränkisch and St. Laurent), producing juicy, cherry-fruited, medium-bodied reds for everyday drinking.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Sweet Wine Grapes (Welschriesling, Chardonnay)", "description": "The humid lakeside conditions produce some of Europe's greatest botrytized sweet wines, golden and luscious with apricot, honey, and citrus.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Kracher", "description": "The undisputed king of Austrian sweet wine, producing ethereal TBAs.", "wines": [{ "name": "Trockenbeerenauslese No. 7", "url": "https://www.vivino.com/search/wines?q=Kracher+Trockenbeerenauslese" }] },
          { "name": "Moric", "description": "Roland Velich's project producing Austria's most profound, terroir-driven Blaufränkisch.", "wines": [{ "name": "Blaufränkisch Reserve", "url": "https://www.vivino.com/search/wines?q=Moric+Blaufrankisch" }] }
        ],
        "subRegions": [
          { "name": "Neusiedlersee", "description": "The eastern lakeside, flat and warm, famous for sweet botrytized wines and red blends.", "geography": "Flat, sandy-gravelly soils around Lake Neusiedl. Humid autumn fogs.", "grapes": "Welschriesling, Zweigelt, sweet wine." },
          { "name": "Leithaberg / Mittelburgenland", "description": "The hilly western zone producing Austria's most structured, age-worthy Blaufränkisch.", "geography": "Limestone and schist hills at higher elevation. Cooler, drier.", "grapes": "Blaufränkisch." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [44.8, 41.7] },
      "properties": {
        "id": "georgia",
        "name": "Republic of Georgia",
        "country": "Georgia",
        "history": "Georgia is widely considered the birthplace of wine—archaeological evidence dates winemaking here to approximately 6000 BC (8,000 years ago). The traditional Georgian winemaking method involves fermenting and aging wine in large, egg-shaped clay vessels called 'qvevri', buried underground. This method is now a UNESCO Intangible Cultural Heritage. Georgia boasts over 500 indigenous grape varieties.",
        "geography": "Located at the crossroads of Europe and Asia, between the Greater and Lesser Caucasus mountains. The eastern region (Kakheti) has a continental climate, while western Georgia is humid and subtropical. The Caucasus Mountains protect vineyards from cold northern air masses.",
        "terroir": "Kakheti features rich alluvial soils in the Alazani Valley between two mountain ranges. The qvevri vessels, buried underground, maintain a constant temperature during fermentation and aging. The diversity of soils and over 500 grape varieties creates wine styles found nowhere else.",
        "grapes": [
          { "name": "Saperavi", "description": "One of few 'teinturier' grapes (red flesh as well as skin). Produces deeply colored, tannic, age-worthy reds with blackberry, plum, and dark chocolate. Often fermented in qvevri.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Rkatsiteli", "description": "Georgia's most planted white grape. Conventionally produces crisp, appley whites. In qvevri with extended skin contact, it becomes deep amber 'orange wine' with dried fruit, tea, walnut, and tannic grip.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Mtsvane", "description": "A delicately aromatic white often blended with Rkatsiteli, adding floral elegance and freshness.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Pheasant's Tears", "description": "Founded by American painter John Wurdeman, producing benchmark qvevri wines.", "wines": [{ "name": "Saperavi", "url": "https://www.vivino.com/search/wines?q=Pheasant+Tears+Saperavi" }] }
        ],
        "subRegions": [
          { "name": "Kakheti", "description": "The ancient heartland of Georgian wine, producing 70% of the country's output. Home to the most traditional qvevri winemaking.", "geography": "Alazani Valley between the Caucasus and Tsiv-Gombori ranges. Rich alluvial soils.", "grapes": "Saperavi, Rkatsiteli, Mtsvane." },
          { "name": "Kartli", "description": "Central Georgia around the capital Tbilisi, producing lighter, fresher wines.", "geography": "Higher altitude, cooler. Mix of clay and limestone.", "grapes": "Chinuri, Goruli Mtsvane." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [13.8, 46.1] },
      "properties": {
        "id": "slovenia",
        "name": "Slovenia",
        "country": "Slovenia",
        "history": "A tiny but ancient wine-producing country tucked between Italy, Austria, Hungary, and Croatia. Slovenia has been making wine for over 2,400 years. Its Goriška Brda (Brda) region is essentially a continuation of Italy's Collio across the border, producing comparable quality. Slovenia is also a hotbed of the natural wine and orange wine movement.",
        "geography": "Three distinct wine regions: Primorska (west, Mediterranean/Italian influence), Podravje (northeast, continental/Austrian influence), and Posavje (southeast, Croatian influence). The Adriatic moderates the west while the Pannonian plain warms the east. Overall cool to moderate climate.",
        "terroir": "Primorska features the same 'ponca' (flysch) marl-sandstone soils as Italian Collio. The northeast has volcanic and clay soils suited to aromatic whites. The diversity of terroir in such a small country is remarkable.",
        "grapes": [
          { "name": "Rebula (Ribolla Gialla)", "description": "The signature white of Brda/Goriška Brda, producing both crisp conventional whites and deep orange wines with amber color, dried fruit, and tannic grip.", "image": "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Welschriesling & Furmint", "description": "In the northeast (Štajerska), producing aromatic, crisp whites reflecting the Austrian/Hungarian influence.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Movia", "description": "A pioneering natural wine estate producing unfiltered, biodynamic wines since 1820.", "wines": [{ "name": "Lunar Chardonnay", "url": "https://www.vivino.com/search/wines?q=Movia+Lunar" }] }
        ],
        "subRegions": [
          { "name": "Goriška Brda (Brda)", "description": "The Slovenian extension of Italy's Collio, producing Italy-rivaling whites and acclaimed orange wines.", "geography": "Ponca (flysch) marl-sandstone hills. Mediterranean-influenced climate.", "grapes": "Rebula, Malvazija, Chardonnay." },
          { "name": "Štajerska (Styria)", "description": "Northeastern Slovenia, producing aromatic, crisp whites with Austrian influence.", "geography": "Continental climate with volcanic and clay soils.", "grapes": "Welschriesling, Sauvignon Blanc, Furmint." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-119.5, 49.5] },
      "properties": {
        "id": "canada",
        "name": "Canada (Okanagan & Niagara)",
        "country": "Canada",
        "history": "Canada has two distinct wine regions of international importance: the Okanagan Valley in British Columbia (west) and the Niagara Peninsula in Ontario (east). Canada is the world's largest producer of Icewine (Eiswein)—a lusciously sweet wine made from grapes naturally frozen on the vine at -8°C. The VQA (Vintners Quality Alliance) system guarantees origin and quality.",
        "geography": "The Okanagan is a dramatic, semi-arid, rain-shadow valley at 49°N latitude with a large lake moderating temperatures. Niagara benefits from the thermal influence of Lake Ontario and the Niagara Escarpment. Both regions have extreme continental climates with severe winter freeze risk.",
        "terroir": "Okanagan soils are glacial till, sandy loam, and gravel over ancient lake beds—extremely varied along the 200km valley. Niagara features clay and limestone over the Niagara Escarpment, with the Beamsville Bench as the premium sub-zone.",
        "grapes": [
          { "name": "Riesling & Vidal (Icewine)", "description": "Canada's most famous contribution to world wine. Grapes freeze naturally on the vine in December/January, concentrating sugars to extraordinary levels. The result is a viscous, golden nectar of honey, apricot, mango, and electric acidity.", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Pinot Noir", "description": "Okanagan Pinot Noir (from cooler southern sites) is gaining acclaim: elegant, cherry-fruited, with earthy complexity.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Merlot & Syrah", "description": "The warm central Okanagan produces surprisingly ripe, full-bodied reds rivaling Washington State.", "image": "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Inniskillin", "description": "The pioneer that put Canadian Icewine on the world map, winning the Grand Prix d'Honneur at Vinexpo 1991.", "wines": [{ "name": "Vidal Icewine", "url": "https://www.vivino.com/search/wines?q=Inniskillin+Icewine" }] }
        ],
        "subRegions": [
          { "name": "Okanagan Valley (BC)", "description": "British Columbia's premier region with dramatic north-south climate variation along a glacial lake.", "geography": "Semi-arid rain shadow valley with glacial soils. Lake Okanagan moderates temperature.", "grapes": "Pinot Noir, Merlot, Riesling, Syrah." },
          { "name": "Niagara Peninsula (Ontario)", "description": "Canada's largest wine region and Icewine capital, benefiting from Lake Ontario's thermal influence.", "geography": "Clay and limestone over the Niagara Escarpment. Lake-moderated cold climate.", "grapes": "Riesling, Vidal (Icewine), Chardonnay, Pinot Noir." }
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-99, 30.5] },
      "properties": {
        "id": "texas",
        "name": "Texas",
        "country": "USA",
        "history": "The fifth-largest wine-producing US state and one of the fastest-growing. Spanish missionaries planted the first vinifera grapes in Texas in the 1660s—making it older than California wine. The Texas High Plains AVA (near Lubbock) at 1,000m altitude produces 85% of the state's premium grapes, thriving in conditions remarkably similar to Spain and southern France.",
        "geography": "The Texas High Plains features a semi-arid continental climate at high altitude with intense sunshine, very low rainfall, and massive diurnal temperature variation (often 20°C+). The Hill Country (near Austin/San Antonio) has a more humid, warmer climate influenced by the Gulf of Mexico.",
        "terroir": "High Plains soils are deep, sandy loam over caliche (calcium carbonate hardpan). The alkaline, well-draining soils and extreme UV produce thick-skinned, concentrated grapes. Hill Country has a mix of limestone, granite, and clay.",
        "grapes": [
          { "name": "Tempranillo", "description": "Thrives in the Iberian-like conditions of the High Plains. Produces concentrated, structured reds with dark cherry, leather, and spice.", "image": "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          { "name": "Mourvèdre & Viognier", "description": "Mediterranean/Rhône varieties increasingly showing exceptional promise in the Texas heat.", "image": "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
        ],
        "estates": [
          { "name": "Becker Vineyards", "description": "One of the Hill Country's most acclaimed estates.", "wines": [{ "name": "Reserve Tempranillo", "url": "https://www.vivino.com/search/wines?q=Becker+Vineyards+Tempranillo" }] }
        ],
        "subRegions": [
          { "name": "Texas High Plains", "description": "The quality engine, at 1,000m altitude near Lubbock, supplying most premium Texas grapes.", "geography": "High-altitude semi-arid plateau. Sandy loam over caliche. Extreme diurnal shift.", "grapes": "Tempranillo, Cabernet Sauvignon, Mourvèdre." },
          { "name": "Texas Hill Country", "description": "America's second-most-visited wine region (after Napa), centered between Austin and Fredericksburg.", "geography": "Rolling limestone and granite hills. Warmer, more humid Gulf influence.", "grapes": "Tempranillo, Viognier, Sangiovese." }
        ]
      }
    }
  ]
};
