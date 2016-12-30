const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerSchema = mongoose.Schema({
    _id: { type: Number, default: 0 },
    counterValue: { type: Number, default: 0 }, // 辅助计数器，自增
    title: String,
    description: String,
    price: Number,
    link: String,
    pic: String,
    startTime: Date,
    endTime: Date,
    isVisible: Number,
    sort: Number,
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: { type: Date, default: Date.now }
});

BannerSchema.pre('save', function (next) {
    var self = this;
    mongoose.model('Banner').findByIdAndUpdate({ _id: '0' }, { $inc: { counterValue: 1 } }, { "upsert": true, "new": true }, function (error, counter) {
        if (error)
            return next(error);
        self._id = counter.counterValue;
        next();
    });
});

mongoose.model('Banner', BannerSchema);

