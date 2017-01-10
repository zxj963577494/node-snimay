const eventproxy = require('eventproxy');
const Selector = require('../../proxy').Selector;
const uuid = require('node-uuid');

exports.getKeyAdd = function (req, res, next) {
    res.render('admin/selector_key_add', {
        layout: 'admin'
    });
}

exports.postKeyAdd = function (req, res, next) {
    const cid = req.body.cid;
    const title = req.body.title;
    const alias = req.body.alias;
    const sort = req.body.sort;
    const isVisible = req.body.isVisible;
    const values = [].push({
        id: uuid.v4(),
        sort: 99,
        isVisible: 1,
        title: '全部',
        aliass: 'all'
    });

    const ep = new eventproxy();
    ep.all('key', function (key) {
        req.flash('info', {message: '添加成功'});
        res.redirect('/admin/selector_key_list');
    });

    Selector.newAndSave(title, alias, cid, isVisible, sort, values, ep.done('key'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getKeyEdit = function (req, res, next) {
    const _id = req.query._id;

    const ep = new eventproxy();
    ep.all('key', function (key) {
        res.render('admin/selector_key_edit', {
            model: key,
            layout: 'admin'
        });
    });

    Selector.getById_Admin(_id, ep.done('key'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}
exports.postKeyEdit = function (req, res, next) {
    const _id = req.body._id;
    const title = req.body.title;
    const alias = req.body.alias;
    const sort = req.body.sort;
    const isVisible = req.body.isVisible;

    const ep = new eventproxy();
    ep.all('selector', function (selector) {
        req.flash('info', {message: '修改成功'});
        res.redirect('/admin/selector_key_list');
    });

    Selector.update(_id, title, alias, sort, isVisible, ep.done('selector'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getKeyList = function (req, res, next) {
    let category = req.query.cid || 1;
    const ep = new eventproxy();
    ep.all('list', function (list) {
        res.render('admin/selector_key_list', {
            list: list,
            layout: 'admin'
        });
    });
    Selector.getByCid_Admin(category, {}, ep.done('list'));
    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getValueAdd = function (req, res, next) {
    const _id = req.query._id;
    res.render('admin/selector_value_add', {
        _id: _id,
        layout: 'admin'
    });
}
exports.postValueAdd = function (req, res, next) {
    const _id = req.body._id;
    const title = req.body.title;
    const alias = req.body.alias;
    const sort = req.body.sort;
    const isVisible = req.body.isVisible;
    const value = {
        id: uuid.v4(),
        sort: sort,
        isVisible: isVisible,
        title: title,
        alias: alias
    };

    const ep = new eventproxy();
    ep.all('key', function (key) {
        req.flash('info', {message: '添加成功'});
        res.redirect('/admin/selector_value_list?_id=' + _id);
    });

    Selector.updateValues(_id, value, ep.done('key'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getValueEdit = function (req, res, next) {
    const _id = req.query._id;
    const id = req.query.id;

    const ep = new eventproxy();
    ep.all('model', function (model) {
        var m = model.values.filter((x) => {
            return x.id == id;
        });
        res.render('admin/selector_value_edit', {
            _id: _id,
            model: m,
            layout: 'admin'
        });
    });

    Selector.getById_Admin(_id, ep.done('model'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}
exports.postValueEdit = function (req, res, next) {
    const _id = req.body._id;
    const id = req.body.id;
    const title = req.body.title;
    const alias = req.body.alias;
    const sort = req.body.sort;
    const isVisible = req.body.isVisible;

    const ep = new eventproxy();
    ep.all('selector', function (selector) {
        req.flash('info', {message: '修改成功'});
        res.redirect('/admin/selector_value_list?_id=' + _id);
    });

    Selector.updateValueModel(_id, id, title, alias, sort, isVisible, ep.done('selector'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.getValueList = function (req, res, next) {
    const _id = req.query._id;

    const ep = new eventproxy();
    ep.all('model', function (model) {
        res.render('admin/selector_value_list', {
            model: model,
            layout: 'admin'
        });
    });

    Selector.getById_Admin(_id, ep.done('model'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}