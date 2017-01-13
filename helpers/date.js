const moment = require('moment')

const date = function (date, format) {
  return moment(date).format(format)
}
module.exports = date
