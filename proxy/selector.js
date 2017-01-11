const _ = require('lodash')
const models = require('../models');
const Selector = models.Selector;

/**
 * 获取所有分类
 * Callback:
 * - err, 数据库异常
 * @param {{}}} options 附加条件
 * @param {Function} callback 回调函数
 */
exports.getAll = function (options, callback) {
    Selector.find(options, callback);
};


/**
 * 根据条件获取
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.getSelectors = function (options, callback) {
    Selector.find(options, 'id title values alias', { sort: '-sort' }, callback);
};

/**
 * 根据类别ID获取筛选条件
 * Callback:
 * - err, 数据库异常
 * @param {Number} cid 类别ID
 * @param {Number} isVisible 是否显示，默认:1
 * @param {Function} callback 回调函数
 */
exports.getByCid = function (cid, options, callback) {
    Selector.find(Object.assign({ cid: cid }, options), 'id title values alias', { sort: '-sort' }, callback);
};


exports.getByCid_Admin = function (cid, options, callback) {
    Selector.find(Object.assign({ cid: cid }, options), '_id title values sort alias isVisible', { sort: '-sort' }, callback);
};

exports.getById_Admin = function (_id, callback) {
    Selector.findOne({ _id: _id }, '_id title values sort alias isVisible', { 'values.sort': '-sort' }, callback);
};

exports.update = function (_id, title, alias, sort, isVisible, callback) {
    Selector.findOne({ _id: _id }, function (err, selector) {
        if (err || !selector) {
            return callback(err);
        }
        selector.title = title;
        selector.alias = alias;
        selector.sort = sort;
        selector.isVisible = isVisible;
        selector.lastModifyTime = new Date();
        selector.save(callback);
    });
};

exports.updateValues = function (_id, value, callback) {
    Selector.findOne({ _id: _id }, function (err, selector) {
        if (err || !selector) {
            return callback(err);
        }
        selector.values.push(value);
        selector.lastModifyTime = new Date();
        selector.save(callback);
    });
};

exports.updateValueModel = function (_id, id, title, alias, sort, isVisible, callback) {
    Selector.findOne({ _id: _id }, function (err, selector) {
        if (err || !selector) {
            return callback(err);
        }
        selector.values.forEach((x) => {
            if (x.id === id) {
                x.title = title;
                x.alias = alias;
                x.sort = sort;
                x.isVisible = isVisible;
            }
        });
        selector.lastModifyTime = new Date();
        selector.save(callback);
    });
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, alias, cid, isVisible, sort, values, callback) {
    var selector = new Selector();
    selector.cid = cid;
    selector.title = title;
    selector.alias = alias;
    selector.isVisible = isVisible;
    selector.sort = sort;
    selector.values = values

    selector.save(callback);
};

