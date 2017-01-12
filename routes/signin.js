var express = require('express');
var router = express.Router();
const signin = require('../controllers/signin');

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', checkNotLogin, signin.get);

// POST /signin 用户登录
router.post('/', checkNotLogin, signin.login);

module.exports = router;