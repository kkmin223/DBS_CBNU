const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const index_view = require('../views/index')
const login_user_view = require('../views/login_user')


router.get('/',function(req,res){
   let html = index_view.HTML()
   res.end(html)
});
router.get('/cart',function(req,res){
   res.render('cart.html');
});
router.get('/login_user',function(req,res){
   let html = login_user_view.HTML()
   res.end(html)
});
router.get('/cart',function(req,res){
   res.render('product-details.html');
});
router.get('/cart',function(req,res){
   res.render('shop.html');
});   


module.exports = router

