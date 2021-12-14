const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const game_query = require('../query/game_query')
const path = require('path');
const url = require('url');
const fs = require('fs');
const store = require('store')
const manage_game_view = require('../views/manage_game')
const regist_game_view = require('../views/regist_game')
const approve_game_detail_view = require('../views/approve_game_detail')
const manager_view = require('../views/manager_page')
const modify_game_view = require('../views/modify_game')

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
            ,[store.get('key').id, data.name, data.release_date, data.price, data.description, data.system_requirements, data.rating, imgData]
            ,(err) => {
                if (err) throw new Error(err);
            });
        data.category.forEach(element => {
            db.query(game_query.add_category
                ,[store.get('key').id, data.name,element]
                , (err)=>{
                    if(err) throw new Error(err);
                });
        });
        data.language.forEach(element => {
            db.query(game_query.add_language
                ,[store.get('key').id, data.name,element]
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
        db.query(`SELECT * FROM game WHERE company_id = ? AND approval='1'`, [store.get('key').id],(err, approve_games)=>{
            if(err) throw new Error(err);
            db.query(`SELECT * FROM game WHERE company_id = ? AND approval='0'`, [store.get('key').id],(err, unapprove_games)=>{
                if(err) throw new Error(err);
                console.log(store.get('key').id)
                let approved_game_list = manage_game_view.approved_game_list(approve_games)
                let unapproved_game_list = manage_game_view.unapproved_game_list(unapprove_games)
                let summary = manage_game_view.summary(approve_games, unapprove_games, store.get('key').id);
                let html = manage_game_view.HTML(approved_game_list,unapproved_game_list, summary);
                res.end(html);
            })
        });
     } catch(err){
        console.log(err.message);
        res.send(err.message);
     }
 })

router.get('/modify_game', (req,res)=>{
    const {company_id, game_name} = url.parse(req.url,true).query;
    try{
        console.log(`${company_id}        ${game_name}`);
        db.query(`SELECT * FROM game WHERE company_id=? AND name=?`,[company_id,game_name], (err,game)=>{
            if(err) throw new Error(err)
            db.query(`SELECT category FROM category WHERE company_id=? AND game_name=?`,[company_id,game_name], (err,categories)=>{
                if(err) throw new Error(err)
                db.query(`SELECT language FROM language WHERE company_id=? AND game_name=?`,[company_id,game_name], (err,languages)=>{
                    if(err) throw new Error(err)
                    let html = modify_game_view.HTML(game,categories,languages);
                    res.end(html)
                })
            })
        })
     } catch(err) {
        res.send(err.message)
     }
})




router.post('/update_game', (req,res)=>{
    let data = req.body;
    try{
        db.query(`UPDATE game SET name=?, release_date=?, price=?, description=?, system_requirements=?, rating=?, approval='0' WHERE company_id = ? AND name=?`
        ,[data.name, data.release_date, data.price, data.description, data.system_requirements, data.rating,store.get('key').id,data.name]
        ,(err)=>{
            if(err) throw new Error(err);
            db.query(`DELETE FROM category WHERE company_id=? AND game_name=?`,[store.get('key').id, data.name]);
            db.query(`DELETE FROM language WHERE company_id=? AND game_name=?`,[store.get('key').id, data.name]);
            data.category.forEach(element => {
                db.query(game_query.add_category
                    ,[store.get('key').id, data.name,element]
                    , (err)=>{
                        if(err) throw new Error(err);
                    });
            });
            data.language.forEach(element => {
                db.query(game_query.add_language
                    ,[store.get('key').id, data.name,element]
                    , (err)=>{
                        if(err) throw new Error(err);
                    });
            });
            res.redirect('/manage_game')
        })
    } catch(err){
        console.log(err)
        res.send(err.message);
    }
})

router.get('/manager', (req,res)=>{
    try{
        db.query(`SELECT * FROM user`, (err,users)=>{
            if(err) throw new Error(err);
            db.query(`SELECT * FROM company`, (err,companys)=>{
                if(err) throw new Error(err);
                db.query(`SELECT * FROM game WHERE approval = false`,(err, games)=>{
                    if(err) throw new Error(err);
                    let user_list = manager_view.user_list(users);
                    let company_list = manager_view.company_list(companys);
                    let game_list = manager_view.game_list(games);
                    let user_summary = manager_view.user_summary(users,companys);
                    let game_summary = manager_view.game_summary(games);
                    let html = manager_view.HTML(user_list,company_list,game_list,user_summary, game_summary);
                    res.end(html);
                })
            })
        })
    } catch(err) {
        console.log(err)
        res.send(err.message);
    }
})


router.get('/user/del', (req,res)=>{
    const {id} = url.parse(req.url,true).query;
    try{
        db.query(`DELETE FROM user WHERE id = ${id}`, (err)=>{
            if(err) throw new Error(err);

        })
        res.redirect('/manager');
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
        res.redirect('/manager');
    } catch(err){
        res.send(err.message);
    }
})

router.post('/approve_game', (req,res)=>{
    const {company_id, name} = req.body;
    try{
        db.query(`UPDATE game SET approval = true WHERE company_id = ? AND name = ?`,[company_id, name], (err)=>{
            if(err) throw new Error(err);
            res.redirect('/manager');
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
                    let menubar = approve_game_detail_view.menubar()
                    let html = approve_game_detail_view.HTML(game_detail, menubar);
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