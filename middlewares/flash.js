exports.init = function (req, res, next) {
    res.locals = {
        errors: req.flash('error'),
        infos: req.flash('info')
    };
    next();
}