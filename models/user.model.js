// mock 13

const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    email:String,
    password:String
})

const UsersModel = mongoose.model("users",userSchema)

module.exports = UsersModel