var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET user profile. */
router.get('/', function(req, res, next) {
  res.render('main/users');
});

module.exports = router;