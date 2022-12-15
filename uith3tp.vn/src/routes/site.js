const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
// router.get('/:slug',siteController.search);
router.get('/product',siteController.productPage);
router.get('/livestream',siteController.livePage);
router.get('/livestreamPage',siteController.livestreamPage);
router.get('/login',siteController.loginPage);
router.get('/payment',siteController.paymentPage);
router.post('/login/redirect',siteController.login);
router.post('/register',siteController.register);
router.post('/product/add',siteController.addCart);
router.get('/product/:id',siteController.showProduct);
router.get('/',siteController.index);

module.exports = router;