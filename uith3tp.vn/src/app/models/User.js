const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const User = new Schema({
    name :{type:String,maxLength :255},
    password :{type:String,maxLength :255},
    email :{type:String,maxLength :255},
    active:{type:String}
});

module.exports = mongoose.model('User', User);