import Koa from 'koa';
import middleWare from "./middleware";

const app = new Koa();
middleWare(app)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`启动端口${port}`)
})

