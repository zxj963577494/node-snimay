const models = require('../models');
const Category = models.Category;

/**
 * 获取所有分类
 * Callback:
 * - err, 数据库异常
 * @param {{}}} ops 附加条件
 * @param {Function} callback 回调函数
 */
exports.get = function (ops, callback) {
    Category.find({}, callback);
};


/**
 * 根据分类级别获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Number} rank 分类级别
 * @param {Number} sort 排序 正序：'1' 倒叙：'-1'
 * @param {Function} callback 回调函数
 */
exports.getByRank = function (rank, sort, callback) {
    Category.find({rank: rank, isVisible: 1}, 'title tag', {sort: ((sort > 0 ? '' : '-') + 'sort')}, callback);
};

/**
 * 根据上级ID获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Number} reid 上级ID
 * @param {Number} sort 排序 正序：'1' 倒叙：'-1'
 * @param {Function} callback 回调函数
 */
exports.getByReid = function (reid, sort, callback) {
    Category.find({reid: reid, isVisible: 1}, {}, {sort: (sort > 0 ? '' : '-') + 'sort'}, callback);
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, reid, isVisible, rank, sort, tag, callback) {
    var category = new Category();
    category.title = title;
    category.reid = reid;
    category.isVisible = isVisible;
    category.rank = rank;
    category.sort = sort;
    category.tag = tag;

    category.save(callback);
};
