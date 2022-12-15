const Course = require('../models/Course');
const {multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /news
    
    show(req,res,next){
        Course.find({})
            .then(course=>{
                res.render('me/me',{course:multipleMongooseToObject(course)} )
            })
            .catch(next);
    }

}
module.exports = new MeController;