const express = require('express')
const Authorize = require('../../middlewares/ensureAuthorized')
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

router.get('/categories/:id', categories.Model)
router.get('/categories', categories.List)
router.post('/categories', Authorize.ensureAuthorized, categories.Add)
router.put('/categories/:id', Authorize.ensureAuthorized, categories.Edit)
router.delete('/categories/:id', Authorize.ensureAuthorized, categories.Delete)

router.get('/selectorheads/:cid', selectors.HeadList)
router.get('/selectorheads/:id', selectors.HeadModel)
router.post('/selectorheads/:cid', Authorize.ensureAuthorized, selectors.HeadAdd)
router.put('/selectorheads/:id', Authorize.ensureAuthorized, selectors.HeadEdit)
router.delete('/selectorheads/:id', Authorize.ensureAuthorized, selectors.HeadDelete)

router.get('/selectorbodys/:id', selectors.BodyList)
router.get('/selectorbodys/:id/:sid', selectors.BodyModel)
router.post('/selectorbodys/:id', Authorize.ensureAuthorized, selectors.BodyAdd)
router.put('/selectorbodys/:id/:sid', Authorize.ensureAuthorized, selectors.BodyEdit)
router.delete('/selectorbodys/:id/:sid', Authorize.ensureAuthorized, selectors.BodyDelete)

router.get('/products/:id', products.Model)
router.get('/products', products.List)
router.post('/products', Authorize.ensureAuthorized, products.Add)
router.put('/products/:id', Authorize.ensureAuthorized, products.Edit)
router.delete('/products/:id', Authorize.ensureAuthorized, products.Delete)

router.get('/matches/:id', matches.Model)
router.get('/matches', matches.List)
router.post('/matches', Authorize.ensureAuthorized, matches.Add)
router.put('/matches/:id', Authorize.ensureAuthorized, matches.Edit)
router.delete('/matches/:id', Authorize.ensureAuthorized, matches.Delete)

router.get('/modes/:id', modes.Model)
router.get('/modes', modes.List)
router.post('/modes', Authorize.ensureAuthorized, modes.Add)
router.put('/modes/:id', Authorize.ensureAuthorized, modes.Edit)
router.delete('/modes/:id', Authorize.ensureAuthorized, modes.Delete)

router.get('/websites', websites.Model)
router.put('/websites', websites.Edit)

router.get('/users/:id', Authorize.ensureAuthorized, users.Model)
router.get('/users', Authorize.ensureAuthorized, users.List)
router.post('/users', Authorize.ensureAuthorized, users.Add)
router.put('/users/:id', Authorize.ensureAuthorized, users.Edit)
router.delete('/users/:id', Authorize.ensureAuthorized, users.Delete)

router.get('/consults/:id', Authorize.ensureAuthorized, consults.Model)
router.get('/consults', Authorize.ensureAuthorized, consults.List)
router.post('/consults', consults.Add)
router.put('/consults/:id', Authorize.ensureAuthorized, consults.Edit)
router.delete('/consults/:id', Authorize.ensureAuthorized, consults.Delete)

router.get('/activities/:id', Authorize.ensureAuthorized, activities.Model)
router.get('/activities', Authorize.ensureAuthorized, activities.List)
router.post('/activities', Authorize.ensureAuthorized, activities.Add)
router.put('/activities/:id', Authorize.ensureAuthorized, activities.Edit)
router.delete('/activities/:id', Authorize.ensureAuthorized, activities.Delete)

router.get('/banners/:id', Authorize.ensureAuthorized, banners.Model)
router.get('/banners', Authorize.ensureAuthorized, banners.List)
router.post('/banners', Authorize.ensureAuthorized, banners.Add)
router.put('/banners/:id', Authorize.ensureAuthorized, banners.Edit)
router.delete('/banners/:id', Authorize.ensureAuthorized, banners.Delete)

router.use(function (req, res, next) {
  res.status(404).json({ message: '未找到' })
})

router.use(function (err, req, res, next) {
  res.status(500).json({ message: '服务器错误' })
})

module.exports = router
