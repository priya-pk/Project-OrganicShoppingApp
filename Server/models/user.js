const mongoose = require('mongoose');

const Schema = mongoose.Schema
const userSchema = new Schema({
    email:String,
    password: String,
    isAdmin:{type:Boolean,default:false}
})

module.exports = mongoose.model('user',userSchema,'users');