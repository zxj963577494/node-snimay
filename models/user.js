const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  userid: String,
  name: String,
  password: String,
  email: String,
  isEnable: Number,
  signature: String,
  createTime: {
    type: Date,
    default: Date.now
  },
  token: String,
  lastModifyTime: { type: Date, default: Date.now }
})

mongoose.model('User', UserSchema)

