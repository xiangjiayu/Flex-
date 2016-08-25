/**
 * Created by xiangjiayu on 16/8/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('flex_info', { title: '一.写在前面' });
});

module.exports = router;

