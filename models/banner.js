const mongoose = require('mongoose')

const BannerSchema = mongoose.Schema({
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
})

mongoose.model('Banner', BannerSchema)

