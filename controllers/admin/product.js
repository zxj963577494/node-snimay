const eventproxy = require('eventproxy');
const Category = require('../../proxy').Category;
const Product = require('../../proxy').Product;

exports.getList = function (req, res, next) {
    const ep = new eventproxy();
    ep.all('list', function (list) {
        res.render('admin/product_list', {
            list: list,
            layout: 'admin'
        });
    });
    Product.getProducts_Admin({}, ep.done('list'));
    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getAdd = function (req, res, next) {
    res.render('admin/product_add', {
        layout: 'admin'
    });
}

exports.postAdd = function (req, res, next) {
    const _id = req.body._id;
    const title = req.body.title;
    const sort = req.body.sort;
    const isVisible = req.body.isVisible;

    const ep = new eventproxy();
    ep.all('category', function (category) {
        res.redirect('/admin/category_list');
    });

    Category.update(_id, title, sort, isVisible, ep.done('category'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}


exports.getEdit = function (req, res, next) {
    const _id = req.query._id;

    const ep = new eventproxy();
    ep.all('model', function (model) {
        res.render('admin/category_edit', {
            model: model,
            layout: 'admin'
        });
    });

    Category.getById_Admin(_id, ep.done('model'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.postEdit = function (req, res, next) {
    const _id = req.body._id;
    const title = req.body.title;
    const sort = req.body.sort;
    const isVisible = req.body.isVisible;

    const ep = new eventproxy();
    ep.all('category', function (category) {
        res.redirect('/admin/category_list');
    });

    Category.update(_id, title, sort, isVisible, ep.done('category'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}
