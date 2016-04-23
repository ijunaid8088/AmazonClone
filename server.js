var express = require("express"),
		morgan = require("morgan"),
		mongoose = require("mongoose"),
		bodyParser = require("body-parser"),
		app = express(),
		User = require("./models/user");


// connecting MongoLabs

mongoose.connect("mongodb://root:123456@ds019268.mlab.com:19268/amazonclone", function(err){
	if (err) {
		console.log(err);
	}
	else{
		console.log("Connected to the Database");
	}
});

// Middleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended: true }));


// Testing route for user Schema

app.post("create-user", function(req, res){
	var user = new User();
	user.profile.name
});

// created 3000 port as server

app.listen(3000, function(err){
	if (err) throw error;
	console.log("Server is running");
});