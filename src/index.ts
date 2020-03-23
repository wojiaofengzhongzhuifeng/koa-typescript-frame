import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
app.use(bodyParser());

router.post('/:id', (ctx: Koa.Context) => {
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