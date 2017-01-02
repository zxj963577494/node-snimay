const eventproxy = require('eventproxy');
const _ = require('lodash');
const Product = require('../proxy').Product;
const Categoty = require('../proxy').Category;
const Tag = require('../proxy').Tag;
const util = require('../util');

exports.get = function (req, res, next) {
    // 获取当前页
    var currentPage = parseInt(req.query.page, 10) || 1;
    currentPage = currentPage > 0 ? currentPage : 1;

    // 获取类别id
    const cid = parseInt(req.query.cid, 10) || 0;
    const cate = cid > 3 ? {
        cid: cid
    } : {};

    // 获取标签id
    const tid = parseInt(req.query.tid, 10) || 0;
    const tag = tid ? {
        tags: {
            $in: [_.toInteger(tid)]
        }
    } : {};

    // 构建产品查询条件
    const options = _.assign({
        pid: 1,
    }, cate, tag)

    const pageSize = 12;

    const ep = new eventproxy();

    ep.all('products', 'categories', 'tags', 'totalCount', function (products, categories, tags, totalCount) {
        res.render('products', {
            products: products,
            categories: util.filter_categories(categories, cid, tid),
            tags: util.filter_tags(tags, cid, tid),
            currentPage: currentPage,
            totalPages: Math.ceil(totalCount / pageSize),
            pageSize: pageSize
        });
    });

    Product.getProductsByPage('_id skPic price title', currentPage, pageSize, options, ep.done('products'));

    Product.getProductCount(options, ep.done('totalCount'));

    Categoty.getByReid(1, 1, ep.done('categories'));

    Tag.getByCid(1, 1, ep.done('tags'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });

}