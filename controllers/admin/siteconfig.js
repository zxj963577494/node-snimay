const eventproxy = require('eventproxy');
const WebSite = require('../../proxy').WebSite;

exports.get = function (req, res, next) {
    const ep = new eventproxy();
    ep.all('website', function (website) {
        res.render('admin/siteconfig', {
            website: website,
            layout: 'admin'
        });
    });

    WebSite.get(ep.done('website'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.update = function (req, res, next) {
    const _id = req.body._id;
    const title = req.body.title;
    const keywords = req.body.keywords;
    const description = req.body.description;
    const copyright = req.body.copyright;
    const address = req.body.address;
    const icp = req.body.icp;
    const tel = req.body.tel;
    const qq = req.body.qq;
    const weibo = req.body.weibo;

    const ep = new eventproxy();
    ep.all('website', function (website) {
        res.render('admin/siteconfig', {
            website: website,
            layout: 'admin'
        });
    });

    WebSite.update(_id, title, keywords, description, copyright, address, icp, tel, qq, weibo, ep.done('website'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

exports.add = function (req, res, next) {
    const title = req.body.title;
    const keywords = req.body.keywords;
    const description = req.body.description;
    const copyright = req.body.copyright;
    const address = req.body.address;
    const icp = req.body.icp;
    const tel = req.body.tel;
    const qq = req.body.qq;
    const weibo = req.body.weibo;

    const ep = new eventproxy();
    ep.all('website', function (website) {
        res.render('admin/siteconfig', {
            website: website,
            layout: 'admin'
        });
    });

    WebSite.newAndSave(title, keywords, description, copyright, address, icp, tel, qq, weibo, ep.done('website'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}