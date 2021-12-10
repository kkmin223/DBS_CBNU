const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const index_view = require('../views/index')
const shop_view = require('../views/shop')
const shop_category_view = require('../views/shop_category')
const login_user_view = require('../views/login_user')
const url = require('url');


router.get('/', (req,res)=>{
   try{
      db.query(`SELECT * FROM game`,(err, games)=>{
          if(err) throw new Error(err);
          let game_list = index_view.game_list(games)
          let html = index_view.HTML(game_list)
          res.end(html)
      });
  } catch(err) {

  }
});

router.get('/shop', (req,res) =>{
   try{
      db.query(`SELECT * FROM game;`, (err, game)=>{
          if(err) throw new Error(err);
          let game_list = shop_view.game_list(game)
          let html = shop_view.HTML(game_list)
          res.end(html)
      });
  } catch(err) {

  }
});

router.get('/shop_category', (req,res) =>{
   const {category} = url.parse(req.url,true).query;
   console.log(category);
   try{
      db.query(`SELECT * FROM game WHERE game.name IN (select category.game_name From category where category.category = ?)`, [category], (err, game)=>{
          if(err) throw new Error(err);
          let game_list = shop_category_view.game_list(game)
          let category_set = shop_category_view.category_set(category)
          let html = shop_category_view.HTML(game_list, category_set)
          res.end(html)
      });
  } catch(err) {
     
  }
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


module.exports = router

