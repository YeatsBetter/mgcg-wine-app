export const wineRegionsData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-1.1, 44.5],
                    [-0.2, 44.5],
                    [-0.2, 45.3],
                    [-1.1, 45.3],
                    [-1.1, 44.5]
                ]]
            },
            properties: {
                id: "bordeaux",
                name: "Bordeaux",
                country: "France",
                history: "Wine was introduced to the Bordeaux region by the Romans, probably in the mid-1st century, to provide wine for local consumption and for the troops. The marriage of Eleanor of Aquitaine to Henry Plantagenet (later King Henry II of England) in 1152 opened the English market.",
                geography: "Located in southwest France near the Atlantic coast. The Gironde estuary and its two rivers, the Garonne and Dordogne, defined the region ('Left Bank' vs 'Right Bank'). The Gulf Stream warms the maritime climate.",
                terroir: "Left Bank: Deep gravel soils over limestone bedrock, excellent drainage that forces roots deep and absorbs heat to ripen Cabernet. Right Bank: Clay, limestone, and sand, remaining cooler and moister, ideal for Merlot.",
                grapes: "🍷 **Cabernet Sauvignon** (Left Bank dominant): High acid, high tannin, full body. Blackcurrant, cedar, tobacco. Needs decanting when young, ages for decades. \n\n🍷 **Merlot** (Right Bank dominant): Medium acid, medium tannin. Plum, red cherry, chocolate. Brings plushness and approachability to blends.\n\n🥂 **Sauvignon Blanc & Sémillon**: Used for crisp dry whites (Pessac-Léognan) and world-class sweet botrytized wines (Sauternes).",
                estates: [
                    {
                        name: "Château Lafite Rothschild",
                        description: "First Growth (Premier Cru). Known for elegance, perfumed aromatics, and extreme longevity. Always Cabernet Sauvignon dominant.",
                        wines: [
                            { name: "Château Lafite Rothschild", url: "https://www.vivino.com/search/wines?q=Chateau+Lafite+Rothschild" },
                            { name: "Carruades de Lafite", url: "https://www.vivino.com/search/wines?q=Carruades+de+Lafite" }
                        ]
                    },
                    {
                        name: "Château Petrus",
                        description: "The most famous and expensive wine from Pomerol on the Right Bank. A near-pure expression of Merlot grown on blue clay.",
                        wines: [
                            { name: "Petrus", url: "https://www.vivino.com/search/wines?q=Petrus+Pomerol" }
                        ]
                    },
                    {
                        name: "Château d'Yquem",
                        description: "The sole Premier Cru Supérieur in Sauternes. The absolute pinnacle of sweet white wine, capable of aging for over a century due to perfect botrytis conditions.",
                        wines: [
                            { name: "Château d'Yquem", url: "https://www.vivino.com/search/wines?q=Chateau+d'Yquem" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [4.7, 46.9],
                    [5.0, 46.9],
                    [4.7, 47.3],
                    [4.4, 47.3],
                    [4.7, 46.9]
                ]]
            },
            properties: {
                id: "burgundy",
                name: "Burgundy (Bourgogne)",
                country: "France",
                history: "Monasteries, particularly the Benedictines and Cistercians, established the vineyards of Burgundy in the Middle Ages. They meticulously recorded which plots ('climats') produced the best wines, founding the concept of terroir.",
                geography: "A long, narrow strip running from Dijon down to Lyon. Continental climate with cold winters and unpredictable weather (hail is a constant threat). Divided into Chablis, Côte d'Or (Côte de Nuits & Côte de Beaune), Côte Chalonnaise, and Mâconnais.",
                terroir: "The most complex terroir in the world. Variations in Jurassic limestone, marl, and elevation over mere meters dictate whether a vine yields a generic Bourgogne or an astronomical Grand Cru.",
                grapes: "🍷 **Pinot Noir** (Côte de Nuits): The heartbreak grape. Low-medium tannin, high acidity. Strawberry, raspberry, turning into forest floor, mushroom, and game (sous-bois) with age. Completely transparent to the soil it's grown in.\n\n🥂 **Chardonnay**: Originates here. Chablis offers unoaked, high-acid, steely lemon/flint. Côte de Beaune (e.g., Montrachet) offers highly complex, barrel-fermented whites with hazelnut, butter, and white peach.",
                estates: [
                    {
                        name: "Domaine de la Romanée-Conti (DRC)",
                        description: "The most prestigious and expensive wine estate in the world. Farmed biodynamically, their monopole Romanée-Conti Grand Cru is the holy grail of Pinot Noir.",
                        wines: [
                            { name: "Romanée-Conti Grand Cru", url: "https://www.vivino.com/search/wines?q=Romanee+Conti" },
                            { name: "La Tâche Grand Cru", url: "https://www.vivino.com/search/wines?q=La+Tache" }
                        ]
                    },
                    {
                        name: "Domaine Leroy",
                        description: "Helmed by Lalou Bize-Leroy, famous for incredibly low yields, strict biodynamics, and profound, intense wines that rival and sometimes surpass DRC in market price.",
                        wines: [
                            { name: "Musigny Grand Cru", url: "https://www.vivino.com/search/wines?q=Domaine+Leroy+Musigny" }
                        ]
                    },
                    {
                        name: "Domaine Leflaive",
                        description: "The undisputed master of white Burgundy in Puligny-Montrachet, producing Chardonnay of immense tension, minerality, and aging potential.",
                        wines: [
                            { name: "Chevalier-Montrachet Grand Cru", url: "https://www.vivino.com/search/wines?q=Leflaive+Chevalier-Montrachet" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [10.9, 43.1],
                    [11.6, 43.1],
                    [11.5, 43.7],
                    [10.9, 43.7],
                    [10.9, 43.1]
                ]]
            },
            properties: {
                id: "tuscany",
                name: "Tuscany",
                country: "Italy",
                history: "Winemaking dates back to the Etruscans in the 8th century BC. The formula for Chianti was laid down by Baron Ricasoli in 1872. The 1970s saw the 'Super Tuscan' revolution where winemakers broke DOC rules to use French grapes.",
                geography: "Hilly terrain (appennine foothills) providing vital altitude and diurnal temperature shifts. A Mediterranean climate by the coast (Bolgheri) transitioning to a warmer continental climate inland (Chianti, Montalcino).",
                terroir: "Galestro (marl-like clay-schist) and Alberese (limestone) are the prized soils of Chianti Classico. Sandy clay is favored for the powerful Grosso clone in Montalcino.",
                grapes: "🍷 **Sangiovese**: High acidity, high tannin. Sour cherry, red plum, dried herbs, clay/earth, and balsamic notes. Thrives on long, slow ripening.\n\n🍷 **Cabernet & Merlot** (Super Tuscans): Grown mainly on the coastal Maremma/Bolgheri areas, yielding opulent, polished, modern wines.",
                estates: [
                    {
                        name: "Tenuta San Guido",
                        description: "The birthplace of the Super Tuscan. Their flagship wine 'Sassicaia' (meaning place of many stones) proved Cabernet could thrive in Bolgheri.",
                        wines: [
                            { name: "Sassicaia", url: "https://www.vivino.com/search/wines?q=Sassicaia" }
                        ]
                    },
                    {
                        name: "Marchesi Antinori",
                        description: "A winemaking family with over 600 years of history. Creators of Tignanello, the first Sangiovese aged in barriques and blended with Cabernet.",
                        wines: [
                            { name: "Tignanello", url: "https://www.vivino.com/search/wines?q=Tignanello" },
                            { name: "Solaia", url: "https://www.vivino.com/search/wines?q=Solaia" }
                        ]
                    },
                    {
                        name: "Biondi-Santi",
                        description: "The inventor of Brunello di Montalcino. Traditional, austere, and requiring decades to soften and reveal its profound complexity.",
                        wines: [
                            { name: "Brunello di Montalcino Riserva", url: "https://www.vivino.com/search/wines?q=Biondi+Santi+Brunello+Riserva" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-122.5, 38.2],
                    [-122.2, 38.2],
                    [-122.3, 38.6],
                    [-122.6, 38.6],
                    [-122.5, 38.2]
                ]]
            },
            properties: {
                id: "napa",
                name: "Napa Valley",
                country: "USA",
                history: "George Yount planted the first vines in 1839. The 1976 'Judgment of Paris', where Napa Cabernet defeated top Bordeaux in a blind tasting, catapulted the region to global superstardom.",
                geography: "A 30-mile long valley flanked by the Mayacamas and Vaca mountains. The San Pablo Bay funnels fog and cool breezes northwards, creating a distinct temperature gradient (cooler in south Carneros, baking hot in northern Calistoga).",
                terroir: "Insanely diverse. Over 100 soil variations (half of the world's soil orders). Valley floor produces lush, plush wines, while mountain fruit (Howell Mountain, Mount Veeder) produces concentrated, high-tannin, inky wines.",
                grapes: "🍷 **Cabernet Sauvignon**: The undisputed king. Huge body, high tannin, moderate acid. Black cherry, cassis, vanilla, mocha (from heavy new French oak). \n\n🥂 **Chardonnay**: Full-bodied, malolactic-heavy, buttery, and oaky, though modern styles are leaning leaner.",
                estates: [
                    {
                        name: "Screaming Eagle",
                        description: "The ultimate California 'Cult Wine'. Minuscule production, insanely long waitlists, and perfectionist winemaking lead to the highest prices in America.",
                        wines: [
                            { name: "Cabernet Sauvignon", url: "https://www.vivino.com/search/wines?q=Screaming+Eagle+Cabernet" }
                        ]
                    },
                    {
                        name: "Opus One",
                        description: "A historic joint venture between Robert Mondavi and Baron Philippe de Rothschild. A Bordeaux-style blend with a distinctly Californian soul.",
                        wines: [
                            { name: "Opus One", url: "https://www.vivino.com/search/wines?q=Opus+One" }
                        ]
                    },
                    {
                        name: "Harlan Estate",
                        description: "Nestled in the western hills of Oakville, producing dense, opulent, and massively structured Cabernet blends.",
                        wines: [
                            { name: "Harlan Estate", url: "https://www.vivino.com/search/wines?q=Harlan+Estate" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [7.7, 44.5],
                    [8.1, 44.5],
                    [8.2, 44.8],
                    [7.8, 44.8],
                    [7.7, 44.5]
                ]]
            },
            properties: {
                id: "piedmont",
                name: "Piedmont (Piemonte)",
                country: "Italy",
                history: "Meaning 'Foot of the Mountain'. Long independent and heavily influenced by French border culture. Reached peak prestige in the 1980s via the 'Barolo Boys' who introduced modern, cleaner winemaking.",
                geography: "Surrounded on three sides by the Alps. The Po River creates morning autumn fogs (nebbia) that help ripen the late-harvesting grapes. The Langhe hills are steep and highly sun-exposed.",
                terroir: "Calcareous marl and sandstone. Tortonian soils (La Morra) yield perfumed, softer Nebbiolo, while Helvetian/Serravallian soils (Serralunga) produce immensely structured, tannic, long-lived wines.",
                grapes: "🍷 **Nebbiolo**: The king. Paradoxically light color but extremely high acid and high, gripping tannins. Tar, roses, cherry, licorice, and truffle. Requires years to soften.\n\n🍷 **Barbera**: High acid, low tannin. Juicy dark cherry and plum. The daily drinking wine of the Piedmontese.\n\n🥂 **Moscato**: Made in Asti. Sweet, low-alcohol, frothy, intense grapey/peach aromas.",
                estates: [
                    {
                        name: "Gaja",
                        description: "Angelo Gaja is the visionary who modernized Barolo and Barbaresco, introducing green harvesting, French barriques, and international varieties. Prices match premier cru Bordeaux.",
                        wines: [
                            { name: "Barbaresco", url: "https://www.vivino.com/search/wines?q=Gaja+Barbaresco" },
                            { name: "Sperss", url: "https://www.vivino.com/search/wines?q=Gaja+Sperss" }
                        ]
                    },
                    {
                        name: "Giacomo Conterno",
                        description: "The absolute pinnacle of traditional Barolo. Monumental, unyielding when young, resting for years in giant botti (large oak casks).",
                        wines: [
                            { name: "Monfortino Barolo Riserva", url: "https://www.vivino.com/search/wines?q=Giacomo+Conterno+Monfortino" }
                        ]
                    },
                    {
                        name: "Bruno Giacosa",
                        description: "A legendary palate who would completely declassify a vintage if it didn't meet his exacting standards. Famous for 'Red Label' Riservas.",
                        wines: [
                            { name: "Barolo Falletto", url: "https://www.vivino.com/search/wines?q=Bruno+Giacosa+Barolo+Falletto" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-2.8, 42.2],
                    [-2.0, 42.2],
                    [-2.0, 42.6],
                    [-2.9, 42.6],
                    [-2.8, 42.2]
                ]]
            },
            properties: {
                id: "rioja",
                name: "Rioja",
                country: "Spain",
                history: "A centuries-old region that modernized rapidly in the 19th century when phylloxera devastated Bordeaux. French winemakers crossed the Pyrenees, bringing oak barrels (barricas) and modern techniques.",
                geography: "Located in northern Spain along the Ebro River. Protected from harsh Atlantic weather by the Cantabrian Mountains. Divided into Rioja Alta (cooler), Alavesa (highest), and Oriental (hottest/driest).",
                terroir: "Rioja Alta & Alavesa feature chalky-clay and limestone, producing acidic, age-worthy Tempranillo. Oriental features alluvial silt and ferrous clay, ideal for blending component Garnacha.",
                grapes: "🍷 **Tempranillo**: Medium+ acid, medium+ tannin. Strawberry, red cherry, plum. The hallmark of Rioja is its affinity for American oak, absorbing massive notes of coconut, vanilla, and sweet spice.\n\n🍷 **Garnacha**: Adds body, alcohol, and strawberry jam notes.",
                estates: [
                    {
                        name: "La Rioja Alta, S.A.",
                        description: "The standard-bearer for traditional Rioja. Their wines spend years in used American oak and are only released when perfectly mature.",
                        wines: [
                            { name: "Gran Reserva 890", url: "https://www.vivino.com/search/wines?q=La+Rioja+Alta+Gran+Reserva+890" }
                        ]
                    },
                    {
                        name: "Marqués de Murrieta",
                        description: "The oldest estate in Rioja. Their Ygay estate produces wines of immense power combined with classical elegance.",
                        wines: [
                            { name: "Castillo Ygay Gran Reserva Especial", url: "https://www.vivino.com/search/wines?q=Castillo+Ygay+Gran+Reserva" }
                        ]
                    },
                    {
                        name: "R. López de Heredia",
                        description: "A monument to uncompromising tradition in Haro. They still make their own barrels and age wines (like the famous Viña Tondonia) far longer than law dictates.",
                        wines: [
                            { name: "Viña Tondonia Reserva", url: "https://www.vivino.com/search/wines?q=Vina+Tondonia+Reserva" }
                        ]
                    }
                ]
            }
        },
        // ---- NEW EPIC DATA EXPANSIONS (Rhone, Mosel, Marlborough, Stellenbosch) ----
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [4.7, 43.9],
                    [5.1, 43.9],
                    [4.9, 45.3],
                    [4.6, 45.3],
                    [4.7, 43.9]
                ]]
            },
            properties: {
                id: "rhone-valley",
                name: "Rhône Valley",
                country: "France",
                history: "Winemaking predates the Romans, established by the Greeks. In the 14th century, the papacy relocated to Avignon, heavily championing the region (hence 'Châteauneuf-du-Pape' - the Pope's new castle).",
                geography: "Follows the Rhône river. Divided starkly into Northern Rhône (steep, narrow, continental climate, granite terraces) and Southern Rhône (broad plains, Mediterranean, pummeled by the fierce Mistral wind).",
                terroir: "North: Sheer granite slopes that must be worked by hand, reflecting sun onto the Syrah vines. South: Famous for 'Galets Roulés' (large smooth stones) that store daytime heat and warm vines at night.",
                grapes: "🍷 **Syrah** (North): The ONLY red grape allowed in the North. High tannin/acid. Blackberry, black pepper, smoked meat, bacon fat, and olive tapenade.\n\n🍷 **Grenache, Syrah, Mourvèdre (GSM)** (South): Blends dominate. Grenache gives high alcohol and red fruit; Syrah adds color/spice; Mourvèdre brings dark tannin and gamey depth.\n\n🥂 **Viognier**: Found in Condrieu. Low acid, high alcohol, wildly aromatic (apricot, peach, honeysuckle).",
                estates: [
                    {
                        name: "E. Guigal",
                        description: "The absolute master of the Northern Rhône, famous for their legendary single-vineyard 'La La's' (La Mouline, La Landonne, La Turque) in Côte-Rôtie.",
                        wines: [
                            { name: "Côte-Rôtie La Mouline", url: "https://www.vivino.com/search/wines?q=Guigal+La+Mouline" }
                        ]
                    },
                    {
                        name: "Château de Beaucastel",
                        description: "A legendary Southern Rhône producer. Uniquely, they still use all 13 permitted grape varieties in their Châteauneuf-du-Pape, leaning heavily on Mourvèdre.",
                        wines: [
                            { name: "Châteauneuf-du-Pape", url: "https://www.vivino.com/search/wines?q=Beaucastel+Chateauneuf+du+Pape" },
                            { name: "Hommage à Jacques Perrin", url: "https://www.vivino.com/search/wines?q=Hommage+a+Jacques+Perrin" }
                        ]
                    },
                    {
                        name: "Jean-Louis Chave",
                        description: "A family making wine in Hermitage since 1481. Their Hermitage is the benchmark for the appellation, built on masterful blending of different hill plots.",
                        wines: [
                            { name: "Hermitage", url: "https://www.vivino.com/search/wines?q=Jean+Louis+Chave+Hermitage" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [6.8, 49.7],
                    [7.2, 49.7],
                    [7.4, 50.3],
                    [7.0, 50.3],
                    [6.8, 49.7]
                ]]
            },
            properties: {
                id: "mosel",
                name: "Mosel",
                country: "Germany",
                history: "Planted by the ancient Romans who used the river to ship wines. Historically, these incredibly long-lived, sweet Rieslings commanded higher prices than First Growth Bordeaux.",
                geography: "A serpentine gorge cut by the Mosel River. This is one of the most northerly and coolest wine regions in the world. Vineyards cling to impossibly steep slopes (up to 70° gradients) facing south.",
                terroir: "Blue and red Devonian slate. The slate absorbs the weak northern sun during the day and radiates it at night. It also provides razor-sharp minerality and impeccable drainage.",
                grapes: "🥂 **Riesling**: The undisputed monarch. Screamingly high acidity balanced by varying levels of residual sugar (Kabinett to Trockenbeerenauslese). Aromas of green apple, jasmine, lime blossom, and, with age, a distinct struck-match or 'petrol' (TDN) quality. Incredibly low alcohol (often 7-9%).",
                estates: [
                    {
                        name: "Egon Müller",
                        description: "The king of the Scharzhofberg vineyard. Produces the most expensive, ethereal, and magical sweet Rieslings on earth.",
                        wines: [
                            { name: "Scharzhofberger Riesling Auslese", url: "https://www.vivino.com/search/wines?q=Egon+Muller+Scharzhofberger+Auslese" }
                        ]
                    },
                    {
                        name: "Joh. Jos. Prüm",
                        description: "Legendary for age-worthy, brilliantly precise wines from the Wehlener Sonnenuhr (Sundial) vineyard. Known for a slight reductive 'struck match' note when young.",
                        wines: [
                            { name: "Wehlener Sonnenuhr Spätlese", url: "https://www.vivino.com/search/wines?q=JJ+Prum+Wehlener+Sonnenuhr" }
                        ]
                    },
                    {
                        name: "Markus Molitor",
                        description: "A modern star producing massive ranges of wines (differentiated by capsule color: white for dry, green for off-dry, gold for sweet) achieving numerous 100-point scores.",
                        wines: [
                            { name: "Zeltinger Sonnenuhr Auslese", url: "https://www.vivino.com/search/wines?q=Markus+Molitor+Zeltinger+Sonnenuhr" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [173.5, -41.7],
                    [174.2, -41.7],
                    [174.4, -41.4],
                    [173.8, -41.4],
                    [173.5, -41.7]
                ]]
            },
            properties: {
                id: "marlborough",
                name: "Marlborough",
                country: "New Zealand",
                history: "A very young region. First commercial vines (Montana/Brancott) were planted in 1973. In the 1980s, Cloudy Bay put Marlborough Sauvignon Blanc onto the world stage, creating a global phenomenon.",
                geography: "Located at the northeastern tip of the South Island. Protected from torrential westerly rains by the Southern Alps. High sunshine hours and cool, coastal nights (huge diurnal shift).",
                terroir: "Wairau Valley has old riverbed soils (free-draining, stony gravels) producing pungent, tropical wines. Awatere Valley is cooler, windier, and drier, producing herbaceous, tomato-leaf, jalapeño-driven styles.",
                grapes: "🥂 **Sauvignon Blanc**: High acid, medium body. Instantly recognizable intensely aromatic profile. Passionfruit, gooseberry, grapefruit, jalapeño, and fresh-cut grass. Usually completely unoaked.\n\n🍷 **Pinot Noir**: Becoming highly respected. Brighter, fruitier (raspberry, red cherry) and fleshier than Burgundy, with subtle baking spice.",
                estates: [
                    {
                        name: "Cloudy Bay",
                        description: "The estate that defined the style and shocked the world in the 1980s. Now owned by LVMH, it remains the gold standard for premium Marlborough Sauv Blanc.",
                        wines: [
                            { name: "Sauvignon Blanc", url: "https://www.vivino.com/search/wines?q=Cloudy+Bay+Sauvignon+Blanc" },
                            { name: "Te Koko", url: "https://www.vivino.com/search/wines?q=Cloudy+Bay+Te+Koko" }
                        ]
                    },
                    {
                        name: "Dog Point Vineyard",
                        description: "Founded by the former viticulturist and winemaker of Cloudy Bay. They focus on organic farming and complex, sometimes struck-match (wild ferment) styles.",
                        wines: [
                            { name: "Section 94 Sauvignon Blanc", url: "https://www.vivino.com/search/wines?q=Dog+Point+Section+94" }
                        ]
                    },
                    {
                        name: "Greywacke",
                        description: "Kevin Judd (Cloudy Bay's founding winemaker) created this label. Their 'Wild Sauvignon' is barrel-aged and offers immense textural depth beyond pure fruit.",
                        wines: [
                            { name: "Wild Sauvignon", url: "https://www.vivino.com/search/wines?q=Greywacke+Wild+Sauvignon" }
                        ]
                    }
                ]
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [18.8, -34.0],
                    [19.0, -34.0],
                    [18.9, -33.8],
                    [18.7, -33.8],
                    [18.8, -34.0]
                ]]
            },
            properties: {
                id: "stellenbosch",
                name: "Stellenbosch",
                country: "South Africa",
                history: "The second-oldest settlement in South Africa, dating to 1679. Boasts the longest viticultural history in the 'New World'. After apartheid ended in the 90s, heavy investment modernized their cellars.",
                geography: "Just east of Cape Town. Enjoy a warm Mediterranean climate. Crucially cooled by the 'Cape Doctor'—a fierce south-easterly summer wind that lowers temperatures and prevents fungal disease.",
                terroir: "Encircled by dramatic mountains (Simonsberg, Helderberg). Contains very ancient, weathered, granite and sandstone soils, adding significant savory, earthly complexity to the wines.",
                grapes: "🍷 **Cabernet Sauvignon**: The most planted and prestigious. Tends to straddle the line between the herbal, graphite structure of Bordeaux and the ripe black-fruit of Napa.\n\n🍷 **Pinotage**: South Africa's signature cross (Pinot Noir x Cinsault). Dark, tannic, with notes of blackberry, rooibos tea, and smoky/meaty character.\n\n🥂 **Chenin Blanc** (Steen): World-class. From crisp/dry to rich/barrel-aged. Bruised apple, honey, and wet wool.",
                estates: [
                    {
                        name: "Kanonkop",
                        description: "The absolute masters of Pinotage and classic Bordeaux blends. Traditional, unyielding commitment to quality, often called the 'First Growth' of the Cape.",
                        wines: [
                            { name: "Paul Sauer", url: "https://www.vivino.com/search/wines?q=Kanonkop+Paul+Sauer" },
                            { name: "Black Label Pinotage", url: "https://www.vivino.com/search/wines?q=Kanonkop+Black+Label+Pinotage" }
                        ]
                    },
                    {
                        name: "Meerlust",
                        description: "An historic 17th-century estate. Their flagship 'Rubicon' was one of the first Bordeaux-style blends in South Africa.",
                        wines: [
                            { name: "Rubicon", url: "https://www.vivino.com/search/wines?q=Meerlust+Rubicon" }
                        ]
                    },
                    {
                        name: "Sadie Family",
                        description: "Based slightly north in Swartland, but the most important modern winemaker in SA (Eben Sadie). Old vine, dry-farmed expressions that are universally acclaimed.",
                        wines: [
                            { name: "Columella", url: "https://www.vivino.com/search/wines?q=Sadie+Family+Columella" },
                            { name: "Palladius", url: "https://www.vivino.com/search/wines?q=Sadie+Family+Palladius" }
                        ]
                    }
                ]
            }
        }
    ]
};
