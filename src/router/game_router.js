const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const game_query = require('../query/game_query')

router.post('/regist_game', (req,res)=> {
    let data = req.body;
    console.log(req.body);
    try{
        db.query(game_query.add_game
            ,["게임회사1", data.name, data.release_date, data.price, data.description, data.system_requirements, data.rating]
            ,(err) => {
                if (err) throw new Error(err);
            });
        data.category.forEach(element => {
            db.query(game_query.add_category
                ,["게임회사1", data.name,element]
                , (err)=>{
                    if(err) throw new Error(err);
                });
        });
        data.language.forEach(element => {
            db.query(game_query.add_language
                ,["게임회사1", data.name,element]
                , (err)=>{
                    if(err) throw new Error(err);
                });
        });
        res.redirect('/');
    } catch(err){
        res.writeHead(404);
        res.end(`
            Not found
            ${err.message}
        `);
    }
    
   
   
    
   
 });   
 
 
 module.exports = router
 