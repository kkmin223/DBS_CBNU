const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const game_query = require('../query/game_query')
const path = require('path');
const url = require('url');
const fs = require('fs');
const manage_game_view = require('../views/manage_game')
const regist_game_view = require('../views/regist_game')
const approve_game_view = require('../views/approve_list')
const approve_game_detail_view = require('../views/approve_game_detail')
const manage_user_view = require('../views/manage_user')
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

router.get('/regist_game', (req,res)=>{
    let html = regist_game_view.HTML();
    res.end(html)
});
router.post('/regist_game', upload.single('game_img'),(req,res)=> {
    let data = req.body;
    console.log(req.body);
    console.log(req.file)
    try{
        let imgData = readImageFile(`${req.file.path}`)
        db.query(game_query.add_game
            ,["게임회사1", data.name, data.release_date, data.price, data.description, data.system_requirements, data.rating, imgData]
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
        res.redirect('manage_game');
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

router.get('/manage_user', (req,res)=>{
    try{
        db.query(`SELECT * FROM user`, (err,users)=>{
            if(err) throw new Error(err);
            db.query(`SELECT * FROM company`, (err,companys)=>{
                if(err) throw new Error(err);
                let user_list = manage_user_view.user_list(users);
                let company_list = manage_user_view.company_list(companys);
                let html = manage_user_view.HTML(user_list,company_list);
                res.end(html);
            })
        })
    } catch(err) {
        console.log(err)
        res.send(err.message);
    }
});

router.get('/user/del', (req,res)=>{
    const {id} = url.parse(req.url,true).query;
    try{
        db.query(`DELETE FROM user WHERE id = ${id}`, (err)=>{
            if(err) throw new Error(err);
        })
    } catch(err){
        res.send(err.message);
    }
})

router.get('/company/del', (req,res)=>{
    const {id} = url.parse(req.url,true).query;
    try{
        db.query(`DELETE FROM company WHERE id = '${id}'`, (err)=>{
            if(err) throw new Error(err);
        })
        res.redirect('/manage_user');
    } catch(err){
        res.send(err.message);
    }
})

 router.get('/approve_list', (req,res)=>{
    try{
        db.query(`SELECT * FROM game WHERE approval = false`,(err, games)=>{
            if(err) throw new Error(err);
            console.log(games)
            let game_list = approve_game_view.game_list(games)
            let summary = approve_game_view.summary(games);
            let html = approve_game_view.HTML(game_list, summary);
            res.end(html);
        });
    } catch(err) {

    }
})

router.post('/approve_game', (req,res)=>{
    const {company_id, name} = req.body;
    try{
        db.query(`UPDATE game SET approval = true WHERE company_id = ? AND name = ?`,[company_id, name], (err)=>{
            if(err) throw new Error(err);
            res.redirect('/approve_list');
        })
    } catch(err) {
        res.send(err.message)
    }
})

router.get('/approve_game_detail', (req,res)=>{
    const {company_id, game_name} = url.parse(req.url,true).query;
     try{
        console.log(`${company_id}        ${game_name}`);
        db.query(`SELECT * FROM game WHERE company_id=? AND name=?`,[company_id,game_name], (err,game)=>{
            if(err) throw new Error(err)
            db.query(`SELECT category FROM category WHERE company_id=? AND game_name=?`,[company_id,game_name], (err,categories)=>{
                if(err) throw new Error(err)
                db.query(`SELECT language FROM language WHERE company_id=? AND game_name=?`,[company_id,game_name], (err,languages)=>{
                    if(err) throw new Error(err)
                    let category = approve_game_detail_view.category(categories)
                    let language = approve_game_detail_view.language(languages);
                    let game_detail = approve_game_detail_view.game_detail(game,category,language)
                    let html = approve_game_detail_view.HTML(game_detail);
                    res.end(html)
                })
            })
        })
     } catch(err) {
        res.send(err.message)
     }
 })

 function readImageFile(file){
    const bitmap = fs.readFileSync(file);
    const buf = new Buffer.from(bitmap)
    return buf
  }



 module.exports = router