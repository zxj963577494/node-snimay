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

function filter_keys(keys, params) {
    for (var y of keys) {
        for (var x of params) {
            for (var k of Object.keys(x)) {
                if (y.alias === k) {
                    for (var z of y.values) {
                        var active;
                        if (z.alias === x[k]) {
                            active = {
                                isActive: 1
                            }
                        } else {
                            active = {
                                isActive: 0
                            }
                        };
                        _.assign(z, active)
                    }
                }
            }
        }
    }
}

module.exports = {
    filter_categories,
    filter_keys
}