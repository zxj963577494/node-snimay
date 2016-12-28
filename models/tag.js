const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 分类
const TagSchema = mongoose.Schema({
    _id: { type: String},
    id: { type: Number, default: 0 },
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
    mongoose.model('Tag').findByIdAndUpdate({ _id: 'caid' }, { $inc: { id: 1 } }, { "upsert": true, "new": true }, function (error, counter) {
        if (error)
            return next(error);
        self.id = counter.id;
        next();
    });
});

mongoose.model('Tag', TagSchema);