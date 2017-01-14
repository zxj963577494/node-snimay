const hbs = require('express-hbs')
const helpers = {}

helpers.date = require('./date')
helpers.groupedEach = require('./groupedEach')
helpers.setChecked = require('./setChecked')
helpers.addOne = require('./addOne')
helpers.iff = require('./iff')
helpers.toSelect2 = require('./toSelect2')
helpers.activityTimer = require('./activityTimer')


function registerThemeHelper (name, fn) {
  hbs.registerHelper(name, fn)
}

const registerHelpers = function () {
  registerThemeHelper('date', helpers.date)
  registerThemeHelper('groupedEach', helpers.groupedEach)
  registerThemeHelper('setChecked', helpers.setChecked)
  registerThemeHelper('addOne', helpers.addOne)
  registerThemeHelper('iff', helpers.iff)
  registerThemeHelper('toSelect2', helpers.toSelect2)
  registerThemeHelper('activityTimer', helpers.activityTimer)
}

module.exports = helpers
module.exports.loadHelpers = registerHelpers
module.exports.registerThemeHelper = registerThemeHelper
