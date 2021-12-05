const db = require('../DB/index');
const express = require('express');
const router = express.Router();


router.get('/',function(req,res){
   res.render('index.html')
});
router.get('/cart',function(req,res){
   res.render('cart.html');
});
router.get('/cart',function(req,res){
   res.render('product-details.html');
});


module.exports = router

