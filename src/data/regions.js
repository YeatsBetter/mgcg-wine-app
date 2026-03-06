export const wineRegionsData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [[[7.2,47.8],[7.5,47.8],[7.6,48.3],[7.7,48.8],[7.5,48.8],[7.4,48.3],[7.2,47.8]]] },
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
