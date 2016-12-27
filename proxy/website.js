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
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.save = function (title, description, keywords, copyright, address, icp, qq, weibo, tel, companyDesc, callback) {
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
    website.companyDesc = companyDesc;

    website.save(callback);
};
