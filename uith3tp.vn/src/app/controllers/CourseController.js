const Course = require('../models/Course');
const {mongooseToObject,multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /news
    show(req,res,next){
        Course.find({})
            .then(course=>{
                res.render('courses/show',{course:multipleMongooseToObject(course)} )
            })
            .catch(next);
    }


    create(req,res, next){
        res.render('courses/create');
    }   
    // 
    edit(req,res, next){
        Course.findById(req.params.id)
            .then(course=>res.render('courses/edit',{
                course:mongooseToObject(course)
            }))
            .catch(next)
    }

    // POST 
    store(req,res, next){
        const course = new Course(req.body);
        course.save()
            .then(()=>res.redirect('/'))
            .catch(error =>{})
    }       

    // PUT /course/:id
    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
            .then(()=> res.redirect('/me'))
            .catch(next);
    }
    
    // DELETE
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next);
    }

}
module.exports = new CourseController;