const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name :{type:String,maxLength :255},
    thumb :{type:String,maxLength :255},
    
});

module.exports = mongoose.model('Courses', Course);