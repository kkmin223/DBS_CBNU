const db = require('../DB/index');
const express = require('express');
const router = express.Router();

module.exports = function(app)
{
   app.get('/',function(req,res){
      res.render('index.html')
   });
   app.get('/cart',function(req,res){
      res.render('cart.html');
   });
   app.get('/checkout',function(req,res){
      res.render('checkout.html');
   });
   app.get('/cart',function(req,res){
      res.render('product-details.html');
   });
   app.get('/cart',function(req,res){
      res.render('shop.html');
   });
}