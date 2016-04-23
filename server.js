var express = require("express"),
	morgan = require("morgan");
var	app = express();

// Middleware

app.use(morgan("dev"));

app.get("/home", function(req,res){
	res.json("hello")
});

app.listen(3000, function(err){
	if (err) throw error;
	console.log("Server is running");
});