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

UserSchema.pre("save", function(next){
	var user = this;
	if (!user.isModified("password")) return next();

	bcrypt.genSalt(10, function(err, salt){
		if (err) return next();
		bcrypt.Hash(user.password, salt, null, function(err, hash){
			if (err) return next();
			user.password = hash;
			next();
		});
	});
});

// Compare the password that saved in Database and the one user entered

UserSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("User", UserSchema);