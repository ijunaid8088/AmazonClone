var router = require("express").Router();
var User = require("../models/user");


router.get("/signup", function(req, res, next){
	res.render("accounts/signup");
});

router.get("/signin", function(req, res, next) {
	res.render("accounts/signin")
});

router.post("/signup", function(req, res, next){
	var user = new User;

	user.profile.name = req.body.name;
	user.email = req.body.email;
	user.password = req.body.password;

	User.findOne({ email: req.body.email }, function(err, existingUser){
		if (existingUser) {
			console.log(existingUser + "is already present!");
			res.redirect("/signup")
		}
		else{
			user.save(function(err, user){
				if (err) { return next(err); }

				res.json("New user has been created");
			});
		}
	});
});

module.exports =  router