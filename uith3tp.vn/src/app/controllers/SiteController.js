const Course = require('../models/Course');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const User = require('../models/User');
const Active = require('../models/Active');
const {multipleMongooseToObject,mongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /news
    index(req,res, next){
        Promise.all([Cart.find({}),])
        Cart.find({})
            .then(cart => {
                
                res.render('home',{
                    cart : multipleMongooseToObject(cart)
                });
            })
            .catch(next);
    }
    // [GET] LIVESTREAM
    livePage(req,res, next){
        res.render('livestream')
    }
    // [GET] LIVESTREAM PAGE
    livestreamPage(req,res, next){
        res.render('livestreamPage')
    }
    // [GET] PAYMENT PAGE
    paymentPage(req,res, next){
        res.render('payment')
    }
    // [GET] SHOW PRODUCT DETAIL
    showProduct(req,res, next){
        Promise.all([Product.findOne({_id: req.params.id}),Cart.find({})])
            .then(([product,cart]) =>
                res.render('productDetail',{ product: mongooseToObject(product),cart:multipleMongooseToObject(cart)})
            )
            .catch(next);
    }
    // [GET] / productPage
    productPage(req,res,next){
        Promise.all([Cart.find({}),Product.find({})])
        .then(([cart,product])=>{
            res.render('product',{product:multipleMongooseToObject(product),cart:multipleMongooseToObject(cart)} )
        })
        .catch(next);
    }
    // [GET] /login
    loginPage(req,res,next){
        res.render('login');
    }
    //[POST] Register
    register(req,res,next){

        const user = new User(req.body);
        user.save()
            .then(()=>res.redirect('/login'))
            .catch(error=>{})
    }
    //[POST] Login
    login(req,res,next){

        var username = req.body.name;
        var password = req.body.password;
        User.findOne({username:username,password:password})
        .then((data)=>{
            if (data){
                User.replaceOne({_id:'639980f83461bd89dff791a0'},{active:"active"})
                .then(()=>{
                    User.findById('639980f83461bd89dff791a0')
                    .then((a)=>{
                        res.render('home',{a:mongooseToObject(a)});
                    })
                })
            }
            else
                alert('ko dung')
        })
        .catch(error=>{})

    }
    // [POST] ADD CART
    addCart(req,res, next){
        const cart = new Cart(req.body);
        cart.save()
            .then(()=>res.redirect('/product'))
            .catch(error =>{})
    }
}       
module.exports = new SiteController;