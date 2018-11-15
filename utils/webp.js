const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

function webp(src, target) {
    imagemin([src], target, {
        use: [imageminWebp({ quality: 85 })]
    }).then(() => {
        // console.log("Images optimized");
    });
}

module.exports = webp;
