const _ = require('lodash');

function filter_categories(categories, cid, tid) {
    var cates = [];
    for (var x of categories) {
        const active = x._id === cid ? {
            isActive: 1
        } : {
            isActive: 0
        };
        const clink = {
            link: '/products?cid=' + x._id + '&tid=' + tid
        };
        cates.push(_.assign(x, active, clink))
    }
    return cates;
}

function filter_tags(tags, cid, tid) {
    var ts = [];
    for (var y of tags) {
        for (z of y.sid) {
            const active = z._id === tid ? {
                isActive: 1
            } : {
                isActive: 0
            };
            const tlink = {
                link: '/products?cid=' + cid + '&tid=' + z._id
            };
            ts.sid = [];
            ts.sid.push(_.assign(z, active, tlink));
        }
        ts.push(y)
    }
    return ts;
}

module.exports = {
    filter_categories,
    filter_tags
}