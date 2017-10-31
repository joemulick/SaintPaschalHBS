var express = require('express');
var router = express.Router();
var Article = require('../models/newsModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find(function(err, docs){
  	console.log(docs);
  	res.render('main/index', { title: 'Saint Paschal Baylon Catholic Church', articles: docs });
  });
});

router.get('/parish-ministries', function(req, res){
	res.render('main/parish-ministries');
});

router.get('/admin-login', function(req, res){
	res.render('main/admin-login');
});

module.exports = router;
