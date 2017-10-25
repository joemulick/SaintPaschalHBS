var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({

    text: {
    type: String,
    required: true
  	},

  	link: {
    type: String,
    required: true
  	}

});

var Article = mongoose.model('Article', schema);

module.exports = Article;