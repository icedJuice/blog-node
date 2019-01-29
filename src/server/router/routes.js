var express = require('express');
var routers = express.Router();
var formatData = require('../../utils/formatData.js');


var db = require('../../db/index');

var DB_Users = db.users;
var DB_Artis = db.artis;

routers.all('/query/*', function (req, res, next) {
    var token = req.query.token;
    if (!token) {
        return res.status(400).json(
            formatData(400)
        )
    }
    DB_Users.checkoutToken(token, function (errCode) {
        if (errCode) {
            return res.status(errCode).json(
                formatData(errCode)
            )
        }
        next()
    })
}, function (req, res, next){
    next();
});

// 登陆
routers.post('/signin', function (req, res) {
    // 登陆需要 username password
    // 登陆成功后， 返回username及token
    if (!req.body.username || !req.body.password) {
        return res.send(
            formatData(301)
        )
    }
    DB_Users.signIn(req.body, (errCode, doc) => {
        res.send(
            formatData(errCode, doc)
        )
    })
})

// 注册
routers.post('/login', function (req, res) {
    // 注册需要 username password
    // 注册成功后，返回username及token
    if (!req.body.username || !req.body.password) {
        return res.send(
            formatData(301)
        )
    }
    DB_Users.addUser(req.body, function (errCode, data) {
        res.send(
            formatData(errCode, data)
        )
    })
})


// articles
// 参数 
// id: id,
// tags: tag1,tag2,tag3
// start: 10
// limit: 20
// 获取文章， 通过id 或者通过标签， 支持分页
routers.get('/query/article', function (req, res) {
    var params = req.query;
    if (params.id) {
        // 请求单个
        DB_Artis.findById(params.id, function (errCode, data) {
            res.send(
                formatData(errCode, data)
            )
        })
    } else {
        // 请求多个
        DB_Artis.find(params, (errCode, data) => {
            res.send(
                formatData(errCode, data)
            )
        })
    }
})

routers.post('/query/publish', function (req, res) {
    var data = req.body;
    if (!data.title || !data.arti || !data.tags) {
        return res.send(
            formatData(312)
        )
    }
    DB_Artis.publish(data, (errCode, data) => {
        res.send(
            formatData(errCode, data)
        )
    })

})

routers.post('/query/update', function (req, res) {
    var data = req.body;
    if (!data.id) {
        return res.send(
            formatData(311)
        )
    }
    DB_Artis._update(data, (errCode, data) => {
        res.send(
            formatData(errCode, data)
        )
    })
})


module.exports = routers;