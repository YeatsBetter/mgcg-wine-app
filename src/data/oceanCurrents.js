// Major ocean currents and wind patterns that influence wine regions
export const oceanCurrents = [
    // === WARM CURRENTS ===
    {
        name: "Gulf Stream",
        type: "warm",
        desc: "Carries warm water from the Gulf of Mexico to Western Europe, moderating the climate of Bordeaux, Loire, Champagne, and the UK.",
        path: [
            [25, -80], [28, -78], [31, -75], [34, -70], [36, -65],
            [38, -58], [40, -50], [43, -40], [46, -30], [48, -20],
            [50, -10], [52, -5], [54, 0]
        ]
    },
    {
        name: "North Atlantic Drift",
        type: "warm",
        desc: "Extension of the Gulf Stream warming Northwestern Europe. Critical for the viability of winemaking in England, Germany, and Northern France.",
        path: [
            [54, 0], [56, 5], [58, 8], [60, 10], [62, 12]
        ]
    },
    {
        name: "Agulhas Current",
        type: "warm",
        desc: "Flows from the Indian Ocean along South Africa's east coast, warming Durban but contrasting with the cold Benguela on the west.",
        path: [
            [-20, 40], [-23, 38], [-26, 36], [-29, 34], [-32, 32],
            [-34, 30], [-35, 28], [-35.5, 26]
        ]
    },
    {
        name: "East Australian Current",
        type: "warm",
        desc: "Warm current along Australia's east coast, influencing the Hunter Valley and other NSW wine regions with moisture and warmth.",
        path: [
            [-15, 155], [-18, 154], [-22, 154], [-26, 154],
            [-30, 153], [-33, 152], [-36, 151], [-38, 150]
        ]
    },
    {
        name: "Kuroshio Current",
        type: "warm",
        desc: "The Pacific's Gulf Stream, warming Japan's coast and affecting Asian maritime climates.",
        path: [
            [15, 125], [18, 127], [22, 128], [26, 130],
            [30, 133], [33, 138], [35, 142], [38, 145]
        ]
    },

    // === COLD CURRENTS ===
    {
        name: "Humboldt Current",
        type: "cold",
        desc: "Frigid current from Antarctica creating desert/arid conditions along Chile and Peru. Essential for Chilean wine — cools valleys like Casablanca and Leyda.",
        path: [
            [-55, -75], [-50, -75], [-45, -74], [-40, -74],
            [-35, -73], [-30, -72], [-25, -72], [-20, -72],
            [-15, -76], [-10, -80]
        ]
    },
    {
        name: "Benguela Current",
        type: "cold",
        desc: "Cold current from Antarctica cooling South Africa's west coast. Creates the maritime climate vital for Stellenbosch and Constantia wines.",
        path: [
            [-35, 15], [-32, 16], [-28, 15], [-24, 14],
            [-20, 12], [-16, 11], [-12, 12]
        ]
    },
    {
        name: "California Current",
        type: "cold",
        desc: "Cold Pacific current bringing fog and cool air to the California coast. Creates the famous fog of Sonoma Coast, Carneros, and Santa Barbara.",
        path: [
            [48, -126], [45, -125], [42, -125], [39, -124],
            [36, -122], [34, -120], [32, -118], [30, -117]
        ]
    },
    {
        name: "Canary Current",
        type: "cold",
        desc: "Cool current off NW Africa moderating the Canary Islands and the coast of Morocco and Portugal.",
        path: [
            [42, -12], [38, -12], [34, -12], [30, -13],
            [26, -16], [22, -18], [18, -18]
        ]
    },

    // === WIND PATTERNS ===
    {
        name: "Mistral Wind",
        type: "wind",
        desc: "Strong, cold northerly wind funnelled down the Rhône Valley. Dries vineyards, reduces rot, and is vital for Châteauneuf-du-Pape and Languedoc.",
        path: [
            [47, 5], [46, 4.8], [45, 4.7], [44, 4.5],
            [43.5, 4.8], [43, 5.2]
        ]
    },
    {
        name: "Tramontana Wind",
        type: "wind",
        desc: "Cold, dry wind blowing from the north across NE Spain and Southern France. Influences Catalonia and Roussillon vineyards.",
        path: [
            [44, 2], [43, 2.5], [42.5, 3], [42, 3.2]
        ]
    },
    {
        name: "Zonda Wind",
        type: "wind",
        desc: "Hot, dry Föhn-type wind descending the Andes into Mendoza. Can raise temperatures dramatically, stressing vines but also drying post-rain moisture.",
        path: [
            [-32, -70.5], [-32.5, -69.5], [-33, -68.5], [-33, -67.5]
        ]
    },
    {
        name: "Cape Doctor",
        type: "wind",
        desc: "Strong SE wind in South Africa's Cape region. Cools vineyards and prevents fungal disease in Stellenbosch and Franschhoek.",
        path: [
            [-35, 20], [-34.5, 19.5], [-34, 19], [-33.8, 18.5]
        ]
    },
    {
        name: "Fremantle Doctor",
        type: "wind",
        desc: "Afternoon sea breeze cooling Western Australia's Margaret River and Swan District vineyards during hot summer days.",
        path: [
            [-33, 114], [-32.5, 115], [-32, 115.5], [-31.5, 116]
        ]
    }
];
