const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// 分类
const CategorySchema = mongoose.Schema({
  id: { type: Number, default: 0 },
  title: String,
  isVisible: Number,
  sort: Number,
  alias: String,
  keys: [],
  createTime: {
    type: Date,
    default: Date.now
  },
  lastModifyTime: {
    type: Date,
    default: Date.now
  }
})

CategorySchema.plugin(autoIncrement.plugin, {
  model: 'Category',
  field: 'id',
  startAt: 4,
  incrementBy: 1
})

mongoose.model('Category', CategorySchema)
