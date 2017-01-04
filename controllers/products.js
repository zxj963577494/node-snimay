const eventproxy = require('eventproxy');
const _ = require('lodash');
const Product = require('../proxy').Product;
const Selector = require('../proxy').Selector;
const util = require('../util');

exports.get = function (req, res, next) {
    var link = '';

    // 获取当前页
    var currentPage = parseInt(req.query.page, 10) || 1;
    currentPage = currentPage > 0 ? currentPage : 1;

    // 构建产品查询条件
    const options = _.assign({
        cid: 1,
        isVisible: 1
    })

    link += currentPage > 1 ? ('?page=' + currentPage) : '';

    const pageSize = 12;

    const ep = new eventproxy();

    ep.all('products', 'keys', 'totalCount', 'link', function (products, keys, totalCount, link) {
        res.render('products', {
            products: products,
            keys: keys,
            currentPage: currentPage,
            totalPages: Math.ceil(totalCount / pageSize),
            pageSize: pageSize
        });
    });

    Product.getProductsByPage('id skPic price title', currentPage, pageSize, options, ep.done('products'));

    Product.getProductCount(options, ep.done('totalCount'));

    Selector.getByCid(1, {
        isVisible: 1
    }, ep.done(function (keys) {
        var params = [];
        keys.forEach((x) => {
            params.push({
                [x.alias]: req.query[x.alias]
            })
            //link += link ? `&${x.alias}＝${req.query[x.alias]}`:`?${x.alias}=${req.query[x.alias]}`;
        });
        util.filter_keys(keys, params)
        ep.emit('keys', keys);
        ep.emit('link', link);
    }));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}