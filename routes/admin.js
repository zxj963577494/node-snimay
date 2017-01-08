const express = require('express');
const router = express.Router();
const siteconfig = require('../controllers/admin/siteconfig');
const selector = require('../controllers/admin/selector');
const category = require('../controllers/admin/category');
const product = require('../controllers/admin/product');



router.get('/', function (req, res, next) {
    res.render('admin/home', {
        layout: 'admin'
    });
});

router.get('/qiniu', function (req, res, next) {
    res.render('admin/qiniu', {
        layout: 'admin'
    });
});

router.get('/siteconfig', siteconfig.get);
router.post('/siteconfig', siteconfig.update);

router.get('/selector_key_add', selector.getKeyAdd);
router.post('/selector_key_add', selector.postKeyAdd);
router.get('/selector_key_edit', selector.getKeyEdit);
router.post('/selector_key_edit', selector.postKeyEdit);
router.get('/selector_key_list', selector.getKeyList);
router.get('/selector_value_add', selector.getValueAdd);
router.post('/selector_value_add', selector.postValueAdd);
router.get('/selector_value_edit', selector.getValueEdit);
router.post('/selector_value_edit', selector.postValueEdit);
router.get('/selector_value_list', selector.getValueList);

router.get('/category_list', category.getList);
router.get('/category_edit', category.getEdit);
router.post('/category_edit', category.postEdit);

router.get('/product_list', product.getList);
router.get('/product_add', product.getAdd);
router.post('/product_add', product.postAdd);

module.exports = router;