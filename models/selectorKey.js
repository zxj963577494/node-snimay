const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 搜索key
const SelectorKeySchema = mongoose.Schema({
    id: { type: Number, default: 0 },
    cid: { type: Number, ref: 'Category'},
    title: String,
    isVisible: Number,
    sort: Number,
    values: [{type: Number, ref: 'SelectorValue'}],
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: {
        type: Date,
        default: Date.now
    }
});

SelectorKeySchema.index({createTime: -1});
SelectorKeySchema.index({id: 1});
SelectorKeySchema.index({sort: -1});

SelectorKeySchema.plugin(autoIncrement.plugin, {
    model: 'SelectorKey', 
    field: 'id', 
    startAt: 1,
    incrementBy: 1
});

mongoose.model('SelectorKey', SelectorKeySchema);