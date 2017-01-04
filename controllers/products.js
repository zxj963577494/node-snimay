const eventproxy = require('eventproxy');
const _ = require('lodash');
const Product = require('../proxy').Product;
const Selector = require('../proxy').Selector;
const util = require('../util');

exports.get = function (req, res, next) {
    // 获取当前页
    var currentPage = parseInt(req.query.page, 10) || 1;
    currentPage = currentPage > 0 ? currentPage : 1;

    // select value id
    const vid = parseInt(req.query.cid, 10) || 0;
    const cate = vid > 3 ? {
        vid: vid
    } : {};

    // 获取标签id
    const tid = parseInt(req.query.tid, 10) || 1;
    const tag = tid ? {
        tags: {
            $in: [_.toInteger(tid)]
        }
    } : {};

    // 构建产品查询条件
    const options = _.assign({
        cid: 1,
        isVisible: 1
    })

    const pageSize = 12;

    const ep = new eventproxy();

    ep.all('products', 'keys', 'totalCount', function (products, keys, totalCount) {
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

    Selector.getByCid(1, { isVisible: 1 }, ep.done('keys'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });

}