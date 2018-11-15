const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const path = require("path");
const router = require("./router");
var cors = require("koa2-cors");

const app = new Koa();

const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));
console.log(path.join(__dirname, staticPath))
app.use(
    bodyParser({
        formLimit: "5mb"
    })
);
app.use(cors());
router(app);

app.listen(8082, () => {
    console.log("图片服务器启动成功，8082");
});
