const WebSite = require('../proxy').WebSite;

exports.get = function (req, res, next) {
    WebSite.get(function(err, website) {
        console.log(website)
        if (err) {
            return next(err);
        }
        if (!website) {
            //res.render404('这个用户不存在。');
            return;
        } 
        res.render('home')
    });
}

exports.save = function (req, res, next) {
    var title = "诗尼曼";
    var description = "诗尼曼";
    var keywords = "诗尼曼";
    var copyright = "Copyright &copy; 2016.Company name All rights reserved.";
    var address = "杭州市";
    var icp = "备案号：闽ICP备15012807号-1";
    var qq = "964324234";
    var weibo = "weibo";
    var tel = "13666856912";
    WebSite.save(title, description, keywords, copyright, address, icp, qq, weibo, tel, function(err, result) {
        if (err) {
            return next(err);
        }
        console.log(result);
    });
}

