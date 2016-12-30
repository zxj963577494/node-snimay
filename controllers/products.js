const eventproxy = require('eventproxy');
const _ = require('lodash');
const Product = require('../proxy').Product;
const Categoty = require('../proxy').Category;
const Tag = require('../proxy').Tag;

exports.get = function (req, res, next) {
    var currentPage = parseInt(req.query.page, 10) || 1;
    currentPage = currentPage > 0 ? currentPage : 1;
    const cate = req.query.cate > 3 ? {
        cid: req.query.cate
    } : {};
    const tag = req.query.tag ? {
        tags: {
            $in: [_.toInteger(req.query.tag)]
        }
    } : {};

    const options = _.assign({
        pid: 1
    }, cate, tag)

    const pageSize = 1;

    const ep = new eventproxy();

    ep.all('products', 'categories', 'tags', 'totalCount', function (products, categories, tags, totalCount) {
        res.render('products', {
            products: products,
            categories: categories,
            tags: tags,
            currentPage: currentPage,
            totalPages: Math.ceil(totalCount / pageSize),
            pageSize: pageSize
        });
    });

    Product.getProductsByPage('_id skPic price title', currentPage, pageSize, options, ep.done('products'));

    Product.getProductCount(1, ep.done('totalCount'));

    Categoty.getByReid(1, 1, ep.done('categories'));

    Tag.getByCid(1, 1, ep.done('tags'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });

}