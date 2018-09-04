const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// 跨域服务
const cors = require('cors');
const app = express();
const sign = require('./sign/index.js');
const editor = require('./edit/edit.js');
// express 获取post参数用
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const Server = function () {

// 测试用解决跨域问题

    app.use(cors({
        origin:['http://localhost', 'http://localhost:80' ,'http://localhost:8080','http://localhost:3000','http://localhost:4000','http://127.0.0.1:27017'],
        methods:['GET','POST'],
        alloweHeaders:['Content-Type','Authorization']
    }))

// 登录
    app.post('/sign/sign_in', function (req, res) {
        sign.in(req.body, function (data) {
            res.send(data)
        })

    })

// 注册
    app.post('/sign/sign_up', function (req, res) {
        res.send(sign.up(req.body))
    })

// 发文
    app.post('/article/edit', function (req, res) {
        res.send(editor(req.body));
    })

// 标签
    app.get('/tags/list', function (req, res) {
        res.send()
    })
    app.post('/article/edit', function (req, res) {
        res.send(editor(req.body));
    })


    app.listen(12300)
}

module.exports = Server