const eventproxy = require('eventproxy');
const Category = require('../../proxy').Category;
const Product = require('../../proxy').Product;
const _ = require('lodash');

exports.getList = function (req, res, next) {
    let cid = req.query.category || 1;
    const ep = new eventproxy();
    ep.all('list', function (list) {
        res.render('admin/product_list', {
            cid: cid,
            title: cid == 1 ? '产品体验' : cid == 2 ? '定制家具' : '配套家具',
            list: list,
            layout: 'admin'
        });
    });
    Product.getProducts_Admin({cid:cid}, ep.done('list'));
    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getAdd = function (req, res, next) {
    const ep = new eventproxy();
    let cid = req.query.category || 1;
    ep.all('category', function (category) {
        res.render('admin/product_add', {
            cid: cid,
            category: category.filter((x)=>{
                return x.id == cid
            }),
            title: (cid == 1 ? '产品体验' : cid == 2 ? '定制家具' : '配套家具'),
            layout: 'admin'
        });
    });
    Category.getCategories_Admin({}, ep.done('category'));
    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.postAdd = function (req, res, next) {
    const categorys = req.body.categorys;
    const categoryRef = categorys.split(',')[0];
    const cid = categorys.split(',')[1];
    const title = req.body.title;
    const isIndex = req.body.isIndex;
    const isVisible = req.body.isVisible;
    const code = req.body.code;
    const part = req.body.part;
    const skPic = req.body.skPic;
    const sliderPics = req.body.sliderPic.split(',');
    const content = req.body.content;
    const search = _.uniq(req.body.search.split(','));
    const where = _.uniq(req.body.where.split(',').push('all'));
    const tag = _.uniq(req.body.tag.split(','));
    const description = req.body.description;
    const price = req.body.price;

    const ep = new eventproxy();
    ep.all('product', function (product) {
        req.flash('info', { message: '添加成功' });
        res.redirect('/admin/product_list');
    });

    Product.newAndSave(cid, categoryRef, title, content, price, description, sliderPics, skPic, code, part, isVisible, tag, where, search, ep.done('product'));

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
