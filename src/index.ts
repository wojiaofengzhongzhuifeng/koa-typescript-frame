import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import {noNumber} from './help/help';
import {HttpException} from './httpException';

const app = new Koa();
const router = new Router();
app.use(bodyParser());

// 获取所有数据
router.get('/blogs', (ctx: Koa.Context) => {
  ctx.body = {
    message: "获取所有数据",
    data: []
  }
});


/**
 * @api {get} /blogs/:id 使用 id 获取某篇 blog
 * @apiName getBlog
 * @apiGroup Blog
 *
 * @apiParam {Number} id 想要获取 blog 的 id.
 *
 * @apiSuccess {String} blogTitle blog 的标题.
 * @apiSuccess {String} blogContent blog 的内容.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "message": "获取某个数据成功",
 *       "data": {
 *         "blogTitle": "blog 标题",
 *         "blogContent": "今天天气很好"
 *       }
 *     }
 *
 * @apiError BlogNotFound The id of the Blog was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "BlogNotFound"
 *     }
 */
router.get('/blogs/:id', (ctx: Koa.Context) => {
  const id = ctx.params.id;

  if(noNumber(id)){
    ctx.body = {
      code: -1,
      message: "blog id 数据类型必须为 number",
      data: null
    };
    return;
  }

  // 从数据库获取数据
  ctx.body = new HttpException({
    message: '获取数据成功',
    code: 0,
    data: {
      blogTitle: "标题",
      blogContent: '内容'
    }
  })
});

// 新增一个数据
router.post('/blogs', (ctx: Koa.Context) => {
  ctx.body = {
    message: "新增一个数据",
    data: []
  }
});

// 修改一个数据, 用户只需要带上需要修改的字段即可
router.patch('/blogs/:id', (ctx: Koa.Context) => {
  ctx.body = {
    message: "修改一个数据",
    data: []
  }
});

// 删除一个数据
router.get('/blogs', (ctx: Koa.Context) => {
  ctx.body = {
    message: "删除一个数据",
    data: []
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);