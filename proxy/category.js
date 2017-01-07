const _ = require('lodash')
const models = require('../models');
const Category = models.Category;

/**
 * 获取所有分类
 * Callback:
 * - err, 数据库异常
 * @param {{}}} options 附加条件
 * @param {Function} callback 回调函数
 */
exports.get = function (options, callback) {
    Category.find(options, callback);
};

/**
 * 根据分类级别获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.getCategories = function (options, callback) {
    Category.find(options, 'title alias', { sort: '-sort' }, callback);
};

exports.getCategories_Admin = function (options, callback) {
    Category.find(options, '_id title alias isVisible sort', { sort: '-sort' }, callback);
};

exports.getById_Admin = function (_id, callback) {
    Category.find({ _id: _id }, '_id title alias isVisible sort', { sort: '-sort' }, callback);
};

exports.update = function (_id, title, sort, isVisible, callback) {
    Category.findOne({ _id: _id }, function (err, category) {
        if (err || !category) {
            return callback(err);
        }
        category.title = title;
        category.sort = sort;
        category.isVisible = isVisible;
        category.lastModifyTime = new Date();
        category.save(callback);
    });
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, alias, isVisible, sort, callback) {
    var category = new Category();
    category.title = title;
    category.alias = alias;
    category.isVisible = isVisible;
    category.sort = sort;

    category.save(callback);
};
