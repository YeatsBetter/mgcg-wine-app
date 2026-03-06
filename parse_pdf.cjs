const fs = require('fs');

async function parse() {
    const pdf = (await import('pdf-parse/lib/pdf-parse.js')).default;
    let dataBuffer = fs.readFileSync('the-wine-bible-karen-macneil.pdf');

    pdf(dataBuffer).then(function (data) {
        fs.writeFileSync('wine_bible_text.txt', data.text);
        console.log("Dumped full text to wine_bible_text.txt. Length: " + data.text.length);
    }).catch(console.error);
}

parse();
