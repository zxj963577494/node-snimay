const mongoose = require('mongoose');
const config = require('config-lite');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.connect(config.mongodb, {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        logger.error('connect to %s error: ', config.mongodb, err.message);
        process.exit(1);
    }
});

autoIncrement.initialize(connection);

// models
require('./website');
require('./product');
require('./category');

exports.WebSite = mongoose.model('WebSite');
exports.Product = mongoose.model('Product');
exports.Category = mongoose.model('Category');

