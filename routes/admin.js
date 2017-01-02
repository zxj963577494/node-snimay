const express = require('express');
const router = express.Router();

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

module.exports = router;