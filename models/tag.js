const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 分类
const TagSchema = mongoose.Schema({
    _id: { type: Number, default: 0 },
    counterValue: { type: Number, default: 0 }, // 辅助计数器，自增
    title: String,
    reid: Number,
    isVisible: Number,
    rank: Number,
    sort: Number,
    tag: String,
    cid: Number,
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: {
        type: Date,
        default: Date.now
    }
});

TagSchema.pre('save', function (next) {
    var self = this;
    mongoose.model('Tag').findByIdAndUpdate({ _id: 0 }, { $inc: { counterValue: 1 } }, { "upsert": true, "new": true }, function (error, counter) {
        if (error)
            return next(error);
        self._id = counter.counterValue;
        next();
    });
});

mongoose.model('Tag', TagSchema);