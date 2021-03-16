import Koa from 'koa';
import responseFormat from "./responseFormat";
import router from "../router"
import Application from 'koa';

const app = new Koa();

const middleWare = (app: Application) => {
    app
        .use(responseFormat())
        .use(router.routes()).use(router.allowedMethods())

}

export default middleWare;