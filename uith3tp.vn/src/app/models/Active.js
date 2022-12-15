const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Active = new Schema({
    name :{type:String,maxLength :255},
});

module.exports = mongoose.model('Active', Active);

