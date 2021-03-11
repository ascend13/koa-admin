import Application from "koa";

const middleWare = (app: Application) => {
    app.on('error', err => {
        console.log('[server error]: ', err)
    })
}