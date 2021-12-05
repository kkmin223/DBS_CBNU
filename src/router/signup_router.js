const db = require('../DB/index');
const express = require('express');
const router = express.Router();
const signup_query = require('../query/signup_query')   //여기서 사용되는 쿼리문을 참조한다.


router.post('/login_user', function(req,res,next){
    var userid = req.body['id'];
    var userpassword = req.body['password'];
    db.query('select * from user where id=\'' + userid + '\' and password=\'' + userpassword + '\'',function(err,rows,fields){
        if(!err){
             if(rows[0]!=undefined){ 
                res.redirect('/');
            }else{
                
            }
        }else {
            res.send('error : '+ err);
        }
       
    })
 
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
    } catch(err){
        res.writeHead(404);
        res.end(`
            Not found
            ${err.message}
        `);
    }
   
 });   

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
    } catch(err){
        res.writeHead(404);
        res.end(`
            Not found
            ${err.message}
        `);
    }
   
 }); 
 
 
 module.exports = router
 