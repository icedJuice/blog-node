const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
// 跨域服务
const cors = require('cors');
const app = express();
const sign = require('./login/index.js')

const Server = function () {
    // express 获取post参数用
    app.use(bodyParser.urlencoded({ extended: false }));

// 测试用解决跨域问题

    app.use(cors({
        origin:['http://localhost', 'http://localhost:80' ,'http://localhost:8080','http://localhost:3000','http://127.0.0.1:27017'],
        methods:['GET','POST'],
        alloweHeaders:['Content-Type','Authorization']
    }))


// 登录
    app.post('/sign/sign_in', function (req, res) {
        res.send(sign.in(req.body))
    })
// 注册
    app.post('/sign/sign_up', function (req, res) {
        res.send(sign.up(req.body))
    })

    app.listen(3000)
}

module.exports = Server