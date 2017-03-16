const express = require('express')
const Authorize = require('../../middlewares/ensureAuthorized')
const signin = require('../../api/signin')
const selectors = require('../../api/selectors')
const categories = require('../../api/categories')
const products = require('../../api/products')
const matches = require('../../api/matches')
const modes = require('../../api/modes')
const websites = require('../../api/websites')
const users = require('../../api/users')
const consults = require('../../api/consults')
const activities = require('../../api/activities')
const banners = require('../../api/banners')

const router = express.Router()

router.post('/signin', signin.login)

router.get('/categories/:_id', categories.Model)
router.get('/categories', categories.List)
router.post('/categories', Authorize.ensureAuthorized, categories.Add)
router.put('/categories/:_id', Authorize.ensureAuthorized, categories.Edit)
router.delete('/categories/:_id', Authorize.ensureAuthorized, categories.Delete)

router.get('/selectors/heads/:cid/:_id', selectors.HeadModel)
router.get('/selectors/heads/:cid', selectors.HeadList)
router.post('/selectors/heads/:cid', Authorize.ensureAuthorized, selectors.HeadAdd)
router.put('/selectors/heads/:_id', Authorize.ensureAuthorized, selectors.HeadEdit)
router.delete('/selectors/heads/:_id', Authorize.ensureAuthorized, selectors.HeadDelete)

router.get('/selectors/bodys/:_id/:_sid', selectors.BodyModel)
router.get('/selectors/bodys/:_id', selectors.BodyList)
router.post('/selectors/bodys/:_id', Authorize.ensureAuthorized, selectors.BodyAdd)
router.put('/selectors/bodys/:_id/:_sid', Authorize.ensureAuthorized, selectors.BodyEdit)
router.delete('/selectors/bodys/:_id/:_sid', Authorize.ensureAuthorized, selectors.BodyDelete)

router.get('/products/:_id', products.Model)
router.get('/products', products.List)
router.post('/products', Authorize.ensureAuthorized, products.Add)
router.put('/products/:_id', Authorize.ensureAuthorized, products.Edit)
router.delete('/products/:_id', Authorize.ensureAuthorized, products.Delete)

router.get('/matches/:_id', matches.Model)
router.get('/matches', matches.List)
router.post('/matches', Authorize.ensureAuthorized, matches.Add)
router.put('/matches/:_id', Authorize.ensureAuthorized, matches.Edit)
router.delete('/matches/:_id', Authorize.ensureAuthorized, matches.Delete)

router.get('/modes/:_id', modes.Model)
router.get('/modes', modes.List)
router.post('/modes', Authorize.ensureAuthorized, modes.Add)
router.put('/modes/:_id', Authorize.ensureAuthorized, modes.Edit)
router.delete('/modes/:_id', Authorize.ensureAuthorized, modes.Delete)

router.get('/websites', websites.Model)
router.put('/websites/:_id', Authorize.ensureAuthorized, websites.Edit)
router.post('/websites', Authorize.ensureAuthorized, websites.Add)
router.delete('/websites/:_id', Authorize.ensureAuthorized, websites.Delete)

router.get('/users/:_id', Authorize.ensureAuthorized, users.Model)
router.get('/users', Authorize.ensureAuthorized, users.List)
router.post('/users/admin', users.Add)
router.post('/users', Authorize.ensureAuthorized, users.Add)
router.put('/users/:_id', Authorize.ensureAuthorized, users.Edit)
router.delete('/users/:_id', Authorize.ensureAuthorized, users.Delete)
router.delete('/users/admin/:_id', users.Delete)

router.get('/consults/:_id', Authorize.ensureAuthorized, consults.Model)
router.get('/consults', Authorize.ensureAuthorized, consults.List)
router.post('/consults', consults.Add)
router.put('/consults/:_id', Authorize.ensureAuthorized, consults.Edit)
router.delete('/consults/:_id', Authorize.ensureAuthorized, consults.Delete)

router.get('/activities/:_id', activities.Model)
router.get('/activities', activities.List)
router.post('/activities', Authorize.ensureAuthorized, activities.Add)
router.put('/activities/:_id', Authorize.ensureAuthorized, activities.Edit)
router.delete('/activities/:_id', Authorize.ensureAuthorized, activities.Delete)

router.get('/banners/:_id', banners.Model)
router.get('/banners', banners.List)
router.post('/banners', Authorize.ensureAuthorized, banners.Add)
router.put('/banners/:_id', Authorize.ensureAuthorized, banners.Edit)
router.delete('/banners/:_id', Authorize.ensureAuthorized, banners.Delete)

router.use(function (req, res, next) {
  res.status(404).json({ message: '未找到' })
})

router.use(function (err, req, res, next) {
  res.status(500).json({ message: '服务器错误' })
})

module.exports = router
