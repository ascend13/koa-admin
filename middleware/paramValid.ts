import Koa from "koa";
import query from "../test";

const paramValid = () => {
    return async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
        const data = await query()
        ctx.body = {
            msg: data
        }
        await next()
    }
}

export default paramValid;