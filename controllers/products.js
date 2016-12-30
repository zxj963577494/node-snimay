const eventproxy = require('eventproxy');
const Product = require('../proxy').Product;
const _ = require('lodash');

exports.get = function (req, res, next) {
    var page = parseInt(req.query.page, 10) || 1;
    page = page > 0 ? page : 1;
    const cate = req.query.cate > 3 ? {
        cid: req.query.cate
    } : {};
    const tag = req.query.tag ? {
        tags: { $in: [_.toInteger(req.query.tag)] }
    } : {};

    const options = _.assign({ pid: 1 }, cate, tag)

    const ep = new eventproxy();

    ep.all('products', function (products) {
        res.render('products', {
            products: products
        });
    });

    Product.getProductsByPage('_id skPic price title', page, 12, options, ep.done('products'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}