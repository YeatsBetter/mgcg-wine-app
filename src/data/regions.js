export const wineRegionsData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-0.5, 44.8] }, // Bordeaux center
            properties: {
                id: "bordeaux", name: "Bordeaux", country: "France",
                history: "Wine was introduced to the Bordeaux region by the Romans, probably in the mid-1st century. The marriage of Eleanor of Aquitaine to Henry Plantagenet in 1152 opened the English market.",
                geography: "Located in southwest France near the Atlantic coast. The Gironde estuary and its two rivers (Garonne, Dordogne) define the 'Left Bank' vs 'Right Bank'. Warm maritime climate.",
                terroir: "Left Bank: Deep gravel soils over limestone bedrock, excellent drainage. Right Bank: Clay, limestone, and sand, cooler and moister.",
                grapes: [
                    {
                        name: "Cabernet Sauvignon",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Dominates the Left Bank. High acid, high tannin. Notes of blackcurrant, cedar, tobacco, and graphite. Needs decades to soften."
                    },
                    {
                        name: "Merlot",
                        image: "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Dominates the Right Bank (Pomerol, St. Émilion). Medium acid, medium tannin. Lush plum, chocolate, and velvety texture."
                    }
                ],
                estates: [
                    { name: "Château Lafite Rothschild", description: "First Growth. Known for elegance, perfumed aromatics, and extreme longevity.", wines: [{ name: "Château Lafite Rothschild", url: "https://www.vivino.com/search/wines?q=Chateau+Lafite+Rothschild" }] },
                    { name: "Château Petrus", description: "The most famous wine from Pomerol. A near-pure expression of Merlot on blue clay.", wines: [{ name: "Petrus", url: "https://www.vivino.com/search/wines?q=Petrus+Pomerol" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [4.8, 47.0] }, // Burgundy center
            properties: {
                id: "burgundy", name: "Burgundy (Bourgogne)", country: "France",
                history: "Monasteries (Benedictines/Cistercians) established the vineyards in the Middle Ages, founding the concept of 'climats' and terroir.",
                geography: "Continental climate with cold winters and unpredictable weather. Divided into Chablis, Côte d'Or, Côte Chalonnaise, and Mâconnais.",
                terroir: "Jurassic limestone and marl. Variations over mere meters dictate whether a vine yields a generic Bourgogne or Grand Cru.",
                grapes: [
                    {
                        name: "Pinot Noir",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "The Holy Grail of red grapes. Low-medium tannin, high acidity. Strawberry and pure cherry turning into forest floor (sous-bois) and game with age."
                    },
                    {
                        name: "Chardonnay",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Originates here. Offers steely, high-acid lemon in Chablis to complex, buttery hazelnut in Montrachet."
                    }
                ],
                estates: [
                    { name: "Domaine de la Romanée-Conti (DRC)", description: "The most prestigious and expensive wine estate in the world.", wines: [{ name: "Romanée-Conti Grand Cru", url: "https://www.vivino.com/search/wines?q=Romanee+Conti" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [11.3, 43.4] }, // Tuscany center
            properties: {
                id: "tuscany", name: "Tuscany", country: "Italy",
                history: "Winemaking dates back to the Etruscans (8th century BC). The 'Super Tuscan' revolution in the 1970s broke DOC rules to use French grapes.",
                geography: "Hilly terrain providing altitude and diurnal shifts. Mediterranean climate by the coast transitioning to warmer continental inland.",
                terroir: "Galestro (clay-schist) and Alberese (limestone) are prized in Chianti Classico. Sandy clay is favored in Montalcino.",
                grapes: [
                    {
                        name: "Sangiovese",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Italy's most planted grape. High acidity, high tannin. Sour cherry, dried herbs, sun-baked clay, and balsamic notes."
                    },
                    {
                        name: "Super Tuscan Blends",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Cabernet, Merlot, and Syrah grown on the coastal Maremma areas yielding opulent, modern, heavily oaked wines."
                    }
                ],
                estates: [
                    { name: "Tenuta San Guido", description: "Birthplace of the Super Tuscan. Flagship wine 'Sassicaia'.", wines: [{ name: "Sassicaia", url: "https://www.vivino.com/search/wines?q=Sassicaia" }] },
                    { name: "Biondi-Santi", description: "Inventor of Brunello di Montalcino. Traditional and long-lived.", wines: [{ name: "Brunello di Montalcino Riserva", url: "https://www.vivino.com/search/wines?q=Biondi+Santi" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-122.3, 38.4] }, // Napa
            properties: {
                id: "napa", name: "Napa Valley", country: "USA",
                history: "The 1976 'Judgment of Paris', where Napa Cabernet defeated top Bordeaux in a blind tasting, catapulted the region to global superstardom.",
                geography: "A 30-mile valley. San Pablo Bay funnels fog and cool breezes northwards (cooler in south Carneros, hotter in Calistoga).",
                terroir: "Over 100 soil variations. Valley floor gives lush wines; mountains (Howell, Veeder) give concentrated, high-tannin wines.",
                grapes: [
                    {
                        name: "Cabernet Sauvignon",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Huge body, high tannin, high alcohol. Ripe black cherry, cassis, vanilla, and mocha due to heavy new oak."
                    },
                    {
                        name: "Chardonnay",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Full-bodied, malolactic-heavy (buttery), with prominent toasted oak and ripe tropical fruit."
                    }
                ],
                estates: [
                    { name: "Screaming Eagle", description: "The ultimate California 'Cult Wine'.", wines: [{ name: "Cabernet Sauvignon", url: "https://www.vivino.com/search/wines?q=Screaming+Eagle" }] },
                    { name: "Opus One", description: "Historic joint venture between Mondavi and Rothschild.", wines: [{ name: "Opus One", url: "https://www.vivino.com/search/wines?q=Opus+One" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [8.0, 44.6] }, // Piedmont
            properties: {
                id: "piedmont", name: "Piedmont (Piemonte)", country: "Italy",
                history: "Reached peak prestige in the 1980s via the 'Barolo Boys' who introduced modern winemaking.",
                geography: "Surrounded by the Alps. The Po River creates morning autumn fogs (nebbia) that ripen late-harvesting grapes.",
                terroir: "Calcareous marl and sandstone. Yields everything from perfumed softer wines (La Morra) to immensely structured ones (Serralunga).",
                grapes: [
                    {
                        name: "Nebbiolo",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Paradoxically light orange-brick color but extremely brutal acid and tannins in youth. Notes of tar, dried roses, cherry, and truffle."
                    },
                    {
                        name: "Barbera",
                        image: "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "The everyday wine of Piedmont. High acid, low tannin. Juicy dark cherry and plum."
                    }
                ],
                estates: [
                    { name: "Gaja", description: "Visionary who modernized Barbaresco and Barolo.", wines: [{ name: "Barbaresco", url: "https://www.vivino.com/search/wines?q=Gaja+Barbaresco" }] },
                    { name: "Giacomo Conterno", description: "The absolute pinnacle of traditional Barolo.", wines: [{ name: "Monfortino Barolo Riserva", url: "https://www.vivino.com/search/wines?q=Conterno+Monfortino" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-2.5, 42.4] }, // Rioja
            properties: {
                id: "rioja", name: "Rioja", country: "Spain",
                history: "Modernized rapidly in the 19th century when phylloxera devastated Bordeaux, bringing French winemakers across the Pyrenees.",
                geography: "Located along the Ebro River. Protected from harsh Atlantic weather by the Cantabrian Mountains.",
                terroir: "Chalky-clay and limestone (Alta/Alavesa) produce acidic, age-worthy wines. Ferrous clay and silt (Oriental) favor Garnacha.",
                grapes: [
                    {
                        name: "Tempranillo",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Medium+ acid, medium+ tannin. Baked strawberry and plum. Has a huge affinity for American oak, soaking up dill, coconut, and vanilla notes."
                    }
                ],
                estates: [
                    { name: "La Rioja Alta, S.A.", description: "Standard-bearer for traditional Rioja. Long American oak aging.", wines: [{ name: "Gran Reserva 890", url: "https://www.vivino.com/search/wines?q=La+Rioja+Alta+890" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [4.9, 44.5] }, // Rhone
            properties: {
                id: "rhone", name: "Rhône Valley", country: "France",
                history: "Winemaking established by Greeks. Hand-terraced in the North; propelled in the South by the 14th century Avignon Papacy.",
                geography: "Follows the Rhône river. Starkly divided: North is narrow and continental, South is broad and Mediterranean with Mistral winds.",
                terroir: "North: Sheer granite slopes reflecting sun. South: 'Galets Roulés' (smooth stones) that store daytime heat.",
                grapes: [
                    {
                        name: "Syrah (North)",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "High tannin/acid. Intense blackberry, cracked black pepper, smoked meat, and olive."
                    },
                    {
                        name: "GSM Blend (South)",
                        image: "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Grenache, Syrah, Mourvèdre. High alcohol, low acid. Baked red fruit jam, sweet spice, and garrigue (wild scrubland herbs)."
                    }
                ],
                estates: [
                    { name: "E. Guigal", description: "Master of the Northern Rhône, famous for their 'La La's' in Côte-Rôtie.", wines: [{ name: "Côte-Rôtie 'La Mouline'", url: "https://www.vivino.com/search/wines?q=Guigal+La+Mouline" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [7.0, 50.0] }, // Mosel
            properties: {
                id: "mosel", name: "Mosel", country: "Germany",
                history: "Planted by ancient Romans. Historically commanded higher prices than First Growth Bordeaux.",
                geography: "Serpentine gorge cut by the Mosel River. Incredibly steep slopes (70° gradients) facing south.",
                terroir: "Blue and red Devonian slate absorbs weak northern sun and provides razor-sharp minerality.",
                grapes: [
                    {
                        name: "Riesling",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "High acidity balanced by residual sugar. Notes of green apple, lime blossom, white peach, and distinctive 'petrol' (TDN) with bottle age. Very low alcohol."
                    }
                ],
                estates: [
                    { name: "Joh. Jos. Prüm", description: "Legendary for age-worthy, brilliantly precise sweet wines.", wines: [{ name: "Wehlener Sonnenuhr Spätlese", url: "https://www.vivino.com/search/wines?q=JJ+Prum+Wehlener" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [173.8, -41.5] }, // Marlborough
            properties: {
                id: "marlborough", name: "Marlborough", country: "New Zealand",
                history: "First commercial vines planted in 1973. Exploded onto the world stage in the 1980s via Cloudy Bay.",
                geography: "Northeastern tip of the South Island. High sunshine and huge diurnal shifts from cool coastal nights.",
                terroir: "Old riverbed soils (Wairau) produce tropical wines; cooler windier valleys (Awatere) produce herbaceous styles.",
                grapes: [
                    {
                        name: "Sauvignon Blanc",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Intensely, violently aromatic. Piercing notes of passionfruit, gooseberry, jalapeño, and fresh-cut grass."
                    }
                ],
                estates: [
                    { name: "Cloudy Bay", description: "The estate that defined the style in the 80s.", wines: [{ name: "Sauvignon Blanc", url: "https://www.vivino.com/search/wines?q=Cloudy+Bay+Sauvignon+Blanc" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [18.8, -33.9] }, // Stellenbosch
            properties: {
                id: "stellenbosch", name: "Stellenbosch", country: "South Africa",
                history: "Longest viticultural history in the 'New World' dating to 1679. Modernized heavily post-apartheid.",
                geography: "Warm Mediterranean climate cooled by the 'Cape Doctor' south-easterly summer wind.",
                terroir: "Ancient weathered granite and sandstone soils encircled by dramatic mountains.",
                grapes: [
                    {
                        name: "Pinotage",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "South Africa's signature cross (Pinot Noir x Cinsault). High tannin. Smoky, rooibos tea, blackberry, and sometimes roasted meat."
                    },
                    {
                        name: "Chenin Blanc",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Known locally as Steen. High acid. Notes of bruised apple, wet wool, honey, and chamomile."
                    }
                ],
                estates: [
                    { name: "Kanonkop", description: "Masters of Pinotage and Bordeaux blends. The 'First Growth' of the Cape.", wines: [{ name: "Paul Sauer", url: "https://www.vivino.com/search/wines?q=Kanonkop+Paul+Sauer" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [4.0, 49.1] }, // Champagne
            properties: {
                id: "champagne", name: "Champagne", country: "France",
                history: "Perfected the 'Méthode Champenoise' (second fermentation in bottle) over centuries. Dom Pérignon, a monk, contributed greatly to blending and cork usage.",
                geography: "Northernmost limit of commercial winemaking in France. Extremely cold climate forcing high acidity.",
                terroir: "Thick beds of Belemnite chalk reflecting heat to the vines and holding moisture in dry summers.",
                grapes: [
                    {
                        name: "Pinot Noir / Meunier / Chardonnay",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Harvested early for maximum searing acidity. Autolytic notes (brioche, toast, biscuit) from dead yeast (lees) aging define the profile, alongside bruised apple and lemon."
                    }
                ],
                estates: [
                    { name: "Dom Pérignon", description: "Moët & Chandon's prestige cuvée. Only produced in exceptional vintage years.", wines: [{ name: "Dom Pérignon Vintage", url: "https://www.vivino.com/search/wines?q=Dom+Perignon" }] },
                    { name: "Krug", description: "The ultimate expression of blended, barrel-fermented Champagne.", wines: [{ name: "Grande Cuvée", url: "https://www.vivino.com/search/wines?q=Krug+Grande+Cuvee" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [10.9, 45.4] }, // Veneto
            properties: {
                id: "veneto", name: "Veneto", country: "Italy",
                history: "A diverse powerhouse producing more wine than any other Italian region. Ancient roman 'Retico' wines were early ancestors of Amarone.",
                geography: "Stretches from Lake Garda in the west, across alpine foothills, to Venice in the east.",
                terroir: "Glacial moraines near Lake Garda, volcanic basalt in Soave/Valpolicella, and alluvial plains.",
                grapes: [
                    {
                        name: "Corvina (Amarone)",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Base of Valpolicella. Dried on mats for months (Appassimento) to yield massive 15%+ alcohol, dark chocolate, and raisin flavors."
                    },
                    {
                        name: "Glera",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Base of Prosecco. Made via tank (Charmat) method for light, frothy, fruity, and floral bubbles."
                    }
                ],
                estates: [
                    { name: "Quintarelli", description: "The mythical master of artisan Amarone.", wines: [{ name: "Amarone della Valpolicella Classico", url: "https://www.vivino.com/search/wines?q=Quintarelli+Amarone" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-68.8, -33.4] }, // Mendoza
            properties: {
                id: "mendoza", name: "Mendoza", country: "Argentina",
                history: "Spanish settlers brought vines in the 1500s. The French grape Malbec found its true spiritual home here in the 1850s before phylloxera hit Europe.",
                geography: "A high-altitude desert sitting in the rain shadow of the Andes Mountains. Vineyards extend from 2,000 to over 5,000 feet in altitude (Uco Valley).",
                terroir: "Alluvial sand, clay, and rock irrigated by Andean snowmelt. High altitude ensures brilliant UV radiation and cold nights maintaining acidity.",
                grapes: [
                    {
                        name: "Malbec",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Deep opaque purple, full-bodied. Blackberry, plum, cocoa, and violet florals. Velvet, soft tannins compared to Cabernet."
                    }
                ],
                estates: [
                    { name: "Catena Zapata", description: "Pioneers of extreme high-altitude Malbec planting.", wines: [{ name: "Adrianna Vineyard Malbec", url: "https://www.vivino.com/search/wines?q=Catena+Zapata+Adrianna" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-7.5, 41.2] }, // Douro
            properties: {
                id: "douro", name: "Douro Valley", country: "Portugal",
                history: "The world's oldest demarcated and regulated wine region (1756). Created the global Port wine industry driven by British merchants.",
                geography: "Steep, serpentine river valley winding through harsh, remote mountains in northern Portugal.",
                terroir: "Solid schist rock. Vine roots must shatter deep into the schist to find water during blistering 40°C summers.",
                grapes: [
                    {
                        name: "Touriga Nacional & Franca",
                        image: "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Used for unctuous, fortified Port (sweet, high alcohol, black fruit, chocolate) and concentrated dark dry table wines."
                    }
                ],
                estates: [
                    { name: "Quinta do Noval", description: "Famous for 'Nacional', a vintage Port made from ungrafted, pre-phylloxera vines.", wines: [{ name: "Vintage Port Nacional", url: "https://www.vivino.com/search/wines?q=Quinta+do+Noval+Nacional" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-123.1, 45.1] }, // Willamette
            properties: {
                id: "willamette", name: "Willamette Valley", country: "USA",
                history: "Pioneered in the 1960s by UC Davis graduates searching for the perfect cool-climate substitute to Burgundy. Now a global Pinot Noir epicenter.",
                geography: "A 150-mile long valley in Oregon shielded from the Pacific Ocean by the Coast Range. Cool, wet winters and dry, warm summers.",
                terroir: "Marine sedimentary (Willakenzie) soils vs volcanic basalt (Jory) dictate whether the wine is dark and structured, or red fruit and elegant.",
                grapes: [
                    {
                        name: "Pinot Noir",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Straddles Old World earthiness and New World fruit. Cranberry, bright cherry, damp earth, and tea leaf with high acidity."
                    }
                ],
                estates: [
                    { name: "Domaine Serene", description: "Massively critical acclaim, helping prove Oregon can rival Grand Cru Burgundy.", wines: [{ name: "Evenstad Reserve Pinot Noir", url: "https://www.vivino.com/search/wines?q=Domaine+Serene+Evenstad" }] },
                    { name: "Ken Wright Cellars", description: "Pioneer in mapping the distinct terroir and AVAs of the valley.", wines: [{ name: "Shea Vineyard Pinot Noir", url: "https://www.vivino.com/search/wines?q=Ken+Wright+Shea" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-70.5, -33.6] }, // Maipo
            properties: {
                id: "maipo", name: "Maipo Valley", country: "Chile",
                history: "Often called the 'Bordeaux of South America'. Pre-phylloxera Bordeaux vines were brought here in the mid-19th century by wealthy landowners.",
                geography: "Located just south of Santiago. Enclosed by the Andes on the east and the Coastal Range on the west.",
                terroir: "Alluvial gravel from the Andes provides perfect drainage for Cabernet Sauvignon. Cool air descending from the mountains provides needed diurnal shifts.",
                grapes: [
                    {
                        name: "Cabernet Sauvignon",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Distinctively minty and eucalyptus-tinged, with a core of bright, elegant black fruit."
                    },
                    {
                        name: "Carménère",
                        image: "https://images.unsplash.com/photo-1534310442539-f46374d3fc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Chile's signature. Mistaken for Merlot for 100 years. Exhibits intense green bell pepper (pyrazines), cocoa, and red berry."
                    }
                ],
                estates: [
                    { name: "Concha y Toro", description: "Their 'Don Melchor' defined high-end Chilean Cabernet worldwide.", wines: [{ name: "Don Melchor Cabernet Sauvignon", url: "https://www.vivino.com/search/wines?q=Don+Melchor" }] },
                    { name: "Almaviva", description: "Another joint venture of Baron Philippe de Rothschild, this time in Chile.", wines: [{ name: "Almaviva", url: "https://www.vivino.com/search/wines?q=Almaviva+Chile" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [139.0, -34.4] }, // Barossa
            properties: {
                id: "barossa", name: "Barossa Valley", country: "Australia",
                history: "Settled by Silesian (German) immigrants in 1842. Home to the world's oldest continuously producing Shiraz vines.",
                geography: "A warm, low-lying continental valley about 60km northeast of Adelaide in South Australia.",
                terroir: "Red-brown earths and sandy loams. The intense summer heat bakes the fruit, producing concentrated, high-alcohol wines.",
                grapes: [
                    {
                        name: "Shiraz",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Opulent, massive body, high alcohol. Explosions of blackberry jam, dark chocolate, and eucalyptus."
                    }
                ],
                estates: [
                    { name: "Penfolds", description: "Creators of 'Grange', the most famous Australian wine.", wines: [{ name: "Grange", url: "https://www.vivino.com/search/wines?q=Penfolds+Grange" }] },
                    { name: "Henschke", description: "Tends to the legendary 'Hill of Grace' single vineyard.", wines: [{ name: "Hill of Grace", url: "https://www.vivino.com/search/wines?q=Henschke+Hill+of+Grace" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [15.0, 37.7] }, // Sicily
            properties: {
                id: "sicily", name: "Sicily (Mt. Etna)", country: "Italy",
                history: "Wine has been produced here for millennia, but only recently has Mt. Etna exploded in popularity as the 'Burgundy of the Mediterranean'.",
                geography: "Elevated vineyards on the slopes of the active volcano Mount Etna, reaching dizzying heights to escape the Mediterranean heat.",
                terroir: "Pure, black, mineral-rich volcanic ash and pumice. Imparts a profoundly smoky, iron-like minerality to the wines.",
                grapes: [
                    {
                        name: "Nerello Mascalese",
                        image: "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Often compared to Pinot Noir. High acid, fine tannin, pale color. Wild red cherry, rose petal, and volcanic smoke."
                    }
                ],
                estates: [
                    { name: "Tenuta delle Terre Nere", description: "Pioneers of single-vineyard (Contrada) bottling on Etna.", wines: [{ name: "Etna Rosso", url: "https://www.vivino.com/search/wines?q=Terre+Nere+Etna+Rosso" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-4.0, 41.6] }, // Ribera
            properties: {
                id: "ribera", name: "Ribera del Duero", country: "Spain",
                history: "While Vega Sicilia dominated since the 1800s, the DO was only created in 1982. It's now Spain's most prestigious zone for powerful reds.",
                geography: "A high-altitude, flat, central plateau cut by the Duero river. Punishing continental climate: scorching summers and freezing winters.",
                terroir: "Limestone, chalk, and clay. Extreme diurnal shifts (hot days, freezing nights) lock in acidity.",
                grapes: [
                    {
                        name: "Tinto Fino (Tempranillo)",
                        image: "https://images.unsplash.com/photo-1571663716920-9fd87840c9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Unlike Rioja, these are monolithic, inky, massive, black-fruit-driven, and highly concentrated wines typically aged in French oak."
                    }
                ],
                estates: [
                    { name: "Vega Sicilia", description: "The undisputed king of Spanish wine. Their 'Unico' ages for a decade before release.", wines: [{ name: "Unico", url: "https://www.vivino.com/search/wines?q=Vega+Sicilia+Unico" }] },
                    { name: "Dominio de Pingus", description: "The original Spanish 'Cult Wine', created by Peter Sisseck. Minuscule production and vast prices.", wines: [{ name: "Pingus", url: "https://www.vivino.com/search/wines?q=Pingus" }] }
                ]
            }
        },
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [7.4, 48.3] }, // Alsace
            properties: {
                id: "alsace", name: "Alsace", country: "France",
                history: "Has bounced between French and German control for centuries. Uniquely labels by grape variety rather than geographic region.",
                geography: "A completely dry, sun-drenched corridor nestled in the deep rain shadow of the Vosges mountains in eastern France.",
                terroir: "A mosaic of over 13 soil types (granite, limestone, pink sandstone). Incredibly diverse.",
                grapes: [
                    {
                        name: "Gewürztraminer",
                        image: "https://images.unsplash.com/photo-1472352327492-9765783b74e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        description: "Insanely aromatic. Explosions of lychee, rose petal, ginger, and Turkish delight. Full-bodied, oily texture, moderate acid."
                    }
                ],
                estates: [
                    { name: "Trimbach", description: "Produces 'Clos Ste Hune', arguably the greatest dry Riesling on the planet.", wines: [{ name: "Clos Ste Hune Riesling", url: "https://www.vivino.com/search/wines?q=Trimbach+Clos+Ste+Hune" }] },
                    { name: "Zind-Humbrecht", description: "Masters of biodynamics producing incredibly intense, rich, off-dry styles.", wines: [{ name: "Gewurztraminer Hengst Grand Cru", url: "https://www.vivino.com/search/wines?q=Zind+Humbrecht+Hengst" }] }
                ]
            }
        }
    ]
};
