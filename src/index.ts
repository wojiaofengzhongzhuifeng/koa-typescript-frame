import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
app.use(bodyParser());

// 获取所有数据
router.get('/todos', (ctx: Koa.Context) => {
  ctx.body = {
    message: "获取所有数据",
    data: []
  }
});

// 获取某个数据
router.get('/todos/:id', (ctx: Koa.Context) => {
  ctx.body = {
    message: "获取某个数据",
    data: []
  }
});

// 新增一个数据
router.post('/todos', (ctx: Koa.Context) => {
  ctx.body = {
    message: "新增一个数据",
    data: []
  }
});

// 修改一个数据, 用户只需要带上需要修改的字段即可
router.patch('/todos/:id', (ctx: Koa.Context) => {
  ctx.body = {
    message: "修改一个数据",
    data: []
  }
});

// 删除一个数据
router.get('/todos', (ctx: Koa.Context) => {
  ctx.body = {
    message: "删除一个数据",
    data: []
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);