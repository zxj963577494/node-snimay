exports.init = function (req, res, next) {
  res.locals.csrf = req.csrfToken()
  next()
}
