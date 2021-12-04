const db = require('../DB/index');
const express = require('express');
const router = express.Router();


router.get('/',function(req,res){
   res.render('index.html')
});
router.get('/cart',function(req,res){
   res.render('cart.html');
});
router.get('/checkout',function(req,res){
   res.render('checkout.html');
});
router.get('/cart',function(req,res){
   res.render('product-details.html');
});
router.get('/cart',function(req,res){
   res.render('shop.html');
});   


module.exports = router

