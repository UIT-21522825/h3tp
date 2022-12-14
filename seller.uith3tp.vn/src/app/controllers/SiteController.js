const Course = require('../models/Course');
const Product = require('../models/Product');
const SellerProduct = require('../models/SellerProduct');
const {multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /news
    index(req,res, next){
        Course.find({})
            .then(courses => {
                
                res.render('home',{
                    courses : multipleMongooseToObject(courses)
                });
            })
            .catch(next);
        // res.render('home');
    }
    // [GET] / productPage
    productPage(req,res,next){
        SellerProduct.find({})
            .then(product=>{
                res.render('product',{product:multipleMongooseToObject(product)} )
            })
            .catch(next);
    }
    // [GET] / orderPage
    orderPage(req,res,next){
        Product.find({})
            .then(product=>{
                res.render('order',{product:multipleMongooseToObject(product)} )
            })
            .catch(next);
    }
    // [POST] store

    store(req,res,next){
        const sellerProduct = new SellerProduct(req.body);
        sellerProduct.save()
            .then(()=>res.redirect('back'))
            .catch(next);
    }
}
module.exports = new SiteController;