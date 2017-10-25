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


module.exports = router;
