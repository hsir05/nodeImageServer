const router = require("koa-router")();
const Controller = require("../controller");

module.exports = app => {
    // 上传图片 放入photo
    router.post("/imgUpload", Controller.loadImage);
    router.post("/imgUpload", Controller.loadBase64);

    app.use(router.routes()).use(router.allowedMethods());
};
