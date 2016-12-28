const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 产品
const ProductSchema = mongoose.Schema({
    _id: { type: String},
    id: { type: Number, default: 0 },
    tags: [],
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
    mongoose.model('Product').findByIdAndUpdate({ _id: 'caid' }, { $inc: { id: 1 } }, { "upsert": true, "new": true }, function (error, counter) {
        if (error)
            return next(error);
        self.id = counter.id;
        next();
    });
});

mongoose.model('Product', ProductSchema);