const eventproxy = require('eventproxy');
const Consult = require('../proxy').Consult;


exports.init = function (req, res, next) {
    const ep = new eventproxy();
    ep.all('notReadCount', function (notReadCount) {
        res.locals.admin = {
            notReadCount: notReadCount
        };
        next();
    })

    Consult.getNotReadCount(ep.done('notReadCount'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}