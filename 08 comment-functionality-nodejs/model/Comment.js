const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
	subject:{
		type:String
	},
	auther:{
		type:String
	},
	email:{
		type:String
	},
	commentBody:{
		type:String
	},
	created_at:{
		type:Date,
		default:Date.now()
	}
});

const Comments = module.exports = mongoose.model("comments",commentSchema);
