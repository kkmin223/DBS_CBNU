const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const game_query = require('../query/game_query')
const path = require('path');
const manage_game_view = require('../views/manage_game')
const regist_game_view = require('../views/regist_game')

router.get('/regist_game', (req,res)=>{
    let html = regist_game_view.HTML();
    res.end(html)
});

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
        res.end(`alert('등록성공')`);
    } catch(err){
        res.writeHead(404);
        res.end(`
            Not found
            ${err.message}
        `);
    }
 });   
 
 router.get('/manage_game', (req,res)=>{
     try{
        db.query(`SELECT * FROM game WHERE company_id = ?`, ["게임회사1"],(err, games)=>{
            if(err) throw new Error(err);
            console.log(games)
            let game_list = manage_game_view.game_list(games)
            let summary = manage_game_view.summary(games);
            let html = manage_game_view.HTML(game_list, summary);
            res.end(html);
        });
     } catch(err){
        console.log(err.message);
        res.send(err.message);
     }
 })


 module.exports = router
 