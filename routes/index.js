const global = require('../middlewares/global');
const home = require('../controllers/home');
const products = require('../controllers/products')

module.exports = function (app) {
    app.use(global.init);
    app.get('/', home.get);
    app.use('/products', products.get);
    app.use('/dingzhi', products.get);
    app.use('/peitao', products.get);
    app.use('/single', products.get);
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    app.use('/about', products.get);
    app.use('/contact', products.get);
    
    app.use(function (req, res, next) {
        res.status(404);
        res.render('404', { layout: false });
    });
    app.use(function (err, req, res, next) {
        res.status(500);
        res.render('500');
    });
};

