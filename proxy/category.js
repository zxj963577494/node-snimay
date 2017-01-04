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
