const express = require('express')
const hbs = require('express-hbs')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')(session)
const timeout = require('connect-timeout')
const path = require('path')
const flash = require('connect-flash')
const config = require('config-lite')
const routes = require('./routes')
const apiRoutes = require('./routes/api')
const pkg = require('./package')
const bodyParser = require('body-parser')
const moment = require('moment')
const upload = require('./util/multerUtil')
const helpers = require('./helpers')
/*
 * 分词
 * https://github.com/yanyiwu/nodejieba
 */
const nodejieba = require('nodejieba')

nodejieba.load({
  userDict: path.join(__dirname, 'dict', 'userdict.utf8')
})

const app = express()

moment.locale('zh-cn')

app.disable('x-powered-by')

app.use(timeout('10s'))

app.use(bodyParser.json({
  limit: '1mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '1mb'
}))

app.engine('hbs', hbs.express4({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views', 'layout'),
  defaultLayout: path.join(__dirname, 'views', 'layout', 'main.hbs')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
helpers.loadHelpers()

app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser(config.session.secret))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  next()
})

// session 中间件
app.use(session({
  name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  cookie: {
    maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
  },
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ // 将 session 存储到 mongodb
    url: config.mongodb // mongodb 地址
  })
}))

app.use(upload.single('files'))

// flash 中间件，用来显示通知
app.use(flash())

// 路由
app.use('/api/v1', apiRoutes)

// 路由
app.use('/', routes)

module.exports = app

app.listen(config.port, function (req, res) {
  console.log(`${pkg.name} started on http://localhost:${config.port} press Ctrl + C  to terminate.`)
})
