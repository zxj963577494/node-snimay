const WebSite = require('../proxy').WebSite;

exports.init = function (req, res, next) {
    WebSite.get(function (err, website) {
            console.log(website)
            if (err) {
                return next(err);
            }
            if (!website) {
                //res.render404('这个用户不存在。');
                return;
            }
            res.locals.website = website;
            next();
        });
}