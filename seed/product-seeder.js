var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/SaintPaschalHBSDevelopment');
// This may need to be localhost:27017/SaintPaschalEcommerce instead

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

var products = [

	new Product({
	imagePath: "https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg",
	title: "T-Shirt White",
	description: "Super Dope White Tee",
	price: 6.99
	}),
	new Product({
	imagePath: "https://cdn.shopify.com/s/files/1/1213/4300/products/DSC6561_1024x1024.jpg?v=1466705439",
	title: "T-Shirt Green",
	description: "Super Dope Green Tee",
	price: 6.99
	}),
	new Product({
	imagePath: "https://images-na.ssl-images-amazon.com/images/I/91Fqq2ze85L._UL1500_.jpg",
	title: "T-Shirt Blue",
	description: "Super Dope Blue Tee",
	price: 6.99
	}),

];

var done = 0;

for(var i = 0 ; i < products.length ; i++){
	products[i].save(function(err, result){
		done++
		if(done === products.length){
			exit();
		}
	});
}

function exit(){
  mongoose.disconnect();
}