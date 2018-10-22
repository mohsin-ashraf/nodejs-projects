const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");


// User Schema
const UserSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	username:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});


const User = module.exports = mongoose.model('User',UserSchema);


// getUserById
module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}

// getUserByUsername
module.exports.getUserByUsername = function(username,callback){
	query = {username:username};
	User.findOne(query,callback);
}

// addUser
module.exports.addUser = function(newUser,callback){
	// Salt 
	bcrypt.genSalt(10,(err,salt)=>{
		if (err) throw err;
		bcrypt.hash(newUser.password,salt,(err,hash)=>{
			if (err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}
// comparePassword
module.exports.comparePassword = function(candidatePassword,hash,callback){
	bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
		if (err) throw err;
		callback(null,isMatch);
	});
}