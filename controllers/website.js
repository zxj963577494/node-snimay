const WebSite = require('../proxy').WebSite;
const Product = require('../proxy').Product;

exports.get = function (req, res, next) {
    WebSite.get(function(err, website) {
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
    // var title = "诗尼曼";
    // var description = "诗尼曼";
    // var keywords = "诗尼曼";
    // var copyright = "Copyright &copy; 2016.Company name All rights reserved.";
    // var address = "杭州市";
    // var icp = "备案号：闽ICP备15012807号-1";
    // var qq = "964324234";
    // var weibo = "weibo";
    // var tel = "13666856912";
    // WebSite.save(title, description, keywords, copyright, address, icp, qq, weibo, tel, function(err, result) {
    //     if (err) {
    //         return next(err);
    //     }
    // });
    var type = 1;
    var title = '唐顿庄园-卧室';
    var content = '详细内容';
    var price = 100.00;
    var description = '唐顿庄园系列是诗尼曼2016年推出的高端全屋定制系列产品。设计灵感起源于英国著名电视剧《唐顿庄园》，剧中大气的府邸，考究的家具以及全剧中散发出的诚实、勇敢、自由，无不反应出当时贵族生活中的家族荣耀和传承精神。';
    var sliderPics = ['http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509529872.jpg', 'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509531749.jpg', 'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509534950.jpg', 'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509546439.jpg', 'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509543236.jpg'];
    var skPic = 'http://www.snimay.com/Uploads/goods/1468656683.jpg';
    var code = '001';
    var count = '';
    Product.newAndSave(type, title, content, price, description, sliderPics, skPic, code, count, function(err, result) {
        return next(err);
    });
}

