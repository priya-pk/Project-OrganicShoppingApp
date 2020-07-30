const mongoose = require('mongoose')

const Schema =mongoose.Schema
const farmersSchema = new Schema({
    farmerName:String,
    farmerEmail: String,
    farmerPassword: String,
    farmerAddress1: String,
    farmerAddress2: String,
    farmerDistrict: String,
    farmerState: String,
    farmerPIN: Number,
    farmerNumber:Number
}) 

module.exports = mongoose.model('farmer',farmersSchema,'farmers');