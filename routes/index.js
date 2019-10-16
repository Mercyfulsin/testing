/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("HELLO!!!");
  res.render('index', { title: 'Fundeed!' });
});

module.exports = router;
