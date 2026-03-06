export const wineRegionsData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-0.5, 44.8] }, // Bordeaux center
            properties: {
                id: "bordeaux", name: "Bordeaux", country: "France",
                history: "Known as the Wall Street of Wine, Bordeaux's prestige was cemented by the legendary 1855 Classification, ordered by Napoleon III. It established a rigid hierarchy of châteaux that still exists today, transforming Bordeaux into the world's most fiercely traded and heavily sought-after fine wine.",
                geography: "Situated in southwest France, the region is defined by the mighty Gironde estuary and its two rivers—the Garonne and Dordogne. The vast pine forests of Landes to the west protect the vines from brutal Atlantic storms, creating a temperate, maritime sanctuary.",
                terroir: "The Left Bank is defined by deep, warm beds of Günzian gravel that force Cabernet Sauvignon roots to dig deep for water. The Right Bank is dominated by cool, water-retaining clay, the perfect incubator for plush, sensual, velvet-textured Merlot.",
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
                history: "Famously described as 'a minefield and a treasure map,' Burgundy was meticulously mapped by Cistercian monks over centuries. They tasted the soil to identify minute differences, inventing the concept of 'climat' and forever linking wine to specific plots of land.",
                geography: "A slender ribbon of land in eastern-central France with an agonizingly marginal, unpredictable continental climate. Frost, terrible hail, and rot constantly threaten the grapes, making great vintages rare miracles of nature.",
                terroir: "A staggering patchwork of Jurassic limestone and marl. A vineyard separated by a mere dirt path can yield drastically different wines—one a humble village wine, the other an ethereal Grand Cru. It is the world's ultimate expression of terroir.",
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
                history: "The soul of Italy, where wine has been made since the Etruscans in the 8th century BC. The region underwent a massive renaissance in the 1970s with the 'Super Tuscan' movement, when rogue winemakers ripped up the rigid DOC laws to blend French grapes.",
                geography: "A breathtaking landscape of rolling hills bathed in brilliant Mediterranean sunlight. Vineyards are planted on slopes to escape the intense heat of the valley floors and catch cooling breezes blowing in from the Tyrrhenian Sea.",
                terroir: "In Chianti Classico, vines struggle in rocky, friable marl called 'galestro' and poor limestone 'alberese', forcing highly concentrated grapes. In Montalcino, warmer, drier microclimates yield monstrously powerful, long-lived wines.",
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
                history: "The New World's most famous address. Napa exploded onto the global stage during the 1976 'Judgment of Paris', when its wines stunned French judges in a blind tasting, defeating top-growth Bordeaux and instantly proving great wine could be made outside Europe.",
                geography: "A narrow 30-mile valley flanked by the Mayacamas and Vaca mountain ranges. The San Pablo Bay acts like a giant air conditioner, sucking freezing fog and wind up the valley every afternoon to cool the sun-baked vines.",
                terroir: "Incredibly diverse, boasting over half the world's soil orders. Deep, alluvial valley floors produce opulent, fleshy wines, while the rocky, volcanic slopes of the mountains yield tiny, thick-skinned berries packed with brooding tannins.",
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
                history: "The Kingdom of Nebbiolo. Barolo was once sweet until a French oenologist helped vinify it dry in the mid-19th century, creating the 'Wine of Kings'. In the 1980s, the rebellious 'Barolo Boys' modernized the entire region.",
                geography: "Nestled spectacularly in the foothills of the snow-capped Alps. The region is famous for the thick, haunting autumn fogs (nebbia) that blanket the valleys, uniquely extending the growing season for the notoriously late-ripening Nebbiolo.",
                terroir: "A complex matrix of calcareous marl and sandstone. The Tortonian soils of La Morra yield highly perfumed wines, while the older Helvetian soils of Serralunga yield fiercely tannic, iron-clad beasts that demand decades in the cellar.",
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
                history: "Spain's flagship region was catapulted into the modern era in the late 19th century when French negociants, fleeing the phylloxera blight in Bordeaux, crossed the Pyrenees. They brought the oak barrica, cementing Rioja's iconic oak-aged style.",
                geography: "Following the winding Ebro River in northern Spain. The towering, majestic Cantabrian Mountains form a massive wall to the north, completely shielding the sun-drenched vineyards from the freezing, violently wet weather of the Atlantic Ocean.",
                terroir: "Divided into three distinct zones. Rioja Alta and Alavesa feature chalky-clay and limestone at high altitudes for elegant wines. Rioja Oriental is hotter, flatter, and dominated by alluvial silt, producing fleshy, alcoholic Garnacha.",
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
                history: "Vines have clung to the brutal steep slopes of the north since Roman times. The region gained global fame when the Papacy moved to Avignon in the 14th century, leading to 'Châteauneuf-du-Pape' (The Pope's New Castle).",
                geography: "A tale of two sharply contrasting regions following the Rhône River. The Northern Rhône is a narrow, brutally steep valley. The Southern Rhône is a broad, flat, Mediterranean expanse routinely battered by the fierce chilling Mistral wind.",
                terroir: "In the North, Syrah vines are anchored to dizzyingly steep terraces of heat-retaining granite. In the South, vineyards are carpeted with 'galets roulés'—large river stones that bake in the day and radiate heat back onto the vines at night.",
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
                history: "Cultivated by ancient Romans trying to supply their northern legions with wine. By the late 19th century, the ethereal, sweet Rieslings of the Mosel were the most expensive and celebrated wines in the world, surpassing First Growth Bordeaux in price.",
                geography: "A dramatic, serpentine gorge cut by the Mosel River. It is home to some of the steepest vineyards on Earth with heart-stopping 70-degree gradients. Vines must be tied to single wooden stakes and worked entirely by hand.",
                terroir: "The secret to ripening grapes in this freezing northern latitude is heat reflection. The steep, south-facing slopes composed of blue, red, and grey Devonian slate shatter underfoot, absorbing weak daytime sun and reflecting it perfectly back onto the vines.",
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
                history: "The region that completely changed how the world thinks about Sauvignon Blanc. The modern industry began in 1973, exploding internationally in the 1980s when wineries like Cloudy Bay released profoundly aromatic wines the likes of which nobody had ever tasted.",
                geography: "Located on the northeastern tip of New Zealand's South Island. Characterized by intense, blinding sunshine, massive cooling coastal winds from the Pacific, and huge diurnal temperature shifts that lock in bracing acidity.",
                terroir: "Free-draining, stony, alluvial soils deposited by ancient glaciers and rivers. The Wairau Valley offers warmer gravel soils for tropical fruit expression, while the cooler, wind-battered Awatere Valley produces pungently herbaceous and mineral-driven styles.",
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
                history: "Boasts the longest continuous viticultural history outside of Europe, dating back to 1679 when Simon van der Stel founded the town. With the end of apartheid in 1994, Stellenbosch exploded with a renaissance of world-class winemaking.",
                geography: "A warm, sun-baked Mediterranean climate nestled into dramatic, imposing mountain ranges just east of Cape Town. During the summer, vineyards are swept by the 'Cape Doctor', a fierce south-easterly wind that blasts away disease and cools the vines.",
                terroir: "Some of the oldest, most weathered soils on the planet, dating back up to a billion years. The vastly decomposed granite and sandstone of the mountain slopes offer exceptional drainage and deep minerality, perfect for powerful, structured reds.",
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
                history: "The quintessential wine of celebration. Though famously credited to the blind monk Dom Pérignon (who actually tried to prevent bubbles), the sparkling 'Méthode Champenoise' was perfected over centuries, eventually becoming the favored drink of French kings and czars.",
                geography: "The absolute northernmost limit of commercial winemaking in France. The climate is devastatingly cold, gloomy, and wet. Grapes struggle intensely to ripen, resulting in the violently high, searing base acidity required for legendary sparkling wine.",
                terroir: "Sitting atop a massive prehistoric seabed of Belemnite chalk. The stark white, crumbly soil provides crucial drainage during wet winters, while holding onto exactly enough moisture to sustain the vines during dry summers. It also heavily reflects sunlight onto the canopy.",
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
                history: "An ancient powerhouse whose winemaking roots completely pre-date the Roman Empire. The grueling process of drying grapes on mats (appassimento) to make Amarone was derived from the highly prized, concentrated, and legendary ancient Roman 'Retico' wines.",
                geography: "Stretches vastly from the frosty, glacial shores of Lake Garda in the west, across the rolling Alpine foothills, all the way to the humid, marshy canals of Venice in the east. It is the single largest wine-producing region in all of Italy.",
                terroir: "Incredibly diverse. The shores of Lake Garda offer glacial moraines; the towering Valpolicella and Soave Classico zones boast black, mineral-rich volcanic basalt and limestone; while the sprawling flat plains yield massive quantities of Prosecco and Pinot Grigio.",
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
                history: "Spanish conquistadores brought the first vines in the 1500s. However, it was the French grape Malbec, brought here in the 1850s immediately before phylloxera wiped it out in Bordeaux, that found its true spiritual home. It transformed Mendoza into a global giant.",
                geography: "A vast, high-altitude desert sitting perfectly in the massive rain shadow of the snow-capped Andes Mountains. Vineyards dramatically extend into the thin, crisp air from 2,000 feet to well over 5,000 feet in altitude (Uco Valley), escaping the blazing heat of the valley floor.",
                terroir: "Thirsty soils of alluvial sand, clay, and river stones, irrigated directly by pristine Andean snowmelt. The extreme altitude ensures brilliant, relentless UV radiation for incredibly thick grape skins, perfectly balanced by freezing nights that lock in the wine's acidity.",
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
                history: "The world's absolute oldest demarcated and regulated wine region, established in 1756. It was carved out strictly by the British to satiate their massive thirst for Port wine. Until recently, the incredibly harsh terrain was entirely devoted to fortified sweet wine.",
                geography: "A staggeringly deep, twisting, serpentine river valley winding through incredibly remote, unforgiving mountains in northern Portugal. The region is famously extreme, suffering from blistering, oven-like 40°C summers and brutally freezing winters.",
                terroir: "Solid, impenetrable schist rock. To survive, vine roots are forced to physically shatter deep into the vertical fissures of the bedrock to seek out trace amounts of water trapped deep underground, resulting in insanely low yields and profound, dark concentration.",
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
                history: "Pioneered in the 1960s by visionary UC Davis graduates who drove north in camper vans, desperately searching for the perfect cool-climate substitute to Burgundy. They were ridiculed at first, but have since turned Oregon into one of the planet's epicenters for world-class Pinot Noir.",
                geography: "A lush, green, 150-mile-long valley perfectly shielded from raging Pacific Ocean storms by the immense Coast Range. Winters are relentlessly cool and wet, while summers are shockingly dry, providing the intensely long, cool growing season Pinot Noir desperately craves.",
                terroir: "A fierce debate between two soils: ancient marine sedimentary soils (Willakenzie) that produce darker, heavily structured, brooding wines with black fruit notes, versus volcanic basalt soils (Jory) that yield bright, incredibly elegant, red-fruit-driven wines.",
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
                history: "Famously referred to as the 'Bordeaux of South America'. In the mid-19th century, incredibly wealthy Chilean mining barons showcased their fortunes by building spectacular French-style châteaux and importing pre-phylloxera vine cuttings directly from Bordeaux.",
                geography: "Nestled just south of the capital, Santiago. The valley is perfectly enclosed by the towering, snowy Andes Mountains to the east and the Coastal Range to the west, creating a highly protected, warm, Mediterranean sun-trap basin.",
                terroir: "Deep, completely free-draining alluvial gravel washed flawlessly down from the Andes over millennia. The intense daytime heat is completely mitigated by cool air cascading down from the snowy mountain peaks at night, providing the ideal diurnal shift for pristine Cabernet.",
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
                history: "Settled in 1842 by Silesian (German) immigrants fleeing religious persecution. Thanks to incredibly strict quarantine laws, the Barossa escaped the phylloxera plague entirely, and today boasts the absolute oldest, continuously producing, own-rooted Shiraz vines in the world.",
                geography: "A warm, low-lying, continental valley located about 60 kilometers northeast of Adelaide. The climate is notoriously hot and dry, forcing vines to struggle mercilessly and concentrate their energy into producing minuscule amounts of intensely flavored grapes.",
                terroir: "A fierce mix of ancient red-brown earths and sandy loams. The relentless summer heat literally bakes the fruit on the vine, producing the quintessential Australian style: massive, high-alcohol, blockbuster wines bursting with dark chocolate, eucalyptus, and blackberry jam.",
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
                history: "While Sicily has produced wine for thousands of years, Mount Etna has entirely recently exploded as the 'Burgundy of the Mediterranean', captivating the global wine world with artisanal, single-vineyard (Contrada) bottlings of unimaginable finesse and subtlety.",
                geography: "Breath-taking, high-elevation vineyards clinging precariously to the impossibly steep slopes of Mount Etna, an active and violently raging volcano. The vines reach dizzying altitudes to escape the ferocious, baking heat of the Mediterranean, creating a cool, almost continental climate.",
                terroir: "Pure, jet-black, incredibly mineral-rich volcanic ash, pumice, and cooled lava flows (sciara). This extreme and violent soil completely starves the vines, but imparts a profoundly smoky, deeply savory, and iron-like minerality to the wines that cannot be replicated anywhere else on earth.",
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
                history: "Although the legendary Vega Sicilia estate shockingly arrived in 1864, the region was virtually completely unknown until 1982 when the DO was finally formed. In just a few decades, it exploded to definitively become Spain's most prestigious and expensive zone for massively powerful red wines.",
                geography: "A harsh, high-altitude, dramatically flat central plateau brutally cut by the Duero river. The continental climate is notoriously punishing: famously described as 'nine months of winter, three months of hell.' The unbearably scorching summers are punctuated by near-freezing nights.",
                terroir: "Crumbly chalky limestone and severe clay parched by the relentless sun. The unbelievably extreme diurnal temperature shifts (scorching hot days, freezing cold nights) dramatically slow the ripening of the grapes, resulting in thick skins, massive tannins, and surprisingly vibrant acidity.",
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
                history: "A deeply complex, severely fractured region that has bounced violently between French and German control for centuries. It beautifully blends the severe structural rigidity of Germany with the culinary richness of France, uniquely labeling its prestigious wines by grape variety rather than by geographic origin.",
                geography: "A completely dry, sun-drenched corridor nestled tightly in the massive rain shadow of the plunging Vosges mountains in eastern France. Despite its very extreme northern latitude, it ironically stands as one of the driest and remarkably sunniest wine regions in all of France.",
                terroir: "An unbelievably complex, heavily fractured mosaic of over 13 distinct soil types scattered wildly along a single fault line, ranging from pink sandstone to sheer granite, chalk, and volcanic rock. This blinding kaleidoscope of terroir forces winemakers to painstakingly bottle countless single-vineyard expressions.",
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
