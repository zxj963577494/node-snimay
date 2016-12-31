const express = require('express');
const global = require('../middlewares/global');
const home = require('../controllers/home');
const products = require('../controllers/products')
const dingzhi = require('../controllers/dingzhi')
const peitao = require('../controllers/peitao')

const router = express.Router();

router.use(global.init);
router.get('/', home.get);
router.get('/products', products.get);
router.get('/dingzhi', dingzhi.get);
router.get('/peitao', peitao.get);
router.get('/single', products.get);
router.get('/signup', require('./signup'));
router.get('/signin', require('./signin'));
router.get('/signout', require('./signout'));
router.get('/posts', require('./posts'));
router.get('/about', products.get);
router.get('/contact', products.get);

router.use(function (req, res, next) {
    res.status(404);
    res.render('404', {
        layout: false
    });
});
router.use(function (err, req, res, next) {
    res.status(500);
    res.render('500');
});

module.exports = router;