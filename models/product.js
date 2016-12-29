const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 产品
const ProductSchema = mongoose.Schema({
    _id: { type: Number, default: 0 },
    counterValue: { type: Number, default: 0 }, // 辅助计数器，自增
    tags: [{ type: Number, ref: 'Tag'}],
    cid: { type: Number, ref: 'Category' },
    title: String,
    search: [],
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

ProductSchema.pre('save', function (next) {
    var self = this;
    mongoose.model('Product').findByIdAndUpdate({ _id: 0 }, { $inc: { counterValue: 1 } }, { "upsert": true, "new": true }, function (error, counter) {
        if (error)
            return next(error);
        self._id = counter.counterValue;
        next();
    });
});

mongoose.model('Product', ProductSchema);