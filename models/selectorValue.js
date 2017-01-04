const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 搜索Value
const SelectorValueSchema = mongoose.Schema({
    id: { type: Number, default: 0 },
    kid: { type: Number, ref: 'SelectorKey' },
    title: String,
    isVisible: Number,
    sort: Number,
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: {
        type: Date,
        default: Date.now
    }
});

SelectorValueSchema.index({createTime: -1});
SelectorValueSchema.index({id: 1});
SelectorValueSchema.index({sort: -1});

SelectorValueSchema.plugin(autoIncrement.plugin, {
    model: 'SelectorValue', 
    field: 'id', 
    startAt: 1,
    incrementBy: 1
});

mongoose.model('SelectorValue', SelectorValueSchema);