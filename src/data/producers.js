export const wineProducersData = {
    "type": "FeatureCollection",
    "features": [
        // BORDEAUX
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.7719, 45.2255] },
            "properties": {
                "id": "lafite",
                "regionId": "bordeaux",
                "name": "Château Lafite Rothschild",
                "description": "First Growth. Known for elegance, perfumed aromatics, and extreme longevity.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Chateau+Lafite+Rothschild"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.7441, 45.1843] },
            "properties": {
                "id": "latour",
                "regionId": "bordeaux",
                "name": "Château Latour",
                "description": "First Growth. Powerful, structured Cabernet Sauvignon from Pauillac.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Chateau+Latour"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.6698, 45.0441] },
            "properties": {
                "id": "margaux",
                "regionId": "bordeaux",
                "name": "Château Margaux",
                "description": "First Growth. Exquisite perfume and silky textures.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Chateau+Margaux"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2017, 44.9292] },
            "properties": {
                "id": "petrus",
                "regionId": "bordeaux",
                "name": "Petrus",
                "description": "The most famous wine from Pomerol. Pure Merlot on blue clay.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Petrus+Pomerol"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.1557, 44.8912] },
            "properties": {
                "id": "cheval_blanc",
                "regionId": "bordeaux",
                "name": "Château Cheval Blanc",
                "description": "St. Émilion Premier Grand Cru Classé A. High Cabernet Franc blend.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Chateau+Cheval+Blanc"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.3340, 44.5453] },
            "properties": {
                "id": "dyquem",
                "regionId": "bordeaux",
                "name": "Château d'Yquem",
                "description": "Premier Cru Supérieur Sauternes. Legendary sweet wine.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Chateau+d%27Yquem"
            }
        },

        // BURGUNDY
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [4.9547, 47.1625] },
            "properties": {
                "id": "drc",
                "regionId": "burgundy",
                "name": "Domaine de la Romanée-Conti (DRC)",
                "description": "The most prestigious and expensive wine estate in the world.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Romanee+Conti"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [4.9654, 47.2188] },
            "properties": {
                "id": "leroy",
                "regionId": "burgundy",
                "name": "Domaine Leroy",
                "description": "Legendary biodynamic estate consistently matching or beating DRC.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Domaine+Leroy"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [4.7865, 46.9926] },
            "properties": {
                "id": "ramonet",
                "regionId": "burgundy",
                "name": "Domaine Ramonet",
                "description": "Iconic producer of Chassagne-Montrachet.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Domaine+Ramonet"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [4.8091, 47.0543] },
            "properties": {
                "id": "comtes_lafon",
                "regionId": "burgundy",
                "name": "Domaine des Comtes Lafon",
                "description": "Benchmark producer of rich Meursault.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Comtes+Lafon"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [3.8016, 47.8173] },
            "properties": {
                "id": "raveneau",
                "regionId": "burgundy",
                "name": "Domaine François Raveneau",
                "description": "The cult benchmark for age-worthy, mineral Chablis.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Raveneau"
            }
        },

        // TUSCANY
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [10.5518, 43.2307] },
            "properties": {
                "id": "sassicaia",
                "regionId": "tuscany",
                "name": "Tenuta San Guido (Sassicaia)",
                "description": "Birthplace of the Super Tuscan in Bolgheri.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Sassicaia"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [10.5656, 43.2201] },
            "properties": {
                "id": "ornellaia",
                "regionId": "tuscany",
                "name": "Tenuta dell'Ornellaia",
                "description": "Iconic, lavish Bordeaux-blend from coastal Tuscany.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Ornellaia"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [11.3197, 43.5186] },
            "properties": {
                "id": "antinori_tignanello",
                "regionId": "tuscany",
                "name": "Antinori (Tignanello)",
                "description": "The original Sangiovese/Cabernet Super Tuscan.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Tignanello"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [11.4589, 43.0450] },
            "properties": {
                "id": "biondi_santi",
                "regionId": "tuscany",
                "name": "Biondi-Santi",
                "description": "Inventor of Brunello di Montalcino. Traditional and long-lived.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Biondi+Santi"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [11.4912, 43.0298] },
            "properties": {
                "id": "soldera",
                "regionId": "tuscany",
                "name": "Soldera (Case Basse)",
                "description": "Ethereal, incredibly complex, and fiercely traditional 100% Sangiovese.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Soldera"
            }
        },

        // NAPA VALLEY
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-122.3615, 38.4239] },
            "properties": {
                "id": "screaming_eagle",
                "regionId": "napa",
                "name": "Screaming Eagle",
                "description": "The ultimate California 'Cult Wine' producing highly scarce, perfect-scoring Cabernet.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Screaming+Eagle"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-122.4042, 38.4287] },
            "properties": {
                "id": "opus_one",
                "regionId": "napa",
                "name": "Opus One",
                "description": "Historic joint venture between Robert Mondavi and Baron Philippe de Rothschild.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Opus+One"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-122.3995, 38.4870] },
            "properties": {
                "id": "promontory",
                "regionId": "napa",
                "name": "Promontory (Harlan Family)",
                "description": "A rugged, isolated canyon producing wildly profound Cabernet.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Promontory"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-122.3734, 38.5670] },
            "properties": {
                "id": "schramsberg",
                "regionId": "napa",
                "name": "Schramsberg Vineyards",
                "description": "Pioneers of premium traditional method sparkling wine in the USA.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Schramsberg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-122.3168, 38.2562] },
            "properties": {
                "id": "hyde_de_villaine",
                "regionId": "napa",
                "name": "Hyde de Villaine (HdV)",
                "description": "A partnership with DRC's Aubert de Villaine in cool-climate Los Carneros.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Hyde+de+Villaine"
            }
        },

        // PIEDMONT
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [8.0818, 44.7268] },
            "properties": {
                "id": "gaja",
                "regionId": "piedmont",
                "name": "Gaja",
                "description": "Visionary estate that modernized Barbaresco and brought global fame to Piedmont.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Gaja+Barbaresco"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.9711, 44.5910] },
            "properties": {
                "id": "giacomo_conterno",
                "regionId": "piedmont",
                "name": "Giacomo Conterno",
                "description": "The absolute pinnacle of traditional Barolo (creator of Monfortino).",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Conterno+Monfortino"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.9402, 44.6083] },
            "properties": {
                "id": "bartolo_mascarello",
                "regionId": "piedmont",
                "name": "Bartolo Mascarello",
                "description": "Fiercely traditional Barolo, famously blending all their vineyards into a single wine.",
                "acceptsVisitors": false,
                "url": "https://www.vivino.com/search/wines?q=Bartolo+Mascarello"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [8.0163, 44.6191] },
            "properties": {
                "id": "vietti",
                "regionId": "piedmont",
                "name": "Vietti",
                "description": "Pioneers of single-vineyard Barolo and rescuers of the native Arneis grape.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Vietti+Barolo"
            }
        },

        // RIOJA
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-2.8396, 42.5842] },
            "properties": {
                "id": "la_rioja_alta",
                "regionId": "rioja",
                "name": "La Rioja Alta, S.A.",
                "description": "Standard-bearer for traditional Rioja. Long American oak aging (e.g., Gran Reserva 890).",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=La+Rioja+Alta"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-2.8465, 42.5830] },
            "properties": {
                "id": "lopez_de_heredia",
                "regionId": "rioja",
                "name": "R. López de Heredia (Viña Tondonia)",
                "description": "A time capsule of winemaking. Ultra-traditional, exceptionally long-lived red and white Riojas.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Lopez+de+Heredia"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-2.7214, 42.5152] },
            "properties": {
                "id": "marques_de_murrieta",
                "regionId": "rioja",
                "name": "Marqués de Murrieta",
                "description": "The oldest estate in Rioja. Famous for Castillo Ygay Gran Reserva.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Marques+de+Murrieta"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-2.6074, 42.5204] },
            "properties": {
                "id": "artadi",
                "regionId": "rioja",
                "name": "Artadi",
                "description": "Modernists emphasizing terroir and French oak over the traditional Crianza/Reserva system.",
                "acceptsVisitors": true,
                "url": "https://www.vivino.com/search/wines?q=Artadi"
            }
        }
    ]
};
