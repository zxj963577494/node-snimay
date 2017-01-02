const express = require('express');
const exphbs = require('express3-handlebars');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const timeout = require('connect-timeout');
const flash = require('connect-flash');
const config = require('config-lite');
const routes = require('./routes');
const pkg = require('./package');

/*
 * 分词
 * https://github.com/yanyiwu/nodejieba
 */
const nodejieba = require("nodejieba");

nodejieba.load({
  userDict: __dirname + '/dict' + '/userdict.utf8',
});

const app = express();

// app.use(timeout('10s'));

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {
    grouped_each: function (every, context, options) {
      var out = "",
        subcontext = [],
        i;
      if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
          if (i > 0 && i % every === 0) {
            out += options.fn(subcontext);
            subcontext = [];
          }
          subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
      }
      return out;
    },
    section: function (name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
}));

app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

app.use('/admin/', express.static(__dirname + '/public'));

// session 中间件
app.use(session({
  name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  cookie: {
    maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({ // 将 session 存储到 mongodb
    url: config.mongodb // mongodb 地址
  })
}));

// flash 中间价，用来显示通知
app.use(flash());

// 路由
app.use('/', routes);

app.listen(config.port, function (req, res) {
  console.log(`${pkg.name} started on http://localhost: ${config.port}; press Ctrl + C  to terminate.`);
});