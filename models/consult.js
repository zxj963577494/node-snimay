const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 用户咨询
const ConsultSchema = mongoose.Schema({
    name: String,
    tel: String,
    isRead: Number,
    remark: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    lastModifyTime: { type: Date, default: Date.now }
});

mongoose.model('Consult', ConsultSchema);

