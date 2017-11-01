var express = require('express');
var router = express.Router();
var passport = require('passport');
var Article = require('../models/newsModel.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find(function(err, docs){
  	console.log(docs);
  	res.render('main/index', { title: 'Saint Paschal Baylon Catholic Church', articles: docs });
  });
});

/* GET parish ministries hbs page */

router.get('/parish-ministries', function(req, res){
	res.render('main/parish-ministries');
});


module.exports = router;
