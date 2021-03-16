import paramValid from "../middleware/paramValid";
import Router from 'koa-router';

const router = new Router();
// 路由
router.get("/api/test", paramValid)

export default router;
