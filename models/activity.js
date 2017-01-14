const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const ActivitySchema = mongoose.Schema({
  id: { type: Number, default: 0 },
  title: String,
  description: String,
  pic: String,
  startTime: Date,
  endTime: Date,
  content: String,
  isVisible: Number,
  createTime: {
    type: Date,
    default: Date.now
  },
  lastModifyTime: { type: Date, default: Date.now }
})

ActivitySchema.plugin(autoIncrement.plugin, {
  model: 'Activity',
  field: 'id',
  startAt: 1,
  incrementBy: 1
})

mongoose.model('Activity', ActivitySchema)

