const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

module.exports = User = mongoose.model('User',UserSchema);

// Users functions
module.exports.createUser = function(newUser,callback) {
	bcrypt.genSalt(10,(err,salt)=>{
		if (err){
			throw err;
		}else{
			bcrypt.hash(newUser.password,salt,(err2,hash)=>{
				newUser.password = hash;
				newUser.save(callback);
			});
		}
	});
}

module.exports.getUserByUsername = function (username,callback){
	let query = {username:username};
	User.findOne(query,callback);
}

module.exports.comparePassword = function (candidatePassword,hash,callback){
	bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
		if (err){
			throw err;
		}
		callback(null,isMatch);
	});
}

module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}