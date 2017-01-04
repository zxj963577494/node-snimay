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
    Selector.find(_.assign({ cid: cid }, options), 'id title values alias', { sort: '-sort' }, callback);
};

/**
 * 更新分类信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, cid, isVisible, sort, values, callback) {
    var selector = new Selector();
    selector.cid = cid;
    selector.title = title;
    selector.isVisible = isVisible;
    selector.sort = sort;
    selector.values = values

    selector.save(callback);
};
