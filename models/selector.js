const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 搜索
const SelectorSchema = mongoose.Schema({
    id: { type: Number, default: 0 },
    categoryRef: { type: Schema.Types.ObjectId, ref: 'Category' },
    cid: Number,
    title: String,
    isVisible: Number,
    sort: Number,
    alias: String,
    values: [{
        title: String,
        isVisible: Number,
        alias: String,
        sort: Number,
    }],
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: {
        type: Date,
        default: Date.now
    }
});

SelectorSchema.plugin(autoIncrement.plugin, {
    model: 'Selector',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Selector', SelectorSchema);