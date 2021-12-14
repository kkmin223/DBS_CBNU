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
const user_game_detail_view = require('../views/user_game_detail')
const shop_search_view = require('../views/shop_search')
const url = require('url');
const store = require('store');


router.get('/', (req,res)=>{
   try{
      db.query(`SELECT * FROM game where approval = 1`,(err, games)=>{
          if(err) throw new Error(err);
          let game_list = index_view.game_list(games)
          let menubar = index_view.menubar()
          let html = index_view.HTML(game_list, menubar)
          res.end(html)
      });
  } catch(err) {
  }
});

router.post('/', (req,res) =>{
   const search = req.body;
   res.redirect('/shop_search?search=' + search.search);
});



router.get('/shop', (req,res) =>{
   try{
      db.query(`SELECT * FROM game where approval = 1;`, (err, game)=>{
          if(err) throw new Error(err);
          let game_list = shop_view.game_list(game)
          let menubar = shop_view.menubar()
          let html = shop_view.HTML(game_list,menubar)
          res.end(html)
      });
   } catch(err) {
   }
});

router.post('/shop', (req,res) =>{
   const search = req.body;
   res.redirect('/shop_search?search=' + search.search);
});

router.get('/shop_search', (req,res) =>{
   const search = url.parse(req.url,true).query;
   var query = "%" + search.search + "%"
   try{
      db.query(`select * from game where name like ? and game.approval = 1`, [query], (err, game)=>{
          if(err) throw new Error(err);
          let game_list = shop_search_view.game_list(game)
          let menubar = shop_search_view.menubar()
          let html = shop_search_view.HTML(game_list, menubar)
          res.end(html)
      });
   } catch(err) {
   }
});

router.get('/cartplus', (req,res) =>{
   const {user_id, company_id, game_name, price} = url.parse(req.url,true).query;
   try{
      db.query(`INSERT INTO cart (user_id, company_id, game_name, price) VALUES (?,?,?,?)`, [user_id, company_id, game_name, price], (err)=>{
          if(err) throw new Error(err);
          let menubar = cart_plus_view.menubar()
          let html = cart_plus_view.HTML(menubar)
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
          let menubar = cart_remove_view.menubar()
          let html = cart_remove_view.HTML(menubar)
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
      db.query(`SELECT * FROM game WHERE game.name IN (select category.game_name From category where category.category = ?) and approval = 1`, [category], (err, game)=>{
          if(err) throw new Error(err);
          let game_list = shop_category_view.game_list(game)
          let category_set = shop_category_view.category_set(category)
          let menubar = shop_category_view.menubar()
          let html = shop_category_view.HTML(game_list, category_set, menubar)
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
                  db.query(`INSERT INTO gameorder (user_id, company_id, game_name, email, price) VALUES (?,?,?,?,?)`, [games[i].user_id, games[i].company_id, games[i].game_name, email, games[i].price], (err)=>{
                     if(err) throw new Error(err);
                  });
               }
               db.query(`Delete From cart Where cart.user_id = ?`, [user_id], (err)=>{
                  if(err) throw new Error(err);
              });
            });
         });
         let menubar = cart_purchase_view.menubar()
         let html = cart_purchase_view.HTML(menubar)
         res.end(html)
      });
   } catch(err) {
      res.redirect('/')
   }
});

router.get('/user_game_detail', (req,res)=>{
   const {company_id, game_name} = url.parse(req.url,true).query;
    try{
       db.query(`SELECT * FROM game WHERE company_id=? AND name=?`,[company_id,game_name], (err,game)=>{
           if(err) throw new Error(err)
           db.query(`SELECT category FROM category WHERE company_id=? AND game_name=?`,[company_id,game_name], (err,categories)=>{
               if(err) throw new Error(err)
               db.query(`SELECT language FROM language WHERE company_id=? AND game_name=?`,[company_id,game_name], (err,languages)=>{
                   if(err) throw new Error(err)
                   let category = user_game_detail_view.category(categories)
                   let language = user_game_detail_view.language(languages);
                   let add_to_cart = user_game_detail_view.add_to_cart(game);
                   let menubar = user_game_detail_view.menubar()
                   let game_detail = user_game_detail_view.game_detail(game,category,language,add_to_cart)
                   let html = user_game_detail_view.HTML(game_detail,menubar);
                   res.end(html)
               })
           })
       })
       
    } catch(err) {
       res.send(err.message)
    }
})



router.get('/cart', (req,res) =>{
   const {user_id} = url.parse(req.url,true).query;
   try{
      db.query(`SELECT * FROM game WHERE game.name IN (select cart.game_name From cart where cart.user_id = ?)`, [user_id], (err, game)=>{
          if(err) throw new Error(err);
          let game_list = cart_view.game_list(game)
          let summary = cart_view.summary(game)
          let menubar = cart_view.menubar()
          let html = cart_view.HTML(game_list,summary,menubar)
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

