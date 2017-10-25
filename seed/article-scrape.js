var request = require("request");
var cheerio = require("cheerio");
var Article = require('../models/newsModel');

var mongoose = require('mongoose');

mongoose.createConnection('localhost:27017/SaintPaschalHBSDevelopment');

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

///////////////////

request("https://www.catholicculture.org/news/week.cfm", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);
  var counter = 0;

  $(".home_headline").each(function(i, element) {

  	if(counter < 10){

        var result = {};
        result.link = "https://www.catholicculture.org"
        result.link += $(this).children('a').attr("href");
        result.text = $(this).children('a').text();

        console.log('Link: ' + result.link);
        console.log('Text: ' + result.text);

        var entry = new Article(result);

        entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }

        });

            counter++;
    		console.log(counter);

        }

  });

   exit();
   console.log('exiting now');
   return false;

});


function exit(){
  mongoose.disconnect();
}