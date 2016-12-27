const mongoose = require('mongoose');
const uuid = require('node-uuid');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// 产品
const ProductSchema = mongoose.Schema({
    type: Number, // 1.产品体验2.定制家具3.配套家具
    title: String,
    price: Number,
    description: String,
    content: String,
    sliderPics: [],
    skPic: String,
    code: String,
    count: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(autoIncrement.plugin, {
    model: 'Product',
    startAt: 1
});

mongoose.model('Product', ProductSchema);