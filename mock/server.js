var Koa = require('koa');
var Router = require('koa-router');
var koaBody = require('koa-body')();
var fs = require('fs');

var app = new Koa();
var router = new Router();


// 首页（超值特惠）
const homeAdData = require('./date/home/Ad.js');
router.get('/api/homeAd', function (ctx, next) {
    ctx.body = homeAdData;
});

// 首页（猜你喜欢）
const homeListData = require('./date/home/List');
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
});

//商品详情页面
var infoData = require('./date/detail/info');
router.get('/api/detail/:id', function (ctx, next) {
    const params = ctx.params;
    const id = params.id;

    console.log(id);
    ctx.body = infoData
});

const detailComment = require('./date/detail/comment.js');
router.get('/api/detail/comment/:page/:id', function (ctx, next) {
    console.log('详情页 - 用户点评');

    const params = ctx.params;
    const page = params.page;
    const id = params.id;

    console.log('商户id: ' + id);
    console.log('当前页数: ' + page);

    ctx.body = detailComment
});

router.post('/api/post/detail/:id', koaBody, (ctx) => {
        console.log(ctx.request.body.isStore);
        console.log(infoData)
        infoData.isStore = ctx.request.body.isStore;
        console.log(infoData)
        ctx.body = infoData;
    }
);

// 订单列表
var orderList = require('./date/order/orderList.js');
router.get('/api/orderlist/:username', (ctx) => {
    console.log('订单列表');

    const params = ctx.params;
    const username = params.username;
    console.log('用户名：' + username);

    ctx.body = orderList
});

// 提交评论
router.post('/api/submitComment', koaBody, (ctx) => {
    console.log('提交评论');

    // 获取参数
    console.log(ctx.request.body);
    orderList.data = orderList.data.map((item, index) => {
        if (ctx.request.body.id === item.id) {
            item.commentState = 2;
            item.value = ctx.request.body.value;
            return item
        } else {
            return item
        }
    });
    ctx.body = {
        status: 0,
        msg: 'ok'
    }
});


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);
