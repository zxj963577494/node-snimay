const models = require('../models');
const SelectorValue = models.SelectorValue;

/**
 * 获取所有分类
 * Callback:
 * - err, 数据库异常
 * @param {Object} ops 附加条件
 * @param {Function} callback 回调函数
 */
exports.getAll = function (ops, callback) {
    SelectorValue.find({}, callback);
};


/**
 * 根据分类级别获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Object} options 附加条件
 * @param {Function} callback 回调函数
 */
exports.getSelectorKeys = function (options, callback) {
    SelectorValue.find(options, 'id title values', { sort: '-sort' }, callback);
};

/**
 * 根据上级ID获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Number} cid 类别ID
 * @param {Object} options 附加条件
 * @param {Function} callback 回调函数
 */
exports.getByCid = function (cid, options, callback) {
    SelectorValue.find(_.assign({ cid: cid},options), 'id title values', { sort: '-sort' }, callback);
};


/**
 * 
 * Callback:
 * - err, 数据库异常
 * @param {Number} cid 类别ID
 * @param {Object} options 附加条件
 * @param {Function} callback 回调函数
 */
exports.getWithKey = function (cid, options, callback) {
    SelectorValue.find(options, 'id title', { sort: '-sort' }).populate({ path: 'kid', match: options, select: 'id title'}).exec(callback);
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, kid, isVisible, sort, callback) {
    var SelectorValue = new SelectorValue();
    selectorValue.kid = kid;
    selectorValue.title = title;
    selectorValue.isVisible = isVisible;
    selectorValue.sort = sort;

    selectorValue.save(callback);
};
