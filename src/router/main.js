const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const index_view = require('../views/index')
const shop_view = require('../views/shop')
const shop_category_view = require('../views/shop_category')
const cart_view = require('../views/cart')
const cart_plus_view = require('../views/cartplus')
const cart_purchase_view = require('../views/cartpurchase')
const cart_remove_view = require('../views/cartremove')
const login_user_view = require('../views/login_user')
const url = require('url');
const store = require('store');


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

router.get('/cartplus', (req,res) =>{
   const {user_id, company_id, game_name, amount} = url.parse(req.url,true).query;
   try{
      db.query(`INSERT INTO cart (user_id, company_id, game_name, amount) VALUES (?,?,?,?)`, [user_id, company_id, game_name, amount], (err)=>{
          if(err) throw new Error(err);
          let html = cart_plus_view.HTML()
          res.end(html)
      });
   } catch(err) {
      res.redirect('/')
   }
});

router.get('/cartremove', (req,res) =>{
   const {user_id, company_id, game_name} = url.parse(req.url,true).query;
   try{
      db.query(`Delete From cart Where cart.user_id = ? and cart.company_id = ? and cart.game_name = ?`, [user_id, company_id, game_name], (err)=>{
          if(err) throw new Error(err);
          let html = cart_remove_view.HTML()
          res.end(html)
      });
   } catch(err) {
      res.redirect('/')
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

router.get('/cartpurchase', (req,res) =>{
   const {user_id} = url.parse(req.url,true).query;
   try{
      db.query(`Select * From cart Where cart.user_id = ?`, [user_id], (err, number)=>{
         if(err) throw new Error(err);
         db.query(`Select user.email From user Where user.id = ?`, [user_id], (err, email)=>{
            if(err) throw new Error(err);
            db.query(`Select * From cart Where cart.user_id = ?`, [user_id], (err, games)=>{
               if(err) throw new Error(err);
               for(let i=0; i<number.length; i++){
                  db.query(`INSERT INTO gameorder (user_id, company_id, game_name, email, amount) VALUES (?,?,?,?,?)`, [games[i].user_id, games[i].company_id, games[i].game_name, email, games[i].amount], (err)=>{
                     if(err) throw new Error(err);
                  });
               }
               db.query(`Delete From cart Where cart.user_id = ?`, [user_id], (err)=>{
                  if(err) throw new Error(err);
              });
            });
         });
         let html = cart_purchase_view.HTML()
         res.end(html)
      });
   } catch(err) {
      res.redirect('/')
   }
});



router.get('/cart', (req,res) =>{
   const {user_id} = url.parse(req.url,true).query;
   try{
      db.query(`SELECT * FROM game WHERE game.name IN (select cart.game_name From cart where cart.user_id = ?)`, [user_id], (err, game)=>{
          if(err) throw new Error(err);
          let game_list = cart_view.game_list(game)
          let summary = cart_view.summary(game)
          let html = cart_view.HTML(game_list,summary)
          res.end(html)
      });
   } catch(err) {
      res.redirect('/login_user')
   }
});






router.get('/login_user',function(req,res){
   let html = login_user_view.HTML()
   res.end(html)
});

router.get('/cart',function(req,res){
   res.render('product-details.html');
});


module.exports = router

