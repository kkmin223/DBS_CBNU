const db = require('../DB/index');
const express = require('express');
const router = express.Router();


router.get('/',function(req,res){
   res.render('index.html')
});
router.get('/cart',function(req,res){
   res.render('cart.html');
});
router.get('/login',function(req,res){
   res.render('login.html');
});
router.get('/cart',function(req,res){
   res.render('product-details.html');
});
router.get('/cart',function(req,res){
   res.render('shop.html');
});   
router.get('/signup_user',function(req,res){
   res.render('signup_user.html');
});  
router.get('/signup_company',function(req,res){
   res.render('signup_company.html');
}); 

module.exports = router

