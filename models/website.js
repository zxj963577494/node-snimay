const mongoose = require('mongoose');
const uuid = require('node-uuid');
const Schema = mongoose.Schema;

const WebSiteSchema = mongoose.Schema({
    _id: { type: String, default: uuid.v4() },
    title: { type: String, default: '诗尼曼' },
    description: { type: String, default: '诗尼曼' },
    keywords: { type: String, default: '诗尼曼' },
    author: { type: String, default: 'xujiang zheng' },
    copyright: String,
    address: String,
    icp: String,
    qq: String,
    weibo: String,
    tel: String,
    companyDesc: String,
    lastModifyTime: { type: Date, default: Date.now }
});

mongoose.model('WebSite', WebSiteSchema);

