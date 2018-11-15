var fs = require("fs");
const path = require("path");

function getSuffixName(data) {
    data = data.split("/")[1];
    return data.split(";")[0];
}

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function saveBase64(imagData, options) {
    const data = imagData.split(",");
    const dataBuffer = new Buffer(data[1], "base64");
    // 获取类型
    let fileType = options.fileType || "common";
    let filePath = path.join(options.path, fileType);
    let mkdirResult = mkdirsSync(filePath);

    let fileName =
        Math.random()
            .toString(16)
            .substr(2) +
        "." +
        getSuffixName(data[0]);
    let _uploadFilePath = path.join(filePath, fileName);
    let saveTo = path.join(_uploadFilePath);

    return new Promise((resolve, reject) => {
        fs.writeFile(saveTo, dataBuffer, err => {
            if (err) {
                reject(0);
            } else {
                resolve([
                    `https://static.jef.site/${fileType}/${fileName}`
                ]);
            }
        });
    });
}

module.exports = {saveBase64};