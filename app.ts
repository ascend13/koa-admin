import { Context } from "koa";
import Koa from 'koa';
import Router from 'koa-router';
import query from "./test";

const app = new Koa();
const router = new Router();

// 路由
router.get("/api/test", async (ctx: Context) => {
    const data = await query()
    ctx.body = {
        msg: data
    }
})

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`启动端口${port}`)
})
