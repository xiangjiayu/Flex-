/**
 * Created by xiangjiayu on 16/8/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('flex', { title: '二、Flex解剖' });
});

module.exports = router;

