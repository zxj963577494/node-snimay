const express = require('express')
const router = express.Router()
const siteconfig = require('../controllers/admin/siteconfig')
const selector = require('../controllers/admin/selector')
const category = require('../controllers/admin/category')
const product = require('../controllers/admin/product')
const banner = require('../controllers/admin/banner')
const activity = require('../controllers/admin/activity')
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

router.get('/selector_key_add/:cid', selector.getKeyAdd)
router.post('/selector_key_add/:cid', selector.postKeyAdd)
router.get('/selector_key_edit/:cid/:_id', selector.getKeyEdit)
router.post('/selector_key_edit/:cid/:_id', selector.postKeyEdit)
router.get('/selector_key_list/:cid', selector.getKeyList)
router.get('/selector_key_remove/:_id', selector.getKeyRemove)

router.get('/selector_value_add/:_id', selector.getValueAdd)
router.post('/selector_value_add/:_id', selector.postValueAdd)
router.get('/selector_value_edit/:_id/:_sid', selector.getValueEdit)
router.post('/selector_value_edit/:_id/:_sid', selector.postValueEdit)
router.get('/selector_value_remove/:_id/:_sid', selector.getValueRemove)
router.get('/selector_value_list/:_id', selector.getValueList)

router.get('/category_list', category.getList)
router.get('/category_add', category.getAdd)
router.post('/category_add', category.postAdd)
router.get('/category_edit/:_id', category.getEdit)
router.post('/category_edit/:_id', category.postEdit)

router.get('/product_list/:cid', product.getList)
router.get('/product_add/:cid', product.getAdd)
router.post('/product_add', product.postAdd)
router.get('/product_edit/:cid/:_id', product.getEdit)
router.post('/product_edit/:_id', product.postEdit)
router.get('/product_remove/:_id', product.getRemove)

router.get('/banner_list', banner.getList)
router.get('/banner_add', banner.getAdd)
router.post('/banner_add', banner.postAdd)
router.get('/banner_edit/:_id', banner.getEdit)
router.post('/banner_edit/:_id', banner.postEdit)
router.get('/banner_remove/:_id', banner.getRemove)

router.get('/activity_list', activity.getList)
router.get('/activity_add', activity.getAdd)
router.post('/activity_add', activity.postAdd)
router.get('/activity_edit/:_id', activity.getEdit)
router.post('/activity_edit/:_id', activity.postEdit)
router.get('/activity_remove/:_id', activity.getRemove)

router.get('/consult_list', consult.getList)
router.get('/consult_edit/:_id', consult.getEdit)
router.post('/consult_edit/:_id', consult.postEdit)
router.get('/consult_remove/:_id', consult.getRemove)

router.get('/user_list', user.getList)
router.get('/user_add', user.getAdd)
router.post('/user_add', user.postAdd)
router.get('/user_edit/:_id', user.getEdit)
router.post('/user_edit/:_id', user.postEdit)
router.get('/user_remove/:_id', user.getRemove)

router.get('/signout', signout.signout)

router.post('/fileupload', fileupload.upload)

module.exports = router
