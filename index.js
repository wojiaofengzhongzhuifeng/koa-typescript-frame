const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
app.use(bodyParser());

router.post('/:id', (ctx, next) => {
  const path = ctx.params.id;
  const header = ctx.req.headers;
  const body = ctx.request.body;
  const query = ctx.request.query;

  console.log('path', JSON.stringify(path));
  console.log('header', JSON.stringify(header));
  console.log('body', JSON.stringify(body));
  console.log('query', JSON.stringify(query));



  ctx.body = {
    message: 'success21'
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);