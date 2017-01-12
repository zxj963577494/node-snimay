const express = require('express')
const router = express.Router()
const siteconfig = require('../controllers/admin/siteconfig')
const selector = require('../controllers/admin/selector')
const category = require('../controllers/admin/category')
const product = require('../controllers/admin/product')
const banner = require('../controllers/admin/banner')
const consult = require('../controllers/admin/consult')
const user = require('../controllers/admin/user')
const home = require('../controllers/admin/home')
const signout = require('../controllers/admin/signout')
const fileupload = require('../controllers/admin/fileupload')
const auth = require('../middlewares/auth')

router.use(auth.authUser)

router.use(auth.userRequired)

router.get('/', home.get)
router.get('/home', home.get)

router.get('/siteconfig', siteconfig.get)
router.post('/siteconfig', siteconfig.update)

router.get('/selector_key_add', selector.getKeyAdd)
router.post('/selector_key_add', selector.postKeyAdd)
router.get('/selector_key_edit', selector.getKeyEdit)
router.post('/selector_key_edit', selector.postKeyEdit)
router.get('/selector_key_list', selector.getKeyList)
router.get('/selector_value_add', selector.getValueAdd)
router.post('/selector_value_add', selector.postValueAdd)
router.get('/selector_value_edit', selector.getValueEdit)
router.post('/selector_value_edit', selector.postValueEdit)
router.get('/selector_value_list', selector.getValueList)

router.get('/category_list', category.getList)
router.get('/category_edit', category.getEdit)
router.post('/category_edit', category.postEdit)

router.get('/product_list', product.getList)
router.get('/product_add', product.getAdd)
router.post('/product_add', product.postAdd)
router.get('/product_edit', product.getEdit)
router.post('/product_edit', product.postEdit)
router.get('/product_remove', product.getRemove)

router.get('/banner_list', banner.getList)
router.get('/banner_add', banner.getAdd)
router.post('/banner_add', banner.postAdd)
router.get('/banner_edit', banner.getEdit)
router.post('/banner_edit', banner.postEdit)
router.get('/banner_remove', banner.getRemove)

router.get('/consult_list', consult.getList)
router.get('/consult_edit', consult.getEdit)
router.post('/consult_edit', consult.postEdit)
router.get('/consult_remove', consult.getRemove)

router.get('/user_list', user.getList)
router.get('/user_edit', user.getEdit)
router.post('/user_edit', user.postEdit)
router.get('/user_add', user.getAdd)
router.post('/user_add', user.postAdd)
router.get('/user_remove', user.getRemove)

router.get('/signout', signout.signout)

router.post('/fileupload', fileupload.upload)

module.exports = router
