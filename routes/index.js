var global = require('../middlewares/global');
var home = require('../controllers/home');

module.exports = function (app) {
    app.use(global.init);
    app.get('/', home.get);
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    app.use('/about', require('./about'));
    app.use('/contact', require('./contact'));
    app.use('/product', require('./product'));
    app.use('/single', require('./single'));
    
    app.use(function (req, res, next) {
        res.status(404);
        res.render('404', { layout: false });
    });
    app.use(function (err, req, res, next) {
        res.status(500);
        res.render('500');
    });
};

