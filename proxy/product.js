const models = require('../models');
const Product = models.Product;

/**
 * 根据产品类别，获取产品的数量
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - count, 产品的数量
 * @param {Number} type 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 * @param {Function} callback 获取消息数量
 */
exports.getProductCount = function (type, callback) {
    if (type) {
        Product.count({
            type: type
        }, callback);
    } else {
        Product.count({}, callback);
    }
};

/**
 * 根据产品Id获取产品
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - product, 产品的数量
 * @param {Number} type 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 * @param {Function} callback 获取的产品
 */
exports.getProductById = function (id, callback) {
    Product.findOne({
        Id: id
    }, callback);
}


/**
 * 根据产品类别获取产品列表
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - products, 产品列表
 * @param {Number} type 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 * @param {Function} callback 获取消息数量
 */
exports.getProductByType = function (type, callback) {
    if (type) {
        Product.find({
            type: type
        }, callback);
    } else {
        Product.find({}, callback);
    }
};


exports.newAndSave = function (type, title, content, price, description, sliderPics, skPic, code, count, callback) {
    var product = new Product();
    product.type = type;
    product.title = title;
    product.content = content;
    product.price = price;
    product.description = description;
    product.sliderPics = sliderPics;
    product.skPic = skPic;
    product.code = code;
    product.count = count;

    product.save(callback);
};