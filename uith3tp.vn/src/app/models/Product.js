const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    name :{type:String,maxLength :255},
    img :{type:String,maxLength :255},
    description:{type:String},
    quantity :{type:String},
    type:{type:String},
    price:{type:String},
    slug :{type:String,slug:'name',unique:true},
});

module.exports = mongoose.model('Product', Product);