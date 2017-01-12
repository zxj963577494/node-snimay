exports.init = function (req, res, next) {
  res.locals.errors = req.flash('error')
  res.locals.infos = req.flash('info')
  next()
}
