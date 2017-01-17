const express = require('express')
const global = require('../middlewares/global')
const flash = require('../middlewares/flash')
const csrf = require('../middlewares/csrf')
const admin = require('../middlewares/admin')
const home = require('../controllers/home')
const products = require('../controllers/products')
const modes = require('../controllers/modes')
const matches = require('../controllers/matches')
const single = require('../controllers/single')
const result = require('../controllers/result')
const about = require('../controllers/about')
const contact = require('../controllers/contact')
const activities = require('../controllers/activities')

const router = express.Router()

router.use(global.init)
router.use(flash.init)
router.use(csrf.init)
router.get('/', home.get)
router.post('/', home.postConsulrAdd)
router.get('/products', products.get)
router.get('/modes', modes.get)
router.get('/matches', matches.get)
router.get('/result', result.get)
router.get('/activities', activities.get)
router.get('/activity/:id', activities.getById)
router.get('/about', about.get)
router.get('/contact', contact.get)
router.get('/single/:id', single.get)
router.use(admin.init)
router.use('/admin', require('./admin'))
router.use('/signin', require('./signin'))

router.use(function (req, res, next) {
  res.status(404)
  res.render('404', {
    layout: false
  })
})

router.use(function (err, req, res, next) {
  res.status(500)
  res.render('500')
})

module.exports = router
