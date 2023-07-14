const GenerateLogo = require('./lib/generateLogo');

const generateLogo = new GenerateLogo();
generateLogo.generateLogo((err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});