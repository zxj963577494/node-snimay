const models = require('../models');
const Tag = models.Tag;

/**
 * 获取所有分类
 * Callback:
 * - err, 数据库异常
 * @param {{}}} ops 附加条件
 * @param {Function} callback 回调函数
 */
exports.get = function (ops, callback) {
    Tag.find({}, callback);
};

/**
 * 根据类别获取标签
 * Callback:
 * - err, 数据库异常
 * @param {Number} cid 类别id
 * @param {Number} sort 排序 正序：'1' 倒叙：'-1'
 * @param {Function} callback 回调函数
 */
exports.getByRank = function (cid, sort, callback) {
    Tag.find({cid: cid, isVisible: 1}, 'title tag', {sort: ((sort > 0 ? '' : '-') + 'sort')}, callback);
};

/**
 * 根据标签级别获取标签
 * Callback:
 * - err, 数据库异常
 * @param {Number} rank 标签级别
 * @param {Number} sort 排序 正序：'1' 倒叙：'-1'
 * @param {Function} callback 回调函数
 */
exports.getByRank = function (rank, sort, callback) {
    Tag.find({rank: rank, isVisible: 1}, 'title tag', {sort: ((sort > 0 ? '' : '-') + 'sort')}, callback);
};

/**
 * 根据上级ID获取标签
 * Callback:
 * - err, 数据库异常
 * @param {Number} reid 上级ID
 * @param {Number} sort 排序 正序：'1' 倒叙：'-1'
 * @param {Function} callback 回调函数
 */
exports.getByReid = function (reid, sort, callback) {
    Tag.find({reid: reid, isVisible: 1}, {}, {sort: (sort > 0 ? '' : '-') + 'sort'}, callback);
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (_id, cid, title, reid, isVisible, rank, sort, tag, callback) {
    var tag = new Category();
    tag._id = _id;
    tag.cid = cid;
    tag.title = title;
    tag.reid = reid;
    tag.isVisible = isVisible;
    tag.rank = rank;
    tag.sort = sort;
    tag.tag = tag;

    category.save(callback);
};
