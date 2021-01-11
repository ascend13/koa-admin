import { Context } from "koa";

const Koa = require("koa");
const Router = require("koa-router")

const app = new Koa();
const router = new Router();

// 路由
router.get("/", async (ctx: Context) => {
    ctx.body = {
        msg: 'koa接口返回'
    }
})

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`启动端口${port}`)
})
