var mongoose = require("mongoose"),
	bcrypt =  require("bcrypt-nodejs");

var Schema = mongoose.Schema;

// user schema attributes and fields

var UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,

	profile: {
		name : { type: String, default: "" },
		picture: { type: String, default: "" }
	},

	address: String,
	history: [{
		date: Date,
		paid: { type: Number, default: 0 }
	}]
});



// Hash the password before save it into database






// Compare the password that saved in Database and the one user entered

