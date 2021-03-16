import Koa from "koa";

const responseFormat = () => {
    return async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
        try {
            await next();
            ctx.body = {
                code: 0,
                success: true,
                content: ctx.body,
                message: null
            }
        } catch (err) {
            ctx.status = err.status;
            ctx.body = {
                code: err.code || 0,
                success: false,
                content: err.content || null,
                message: err.message,
            }
        }
    }
}

export default responseFormat;