const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const signup_query = require('../query/signup_query')   //여기서 사용되는 쿼리문을 참조한다.
const path = require('path');
const index_view = require('../views/index')
const store = require('store');

const login_user_view = require('../views/login_user')
const login_company_view = require('../views/login_company')
const login_manager_view = require('../views/login_manager')
const login_fail_view = require('../views/login_fail')
const mypage_view = require('../views/mypage')

const signup_user_view = require('../views/signup_user')
const signup_company_view = require('../views/signup_company')
const signup_success_view = require('../views/signup_success')



store.set('key',{id:null, type:null})   //key의 기본값 세팅

router.get('/logout',(req,res)=>{
    store.set('key',{id:null, type:null})
    res.redirect('/')
})

router.get('/login_fail',(req,res)=>{
    let html = login_fail_view.HTML();
    res.end(html)
})

router.get('/signup_success',(req,res)=>{
    let html = signup_success_view.HTML();
    res.end(html)
})

router.get('/login_user',(req,res)=>{
    let html = login_user_view.HTML();
    res.end(html)
})


router.post('/login_user', function(req,res){
    var userid = req.body['id'];
    var userpassword = req.body['password'];
    db.query('select * from user where id=\'' + userid + '\' and password=\'' + userpassword + '\'',function(err,rows,fields){
        if(!err){
             if(rows[0]!=undefined){ 
                store.set('key',{id:userid, type:"user"})
                res.redirect('/');
            }else{
                res.redirect('/login_fail')
            }
        }else {
            res.end(`alert('Not found ${err.message}')`);
        }
       
    })
 
})

router.get('/login_company',(req,res)=>{
    let html = login_company_view.HTML();
    res.end(html)
})

router.post('/login_company', function(req,res){
    var coid = req.body['id'];
    var copassword = req.body['password'];
    db.query('select * from company where id=\'' + coid + '\' and password=\'' + copassword + '\'',function(err,rows,fields){
        if(!err){
             if(rows[0]!=undefined){ 
                store.set('key',{id:coid,type:"company" })
                res.redirect('/');
            }else{
                res.redirect('/login_fail')
            }
        }else {
            res.end(`alert('Not found ${err.message}')`);
        }
       
    })
 
})


router.get('/login_manager',(req,res)=>{
    let html = login_manager_view.HTML();
    res.end(html)
})

router.post('/login_manager', function(req,res){
    var maid = req.body['id'];
    var mapassword = req.body['password'];
    db.query('select * from manager where id=\'' + maid + '\' and password=\'' + mapassword + '\'',function(err,rows,fields){
        if(!err){
             if(rows[0]!=undefined){ 
                store.set('key',{id:maid,type:"manager" })
                res.redirect('/');
            }else{
                res.redirect('/login_fail')
            }
        }else {
            res.end(`alert('Not found ${err.message}')`);
        }
       
    })
 
})


router.get('/mypage', function(req,res){
    var u_id = store.get('key').id;
    if(store.get('key').type == 'user'){
        db.query('select * from user where id = ? ',[u_id],function(err,info){
            db.query(`select DATE_FORMAT(birthdate, '%y-%m-%d') AS simple_date FROM user`, function(err, date){
                if(!err){
                    console.log(info.birthdate)
                    let show_info = mypage_view.show_info(info, date)
                    let html = mypage_view.HTML(show_info)
                    res.end(html)
                }
                else {
                    res.end(`alert('Not found ${err.message}')`);
                }
            })
        })
    }
    else if(store.get('key').type == 'company'){
        db.query('select * from company',function(err,info){
            if(!err){
                let show_info = mypage_view.show_info(info)
                let html = mypage_view.HTML(show_info)
                res.end(html)
            }
            else {
                res.end(`alert('Not found ${err.message}')`);
            }
           
        })
    }
    else {
       
    }
   
 
})



router.get('/signup_user',(req,res) =>{
    let html = signup_user_view.HTML();
    res.end(html)
})

router.post('/signup_user', (req,res)=> {
    let data = req.body;
    console.log(req.body);
    try{
        db.query(signup_query.add_user
            ,[data.id, data.password, data.name, data.birthdate, data.email, data.phone, data.city, data.ku, data.dong, "m_id"] //html 파일에서 name="#"으로 선언한 변수를 입력받는다.
            ,(err) => {
                if (err) throw new Error(err);
            });           
            res.redirect('/signup_success')
            //res.end(`alert(Success for Account creation!)`)
    } catch(err){
        res.writeHead(404);
        //res.end(`alert('Not found ${err.message}')`);
    }
   
 }); 
 
 router.get('/signup_company',(req,res) =>{
    let html = signup_company_view.HTML();
    res.end(html)
})

 router.post('/signup_company', (req,res)=> {
    let data = req.body;
    console.log(req.body);
    try{
        db.query(signup_query.add_company
            ,[data.id, data.password, data.name, data.homepage, data.phone, data.city, data.ku, data.dong, "m_id"]
            ,(err) => {
                if (err) throw new Error(err);
            });           
            res.redirect('/signup_success')
            //res.end(`alert(Success for Account creation)`)
    } catch(err){
        res.writeHead(404);
        //res.end(`alert('Not found ${err.message}')`);
    }
   
 }); 
 
 
 module.exports = router
 