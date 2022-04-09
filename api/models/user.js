const mongoose = require('mongoose')
const helpers = require('../lib/helpers')



let userSchema = new mongoose.Schema({

    username: String,
    password: String,
    email: String,
    created_ts: new Date().getTime() / 1000


})

userSchema.method.generateHash = function(password){
    return helpers.hash(password, this.password)
}



module.exports = userSchema