const models = require('../models');
const WebSite = models.WebSite;

/**
 * 获取网站配置信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.get = function (callback) {
    WebSite.findOne({}, callback);
};


/**
 * 更新网站配置信息
 * @param {Function} callback 回调函数
 */
exports.update = function (_id, title, keywords, description, copyright, address, icp, tel, qq, weibo, callback) {
    WebSite.findOne({ _id: _id }, function (err, website) {
        if (err || !website) {
            return callback(err);
        }
        website.title = title;
        website.keywords = keywords;
        website.description = description;
        website.title = title;
        website.copyright = copyright;
        website.address = address;
        website.icp = icp;
        website.tel = tel;
        website.qq = qq;
        website.weibo = weibo;
        website.lastModifyTime = new Date();
        website.save(callback);
    });
};

/**
 * 新增网站配置信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title, keywords, description, copyright, address, icp, tel, qq, weibo, callback) {
    var website = new WebSite();
    website.title = title;
    website.description = description;
    website.keywords = keywords;
    website.copyright = copyright;
    website.address = address;
    website.icp = icp;
    website.qq = qq;
    website.weibo = weibo;
    website.tel = tel;

    website.save(callback);
};
