var Koa = require('koa');
var Router = require('koa-router');
var koaBody = require('koa-body')();

var app = new Koa();
var router = new Router();

router.get('/api', function (ctx, next) {
    console.log(ctx.params);
    ctx.body="hello world"
});

router.post('/api/post', koaBody, (ctx) => {
        console.log(ctx.request.body);
        ctx.body = JSON.stringify(ctx.request.body);
    }
);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);
