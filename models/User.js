const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userFname : { type: String, required: true},
    userLname : { type: String, required: true},
    username : { type: String, required: true, unique:true},
    userEmail: {type: String, required:true, unique:true},
    userPw : { type: String, required: true},
    isAdmin : {type:Boolean, default:false}
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema);