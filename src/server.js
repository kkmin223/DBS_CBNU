var express = require('express');       //nodejs express 사용
const mysql = require('mysql');
var app = express();
var router = require('./router/main')     //라우터 폴더의 main.js에서 루트들 관리
const db = require("./DB/index.js");

app.set('views', __dirname + '/views');         //HTML 파일(페이지) 만드는곳
app.set('view engine', 'ejs');                  //express EJS엔진 사용하여 구동
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){       //포트번호 입력하는곳
    console.log("Express server has started on port 3000")
});

app.use(express.static('views'));       //CSS, font, image, js, scss 등등 동적으로 관리하기 위해
app.use(router)