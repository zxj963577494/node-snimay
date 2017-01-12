const autoIncrement = require('mongoose-auto-increment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 产品
const ProductSchema = mongoose.Schema({
  id: { type: Number, default: 0 },
  categoryRef: { type: Schema.Types.ObjectId, ref: 'Category' },
  cid: Number,
  title: String,
  search: [],
  where: [],
  tag: [],
  price: Number,
  description: String,
  content: String,
  sliderPics: [],
  skPic: String,
  code: String,
  part: String,
  isVisible: Number,
  isIndex: Number,
  createTime: {
    type: Date,
    default: Date.now
  },
  lastModifyTime: {
    type: Date,
    default: Date.now
  }
})

ProductSchema.plugin(autoIncrement.plugin, {
  model: 'Product',
  field: 'id',
  startAt: 1,
  incrementBy: 1
})

mongoose.model('Product', ProductSchema)
