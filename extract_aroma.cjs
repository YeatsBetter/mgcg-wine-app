const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/Users/danielwu/Desktop/Testing/WSET 3级 葡萄酒和烈酒 (Wset) (Z-Library).pdf');

pdf(dataBuffer).then(function (data) {
    // Only search for keywords to save output size
    const content = data.text;
    const startIndex = content.indexOf('Describing aroma and flavour');
    if (startIndex !== -1) {
        console.log(content.substring(startIndex, startIndex + 5000));
    } else {
        console.log("Table title not found precisely, searching for Primary/Secondary/Tertiary...");
        const pIndex = content.indexOf('Primary');
        if (pIndex !== -1) {
            console.log(content.substring(pIndex, pIndex + 5000));
        } else {
            console.log("Primary Aroma keywords not found.");
        }
    }
}).catch(err => {
    console.error(err);
});
