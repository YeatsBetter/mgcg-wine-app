export const wineRegionsData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    /* Real coordinates roughly outlining the Gironde estuary and Bordeaux communes */
                    [-1.15, 44.80], [-1.08, 44.95], [-0.95, 45.10], [-0.75, 45.25], [-0.60, 45.30],
                    [-0.40, 45.20], [-0.35, 45.00], [-0.15, 44.90], [-0.05, 44.75], [-0.10, 44.60],
                    [-0.25, 44.50], [-0.45, 44.40], [-0.80, 44.50], [-1.00, 44.65], [-1.15, 44.80]
                ]]
            },
            properties: {
                id: "bordeaux",
                name: "Bordeaux",
                country: "France",
                description: "Bordeaux is one of the most famous and prestigious wine regions in the world, renowned for its structured, age-worthy red blends.",
                history: "Wine production in Bordeaux dates back to the Romans who planted vineyards to supply soldiers. The region rose to global prominence largely due to English rule in the 12th century, and its reputation was cemented by the famous 1855 Classification commissioned by Napoleon III.",
                geography: "Located in southwest France near the Atlantic coast. The region is divided by the Gironde Estuary and its two rivers, the Garonne and the Dordogne. The maritime climate is moderated by the Gulf Stream, delivering long, warm summers, though vintage variation can be significant due to sudden rain.",
                terroir: "The 'Left Bank' (Medoc, Graves) features well-drained gravel soils that retain heat and are ideal for late-ripening Cabernet Sauvignon. The 'Right Bank' (Saint-Emilion, Pomerol) is predominantly clay and limestone, providing the cooler, water-retaining conditions perfect for early-ripening Merlot.",
                grapes: "Red: Cabernet Sauvignon (provides structure, tannin, blackcurrant), Merlot (offers fleshy plum fruit and softness), Cabernet Franc, Petit Verdot. White: Sauvignon Blanc, Sémillon (crucial for Sauternes sweet wines).",
                estates: [
                    {
                        name: "Château Margaux",
                        description: "A legendary First Growth estate on the Left Bank characterized by feminine elegance, violet perfume, and extraordinary longevity.",
                        wines: [
                            { name: "Château Margaux (Grand Vin)", url: "https://www.vivino.com/search/wines?q=Chateau+Margaux" },
                            { name: "Pavillon Rouge", url: "https://www.vivino.com/search/wines?q=Pavillon+Rouge+du+Chateau+Margaux" }
                        ]
                    },
                    {
                        name: "Château Cheval Blanc",
                        description: "The leading estate in Saint-Émilion (Right Bank), famous for its unusually high proportion of Cabernet Franc yielding incredibly aromatic and silky wines.",
                        wines: [
                            { name: "Château Cheval Blanc", url: "https://www.vivino.com/search/wines?q=Chateau+Cheval+Blanc" },
                            { name: "Le Petit Cheval", url: "https://www.vivino.com/search/wines?q=Le+Petit+Cheval" }
                        ]
                    },
                    {
                        name: "Château d'Yquem",
                        description: "The unparalleled producer of noble rot sweet wines in Sauternes, classified as the sole Premier Cru Supérieur in 1855.",
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
                    /* Approximating the Cote d'Or stretching from Dijon to Santenay */
                    [4.95, 47.35], [4.98, 47.30], [5.00, 47.20], [4.95, 47.10], [4.85, 47.05],
                    [4.80, 47.00], [4.70, 46.90], [4.65, 46.85], [4.55, 46.90], [4.65, 47.00],
                    [4.75, 47.15], [4.85, 47.25], [4.90, 47.35], [4.95, 47.35]
                ]]
            },
            properties: {
                id: "burgundy",
                name: "Burgundy (Bourgogne)",
                country: "France",
                description: "The ultimate terroir-driven region, Burgundy is the spiritual home of Pinot Noir and Chardonnay, producing some of the world's most sought-after single-varietal wines.",
                history: "Monks of the Cistercian and Benedictine orders strictly mapped and defined the vineyard plots (climats) over centuries, noting how specific parcels produced distinct wines. The French Revolution secularized these lands and fractured ownership, resulting in the complex mosaic of smallholder plots seen today.",
                geography: "Situated in eastern-central France. It experiences a continental climate with cold winters and relatively short, warm summers. The threat of spring frost and summer hail makes vintage conditions precarious but highly influential.",
                terroir: "A prehistoric seabed left behind varying layers of limestone, clay, and marl. The Grand Cru vineyards typically sit mid-slope on the Côte d'Or, where drainage, soil shallowness, and optimal eastern or south-eastern sun exposure perfectly ripen the temperamental grapes.",
                grapes: "Red: Pinot Noir (transparent expression of terroir, red cherry, earthy forest floor). White: Chardonnay (ranges from steely and mineral in Chablis to rich, buttery, and hazelnut-laden in the Côte de Beaune).",
                estates: [
                    {
                        name: "Domaine de la Romanée-Conti (DRC)",
                        description: "Arguably the most prestigious and expensive wine estate globally, producing exclusively Grand Cru wines that serve as the ultimate benchmark for Pinot Noir.",
                        wines: [
                            { name: "La Tâche", url: "https://www.vivino.com/search/wines?q=Domaine+de+la+Romanee+Conti+La+Tache" },
                            { name: "Romanée-Conti", url: "https://www.vivino.com/search/wines?q=Domaine+de+la+Romanee+Conti+Romanee+Conti" }
                        ]
                    },
                    {
                        name: "Domaine Leflaive",
                        description: "The legendary pioneer of biodynamic farming in Puligny-Montrachet, crafting some of the world's most profound expression of Chardonnay.",
                        wines: [
                            { name: "Montrachet Grand Cru", url: "https://www.vivino.com/search/wines?q=Domaine+Leflaive+Montrachet" },
                            { name: "Chevalier-Montrachet", url: "https://www.vivino.com/search/wines?q=Domaine+Leflaive+Chevalier+Montrachet" }
                        ]
                    },
                    {
                        name: "Armand Rousseau",
                        description: "The absolute benchmark for traditional, profound, and masculine Gevrey-Chambertin.",
                        wines: [
                            { name: "Chambertin", url: "https://www.vivino.com/search/wines?q=Armand+Rousseau+Chambertin" },
                            { name: "Clos Saint-Jacques", url: "https://www.vivino.com/search/wines?q=Armand+Rousseau+Clos+Saint+Jacques" }
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
                    /* Champagne approximate bounds from Reims to Epernay */
                    [3.80, 49.35], [4.10, 49.35], [4.20, 49.20], [4.15, 49.05], [4.00, 48.95],
                    [3.85, 48.90], [3.70, 48.95], [3.65, 49.10], [3.75, 49.25], [3.80, 49.35]
                ]]
            },
            properties: {
                id: "champagne",
                name: "Champagne",
                country: "France",
                description: "The birthplace and golden standard of traditional method sparkling wine.",
                history: "Originally famous for pale still pink wines that rivaled Burgundy. The effervescence, once considered a flaw (the 'Devil's wine'), was later perfected by figures like Dom Pérignon and the Widow (Veuve) Clicquot, who invented riddling to remove the cloudy yeast.",
                geography: "The northernmost wine region in France. The cold, marginal climate is extremely harsh for vines, resulting in grapes with blisteringly high natural acidity—a vital component for high-quality sparkling wine production.",
                terroir: "Famous for its deep belemnite chalk soils. These ancient, porous marine deposits retain moisture during dry periods while reflecting sunlight up into the vine canopy to aid ripening in the cool climate. Deep chalk cellars (crayères) provide identical year-round temperatures for aging.",
                grapes: "Chardonnay (floral, citrus, elegance), Pinot Noir (structure, red fruits), Meunier (supple fruitiness, approachable young).",
                estates: [
                    {
                        name: "Krug",
                        description: "A prestigious house known for obsessive detail, fermenting all base wines in oak barrels and producing intensely rich, long-aging cuvées.",
                        wines: [
                            { name: "Krug Grande Cuvée", url: "https://www.vivino.com/search/wines?q=Krug+Grande+Cuvee" },
                            { name: "Krug Vintage", url: "https://www.vivino.com/search/wines?q=Krug+Vintage" }
                        ]
                    },
                    {
                        name: "Salon",
                        description: "A mythical house that invented the Blanc de Blancs style. They make only one wine, exclusively from Chardonnay, only in exceptional vintages.",
                        wines: [
                            { name: "Salon Cuvée 'S' Le Mesnil", url: "https://www.vivino.com/search/wines?q=Salon+Cuvee+S+Le+Mesnil" }
                        ]
                    },
                    {
                        name: "Louis Roederer",
                        description: "One of the few family-owned Grande Marques, famous for creating the first 'Prestige Cuvée' for Tsar Alexander II of Russia.",
                        wines: [
                            { name: "Cristal", url: "https://www.vivino.com/search/wines?q=Louis+Roederer+Cristal" }
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
                    /* Tuscany roughly from Florence down to Montalcino/Maremma */
                    [10.90, 43.85], [11.35, 43.75], [11.55, 43.45], [11.50, 43.10], [11.60, 42.80],
                    [11.20, 42.60], [10.95, 42.75], [10.50, 42.90], [10.45, 43.15], [10.55, 43.40],
                    [10.90, 43.85]
                ]]
            },
            properties: {
                id: "tuscany",
                name: "Tuscany",
                country: "Italy",
                description: "Tuscany boasts iconic rolling hills and is the heartland of the Sangiovese grape, giving birth to legendary wines like Chianti Classico, Brunello di Montalcino, and the revolutionary Super Tuscans.",
                history: "Vines have been cultivated here since the Etruscans in the 8th century BC. The 1970s saw the 'Super Tuscan' revolution where rebellious winemakers deliberately broke strict DOC appellation rules to mix Sangiovese with French grapes, creating world-class international blends.",
                geography: "A primarily hilly region running from the Apennine Mountains toward the coastal Maremma. It enjoys a warm Mediterranean climate with dry summers, but altitude variations provide crucial diurnal temperature shifts to maintain grape acidity.",
                terroir: "The most prestigious inland subzones (like Montalcino and Chianti) feature poor, rocky soils known as 'galestro' (schist-based) and 'alberese' (limestone-based) that severely stress the vines, concentrating flavors. The coastal areas are warmer with more clay, suiting Bordeaux varietals.",
                grapes: "Red: Sangiovese (high acid, high tannin, sour cherry, dried herbs, earth), Cabernet Sauvignon, Merlot. White: Vernaccia (in San Gimignano).",
                estates: [
                    {
                        name: "Tenuta San Guido",
                        description: "The absolute pioneer of the Super Tuscans, creating a Bordeaux blend on the gravelly Tuscan coast that stunned the world.",
                        wines: [
                            { name: "Sassicaia", url: "https://www.vivino.com/search/wines?q=Tenuta+San+Guido+Sassicaia" },
                            { name: "Guidalberto", url: "https://www.vivino.com/search/wines?q=Tenuta+San+Guido+Guidalberto" }
                        ]
                    },
                    {
                        name: "Biondi-Santi",
                        description: "The historical inventor and absolute guardian of traditional, incredibly long-lived Brunello di Montalcino.",
                        wines: [
                            { name: "Brunello di Montalcino Riserva", url: "https://www.vivino.com/search/wines?q=Biondi+Santi+Brunello+di+Montalcino+Riserva" }
                        ]
                    },
                    {
                        name: "Marchesi Antinori",
                        description: "One of the longest continually operating companies in the world (since 1385), central to the modern renaissance of Chianti and Super Tuscans.",
                        wines: [
                            { name: "Tignanello", url: "https://www.vivino.com/search/wines?q=Antinori+Tignanello" },
                            { name: "Solaia", url: "https://www.vivino.com/search/wines?q=Antinori+Solaia" }
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
                    /* Piedmont outlining Langhe/Barolo/Barbaresco */
                    [7.85, 44.80], [8.05, 44.75], [8.10, 44.60], [8.05, 44.50], [7.90, 44.55],
                    [7.85, 44.65], [7.85, 44.80]
                ]]
            },
            properties: {
                id: "piedmont",
                name: "Piedmont (Piemonte)",
                country: "Italy",
                description: "Encircled by the Alps, Piedmont is the gastronomic capital of Italy and home to the majestic, haunting wines of Barolo and Barbaresco.",
                history: "Historically influenced heavily by the neighboring House of Savoy (kings of Italy) and French cultural cross-over. Barolo, once a sweet wine, was transformed into the dry 'King of Wines, Wine of Kings' in the mid-19th century.",
                geography: "Located in northwestern Italy at the foot of the Alps ('pie-monte'). The climate is strongly continental with snowy winters and hot summers. The defining feature is the autumn 'nebbia' (fog) that rolls into the valleys, extending the ripening season for late-harvest varieties.",
                terroir: "The Langhe hills are comprised of ancient marine sedimentary soils. Calcareous marls yield the structured, long-lived Barolos, while slightly sandier soils near the river produce the more approachable, perfumed Barbaresco.",
                grapes: "Red: Nebbiolo (pale garnet color, brutal tannins, high acid, aromas of tar and roses), Barbera (everyday drinking, high acid, juicy cherry), Dolcetto. White: Moscato (Asti), Cortese (Gavi).",
                estates: [
                    {
                        name: "Giacomo Conterno",
                        description: "The titan of traditional Barolo, renowned for monumental, muscular wines that demand decades of cellaring.",
                        wines: [
                            { name: "Monfortino Riserva", url: "https://www.vivino.com/search/wines?q=Giacomo+Conterno+Monfortino" },
                            { name: "Barolo Francia", url: "https://www.vivino.com/search/wines?q=Giacomo+Conterno+Francia" }
                        ]
                    },
                    {
                        name: "Gaja",
                        description: "The most famous name in Barbaresco. Angelo Gaja modernized the region and introduced single-vineyard concept to Piedmont.",
                        wines: [
                            { name: "Barbaresco", url: "https://www.vivino.com/search/wines?q=Gaja+Barbaresco" },
                            { name: "Sperss", url: "https://www.vivino.com/search/wines?q=Gaja+Sperss" }
                        ]
                    },
                    {
                        name: "Bruno Giacosa",
                        description: "A legendary 'traditionalist' who bought grapes from the best plots across the Langhe, capturing the absolute essence of Nebbiolo.",
                        wines: [
                            { name: "Barbaresco Asili", url: "https://www.vivino.com/search/wines?q=Bruno+Giacosa+Barbaresco+Asili" }
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
                    /* Rioja highlighting the Ebro river valley */
                    [-2.95, 42.60], [-2.50, 42.50], [-2.00, 42.30], [-1.80, 42.20], [-1.90, 42.10],
                    [-2.40, 42.25], [-2.80, 42.40], [-3.05, 42.55], [-2.95, 42.60]
                ]]
            },
            properties: {
                id: "rioja",
                name: "Rioja",
                country: "Spain",
                description: "Spain's flagship region, legendary for its extensive oak-aging traditions and complex, savory Tempranillo blends.",
                history: "Wine has been made here for millennia, but modern Rioja was born when French winemakers fled south over the Pyrenees during the 19th-century phylloxera epidemic, bringing with them Bordeaux techniques like oak barrel aging.",
                geography: "Located in northern Spain along the Ebro River. It is sheltered by the Sierra Cantabria mountains to the north (blocking cold Atlantic weather) and the Sierra de la Demanda to the south.",
                terroir: "Divided into three sub-zones: Rioja Alta and Rioja Alavesa sit at higher elevations with chalky-clay soils producing elegant, acidic wines. Rioja Oriental (Baja) is much hotter and drier with alluvial soils, yielding richer, higher-alcohol Garnacha.",
                grapes: "Red: Tempranillo (strawberry, leather, tobacco when aged), Garnacha, Mazuelo, Graciano. White: Viura.",
                estates: [
                    {
                        name: "La Rioja Alta, S.A.",
                        description: "The quintessential traditionalist, aging wines for incredible periods in American oak before release.",
                        wines: [
                            { name: "Gran Reserva 890", url: "https://www.vivino.com/search/wines?q=La+Rioja+Alta+Gran+Reserva+890" },
                            { name: "Viña Ardanza", url: "https://www.vivino.com/search/wines?q=La+Rioja+Alta+Vina+Ardanza" }
                        ]
                    },
                    {
                        name: "R. López de Heredia",
                        description: "A living museum of winemaking. They operate almost exactly as they did in the 1800s, making some of the most uniquely savory and oxidized wines in the world.",
                        wines: [
                            { name: "Viña Tondonia Reserva", url: "https://www.vivino.com/search/wines?q=Lopez+de+Heredia+Vina+Tondonia" }
                        ]
                    },
                    {
                        name: "Marqués de Murrieta",
                        description: "The oldest winery in Rioja (est. 1852), successfully blending historical elegance with modern precision.",
                        wines: [
                            { name: "Castillo Ygay Gran Reserva", url: "https://www.vivino.com/search/wines?q=Marques+de+Murrieta+Castillo+Ygay" }
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
                    /* Napa Valley proper bounds */
                    [-122.58, 38.60], [-122.46, 38.45], [-122.30, 38.25], [-122.25, 38.20],
                    [-122.35, 38.20], [-122.45, 38.35], [-122.65, 38.58], [-122.58, 38.60]
                ]]
            },
            properties: {
                id: "napa",
                name: "Napa Valley",
                country: "United States",
                description: "America's premier wine region, defining the modern, opulent style of 'New World' Cabernet Sauvignon.",
                history: "Commercial winemaking began in the 19th century but was decimated by Prohibition. It rebounded dramatically when Napa wines shockingly defeated top French Bordeaux and Burgundies in the 1976 'Judgment of Paris' blind tasting, forcing the world to respect California wine.",
                geography: "A narrow valley, 30 miles long, flanked by the Mayacamas Mountains to the west and the Vaca Mountains to the east. A dense, cold fog rolls in from San Pablo Bay every night, providing a drastic diurnal temperature swing that keeps grapes from baking in the intense California sun.",
                terroir: "Incredibly geologically diverse (containing half the world's soil orders). The valley floor features fertile alluvial fans yielding lush, fruit-forward wines. The rocky mountain AVAs (Howell Mountain, Mount Veeder) produce tiny berries with massive, grippy tannins.",
                grapes: "Red: Cabernet Sauvignon (full-bodied, black cherry, cassis, vanilla oak), Merlot. White: Chardonnay.",
                estates: [
                    {
                        name: "Screaming Eagle",
                        description: "The ultimate 'Cult Wine'. A tiny production estate whose mailing list wait time is measured in decades.",
                        wines: [
                            { name: "Cabernet Sauvignon", url: "https://www.vivino.com/search/wines?q=Screaming+Eagle+Cabernet+Sauvignon" }
                        ]
                    },
                    {
                        name: "Opus One",
                        description: "A historic joint venture created in 1979 by Robert Mondavi and Baron Philippe de Rothschild to craft a world-class Bordeaux blend in California.",
                        wines: [
                            { name: "Opus One", url: "https://www.vivino.com/search/wines?q=Opus+One+Napa+Valley" }
                        ]
                    },
                    {
                        name: "Harlan Estate",
                        description: "A 'First Growth' of California, carved out of the rugged western hills of Oakville to produce intensely structured, monumental wines.",
                        wines: [
                            { name: "Harlan Estate", url: "https://www.vivino.com/search/wines?q=Harlan+Estate+Napa+Valley" }
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
                    /* Mendoza, Argentina hugging the Andes */
                    [-69.50, -32.80], [-68.80, -32.80], [-68.70, -33.50], [-69.00, -34.00],
                    [-69.30, -34.00], [-69.50, -33.50], [-69.50, -32.80]
                ]]
            },
            properties: {
                id: "mendoza",
                name: "Mendoza",
                country: "Argentina",
                description: "The undisputed capital of Malbec, thriving at extreme altitudes against the backdrop of the Andes.",
                history: "Spanish colonizers brought the first vines in the 1500s. In the mid-19th century, a French agronomist introduced Malbec just before the phylloxera plague devastated Europe, meaning Argentina preserved pristine, pre-plague cuttings of the varietal.",
                geography: "Located in the shadow of the colossal Andes mountain range. It is essentially a high-altitude desert, relying entirely on snowmelt channeled through ancient Incan irrigation canals to sustain the vines.",
                terroir: "Altitude is the definer of quality here (often planted between 3,000 to over 5,000 feet). The thin atmosphere leads to aggressive UV light exposure, forcing grapes to develop thick skins (yielding deep color and tannin) while freezing night temperatures maintain crisp acidity. Soils are alluvial, sandy, and rocky.",
                grapes: "Red: Malbec (deep purple color, blackberry, plum, cocoa, violet), Cabernet Sauvignon. White: Torrontés (intensely floral).",
                estates: [
                    {
                        name: "Catena Zapata",
                        description: "Nicolás Catena pioneered high-altitude viticulture. Their Adrianna Vineyard sits at almost 5,000 feet and is widely considered the Grand Cru of South America.",
                        wines: [
                            { name: "Nicolas Catena Zapata", url: "https://www.vivino.com/search/wines?q=Nicolas+Catena+Zapata" },
                            { name: "Malbec Argentino", url: "https://www.vivino.com/search/wines?q=Catena+Zapata+Malbec+Argentino" }
                        ]
                    },
                    {
                        name: "Cheval des Andes",
                        description: "A prestigious collaboration between Terrazas de los Andes and Bordeaux's legendary Château Cheval Blanc.",
                        wines: [
                            { name: "Cheval des Andes", url: "https://www.vivino.com/search/wines?q=Cheval+des+Andes" }
                        ]
                    },
                    {
                        name: "Zuccardi",
                        description: "Mountain winemakers pushing boundaries with concrete fermentation and deep exploration of calcareous soils in the Uco Valley.",
                        wines: [
                            { name: "Piedra Infinita", url: "https://www.vivino.com/search/wines?q=Zuccardi+Piedra+Infinita" }
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
                    /* Barossa Valley */
                    [138.85, -34.40], [139.10, -34.45], [139.05, -34.65], [138.85, -34.60], [138.85, -34.40]
                ]]
            },
            properties: {
                id: "barossa",
                name: "Barossa Valley",
                country: "Australia",
                description: "Australia's most famous wine region, delivering massive, chocolatey, and endlessly powerful Shiraz.",
                history: "Settled not by convicts or British, but by Prussian and Silesian immigrants fleeing religious persecution in the 1840s. Because phylloxera never breached the Barossa, it holds some of the oldest continuously producing, un-grafted vines on planet earth (some dating to 1843).",
                geography: "Located in South Australia, inland from Adelaide. The climate is very hot and dry Mediterranean, leading to rapid ripening and incredibly high sugar levels in the grapes.",
                terroir: "The valley floor is incredibly warm with varied soils ranging from red-brown earths to sandy loams. The heat bakes the fruit on the vine, resulting in the region's signature jammy, baked, and highly concentrated flavor profiles.",
                grapes: "Red: Shiraz (opulent, full-bodied, blackberry jam, dark chocolate, eucalyptus), Grenache, Mataro (Mourvèdre). White: Semillon, Riesling (in cooler neighboring Eden Valley).",
                estates: [
                    {
                        name: "Penfolds",
                        description: "The creator of 'Grange', Australia's most historic and famous wine. They revolutionized Australian winemaking by implementing multi-regional blending rather than single-vineyard focus.",
                        wines: [
                            { name: "Grange", url: "https://www.vivino.com/search/wines?q=Penfolds+Grange" },
                            { name: "RWT Shiraz", url: "https://www.vivino.com/search/wines?q=Penfolds+RWT+Shiraz" }
                        ]
                    },
                    {
                        name: "Henschke",
                        description: "A legendary family-owned estate since 1868, tending arguably the most famous single vineyard in the southern hemisphere: Hill of Grace.",
                        wines: [
                            { name: "Hill of Grace", url: "https://www.vivino.com/search/wines?q=Henschke+Hill+of+Grace" }
                        ]
                    },
                    {
                        name: "Torbreck",
                        description: "Champions of ultra-premium Rhone-style blends drawn from ancient, dry-farmed pre-phylloxera vines.",
                        wines: [
                            { name: "RunRig", url: "https://www.vivino.com/search/wines?q=Torbreck+RunRig" }
                        ]
                    }
                ]
            }
        }
    ]
};
