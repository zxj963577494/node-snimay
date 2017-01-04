const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const BannerSchema = mongoose.Schema({
    id: { type: Number, default: 0 },
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

BannerSchema.plugin(autoIncrement.plugin, {
    model: 'Banner',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Banner', BannerSchema);

