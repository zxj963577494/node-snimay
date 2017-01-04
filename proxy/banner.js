const _ = require('lodash')
const models = require('../models');
const Banner = models.Banner;

/**
 * 获取Banner
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - count, 产品的数量
 * @param {Function} callback 获取消息数量
 */
exports.getBanners = function (options, callback) {
    Banner.find(_.assign({ startTime: { "$lte": new Date() }, endTime: { $gt: new Date() } }, options), {}, { sort: '-sort' }, callback);
};

/**
 * 根据Id获取Banner
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - product, 产品的数量
 * @param {Number} id 
 * @param {Function} callback 获取的Banner
 */
exports.getBannerById = function (id, callback) {
    Product.findOne({
        _id: id
    }, callback);
}

/**
 * 新增、保存 
 * 
 * @param {String} 标题
 * @param {Number} 价格(可以为空)
 * @param {String} 描述
 * @param {String} 链接
 * @param {String} 图片
 * @param {Date} 开始时间
 * @param {Date} 结束时间
 * @param {Number} 是否启用
 * @param {Number} 排序
 * @param {Function} callback 回调函数
 * 
 */
exports.newAndSave = function (title, price, description, link, pic, startTime, endTime, isVisible, sort, callback) {
    var banner = new Banner();
    banner.title = title;
    banner.price = price;
    banner.description = description;
    banner.link = link;
    banner.pic = pic;
    banner.startTime = startTime;
    banner.endTime = endTime;
    banner.isVisible = isVisible;
    banner.sort = sort;

    banner.save(callback);
};