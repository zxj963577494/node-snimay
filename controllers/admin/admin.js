const eventproxy = require('eventproxy');
const Consult = require('../../proxy').Consult;

exports.get = function (req, res, next) {
    const ep = new eventproxy();
    ep.all('notReadCount', function (notReadCount) {
        res.render('/admin', {
            admin: {
                notReadCount: notReadCount
            },
            layout: 'admin'
        });
    });

    Consult.getNotReadCount(ep.done('notReadCount'));

    ep.fail(function (err) {
        if (err) {
            return next(err);
        }
    });
}

