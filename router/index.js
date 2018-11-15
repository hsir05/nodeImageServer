const router = require("koa-router")();
const Controller = require("../controller");

module.exports = app => {
    // 上传图片 放入photo
    router.post("/blog/img/:children1?/:children2?", Controller.loadImage);
    router.post("/blog/img2/:children1?/:children2?", Controller.loadBase64);

    app.use(router.routes()).use(router.allowedMethods());
};
