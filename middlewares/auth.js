const mongoose = require('mongoose');
const eventproxy = require('eventproxy');
const config = require('config-lite');
const User = require('../proxy').User;
const UserModel = require('../models').User;

exports.userRequired = function (req, res, next) {
    if (!req.session || !req.session.user || !req.session.user._id) {
        return res.status(403).send('forbidden!');
    }
    next();
};

exports.gen_session = function (user, res) {
    const auth_token = user.userid;
    const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true
    };
    res.cookie(config.cookie, auth_token, opts); //cookie 有效期30天
}

// 验证用户是否登录
exports.authUser = function (req, res, next) {
    const ep = new eventproxy();
    ep.fail(next);

    res.locals.user = null;

    ep.all('get_user', function (user) {
        if (!user) {
            return next();
        }
        user = res.locals.user = req.session.user = new UserModel(user);
        next();
    });

    if (req.session.user) {
        ep.emit('get_user', req.session.user);
    } else {
        const auth_token = req.signedCookies[config.cookie];
        if (!auth_token) {
            return next();
        }
        User.getByUserId(auth_token, ep.done('get_user'));
    }
};
