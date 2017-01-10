const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebSiteSchema = mongoose.Schema({
    host: String,
    title: String,
    description: String,
    keywords: String,
    author: { type: String, default: 'xujiang zheng' },
    copyright: String,
    address: String,
    icp: String,
    qq: String,
    weibo: String,
    tel: String,
    lastModifyTime: { type: Date, default: Date.now }
});

mongoose.model('WebSite', WebSiteSchema);

