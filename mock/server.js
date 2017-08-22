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

// 首页（猜你喜欢）
const homeListData=require('./date/home/List');
router.get('/api/homelist/:city/:page', function (ctx, next) {
    // 参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.body = homeListData

});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./date/search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function (ctx, next) {
    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);
    console.log('关键字：' + paramsKeyword);

    ctx.body = searchListData
});

// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function (ctx, next) {
    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);

    ctx.body = searchListData
})

router.post('/api/post', koaBody, (ctx) => {
        console.log(ctx.request.body);
        ctx.body = JSON.stringify(ctx.request.body);
    }
);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);
