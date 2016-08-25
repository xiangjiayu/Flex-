/**
 * Created by xiangjiayu on 16/8/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('flex2', { title: '三、Flex实际操作运用-第二部分' });
});

module.exports = router;

