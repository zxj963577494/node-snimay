const eventproxy = require('eventproxy');
const WebSite = require('../proxy').WebSite;
const Product = require('../proxy').Product;
const Category = require('../proxy').Category;
const Banner = require('../proxy').Banner;
const SelectorKey = require('../proxy').SelectorKey;
const SelectorValue = require('../proxy').SelectorValue;

exports.get = function (req, res, next) {
    var title = '空间';
    var cid = 1;
    var isVisible = 1;
    var sort = 1;
    SelectorKey.newAndSave(title, cid, isVisible, sort, function (err, result) {
        res.render('home')
    });
}
