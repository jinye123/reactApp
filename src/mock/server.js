var Koa = require('koa');
var Router = require('koa-router');
var koaBody = require('koa-body')();

var app = new Koa();
var router = new Router();


// 首页（超值特惠）
const homeAdData=require('./date/home/Ad.js');
router.get('/api/homeAd', function (ctx, next) {
    ctx.body=homeAdData;
});



router.post('/api/post', koaBody, (ctx) => {
        console.log(ctx.request.body);
        ctx.body = JSON.stringify(ctx.request.body);
    }
);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);
