const _ = require('lodash')
const models = require('../models');
const SelectorKey = models.SelectorKey;

/**
 * 获取所有分类
 * Callback:
 * - err, 数据库异常
 * @param {{}}} options 附加条件
 * @param {Function} callback 回调函数
 */
exports.getAll = function (options, callback) {
    SelectorKey.find(options, callback);
};


/**
 * 根据分类级别获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Number} isVisible 是否显示，默认:1
 * @param {Function} callback 回调函数
 */
exports.getSelectorKeys = function (options, callback) {
    SelectorKey.find(options, 'id title values', { sort: '-sort' }, callback);
};

/**
 * 根据上级ID获取分类
 * Callback:
 * - err, 数据库异常
 * @param {Number} cid 类别ID
 * @param {Number} isVisible 是否显示，默认:1
 * @param {Function} callback 回调函数
 */
exports.getByCid = function (cid, options, callback) {
    SelectorKey.find(_.assign({ cid: cid }, options), 'id title values', { sort: '-sort' }, callback);
};


/**
 * 
 * Callback:
 * - err, 数据库异常
 * @param {Number} cid 类别ID
 * @param {Number} isVisible 是否显示，默认:1
 * @param {Function} callback 回调函数
 */
exports.getWithValues = function (cid, options, callback) {
    SelectorKey.find(_.assign({ cid: cid }, options), 'id title values', { sort: '-sort' }).populate({ path: 'values', match: options, select: 'id title', options: { sort: { sort: -1 } } }).exec(callback);
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, cid, isVisible, sort, callback) {
    var selectorKey = new SelectorKey();
    selectorKey.cid = cid;
    selectorKey.title = title;
    selectorKey.isVisible = isVisible;
    selectorKey.sort = sort;

    selectorKey.save(callback);
};
