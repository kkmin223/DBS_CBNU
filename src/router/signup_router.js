const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const signup_query = require('../query/signup_query')   //여기서 사용되는 쿼리문을 참조한다.
const path = require('path');

const login_user_view = require('../views/login_user')
const login_company_view = require('../views/login_user')
const login_manager_view = require('../views/login_company')

const signup_user_view = require('../views/signup_user')
const signup_company_view = require('../views/signup_company')

const store = require('store');
store.set('key',{id:null, type:null})   //key의 기본값 세팅

router.get('/logout',(req,res)=>{
    store.remove("key")
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
                store.set('key',{id:userid,type:"user" })
                res.redirect('/');
            }else{
                res.redirect('/');
                res.end(`alert(Account is not exist)`)             
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
    var companyid = req.body['id'];
    var companypassword = req.body['password'];
    db.query('select * from company where id=\'' + companyid + '\' and password=\'' + companypassword + '\'',function(err,rows,fields){
        if(!err){
             if(rows[0]!=undefined){ 
                store.set('key',{id:companyid,type:"company" })
                res.redirect('/');
            }else{
                res.redirect('/');
                res.end(`alert(Account is not exist)`)             
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
    var managerid = req.body['id'];
    var managerpassword = req.body['password'];
    db.query('select * from company where id=\'' + managerid + '\' and password=\'' + managerpassword + '\'',function(err,rows,fields){
        if(!err){
             if(rows[0]!=undefined){ 
                store.set('key',{id:managerid,type:"manager" })
                res.redirect('/');
            }else{
                res.redirect('/');
                res.end(`alert(Account is not exist)`)             
            }
        }else {
            res.end(`alert('Not found ${err.message}')`);
        }
       
    })
 
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
        res.redirect('/');
        res.end(`alert(Success for Account creation!)`)
    } catch(err){
        res.writeHead(404);
        res.end(`alert('Not found ${err.message}')`);
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
        res.redirect('/');
        res.end(`alert(Success for Account creation)`)
    } catch(err){
        res.writeHead(404);
        res.end(`alert('Not found ${err.message}')`);
    }
   
 }); 
 
 
 module.exports = router
 