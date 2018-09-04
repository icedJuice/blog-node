var dbConf = require('../../config/db/index.js');
var mongoose = require('mongoose');
var weaveErrorMsg = require('../server/errorMark/index.js')
var USER = require('./user/index.js')

function createMongos() {
    mongoose.connect('mongodb://' + dbConf.host, {useNewUrlParser:true}, function(err){
        if(err){
            console.log('Connection Error:' + err)
        }else{
            console.log('Connection success!')
        }
    })

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log('success connected' + dbConf.host)
    });
}

function checkToken(token, callback) {
    // 匹配token是否正确，用户发文等接口
    USER.find({token: token}, function (err, result) {
        if(result.length > 0) {
            callback(true)
        } else {
            callback(false)
        }
    })
}

function sigiIn(data,callback) {
    // 登录 data = {nickname, password }
    USER.find({username: data.nickname }, function (err, result) {
        var res = null;
        if(result.length === 0) {
            res = {
                status: weaveErrorMsg(321),
                data: null
            };
        } else {
            if(result[0].password === data.password) {
                res = {
                    status: weaveErrorMsg(200),
                    data: {
                        nickname: result[0].username,
                        avatar: result[0].avatar,
                        token: result[0].token
                    }
                };
            } else {
                res = {
                    status: weaveErrorMsg(322),
                    data: null
                };
            }
        }
        callback(res)
    })
}
function signUp(data, callback) {
    // 注册
    USER.find({username: data.nickname }, function (err, result) {
        if(result.length > 0) {
            // 用户名已存在
            return callback({
                status: weaveErrorMsg(312),
                data: null
            })
        } else {
            var u = new USER;
            u.username = data.nickname;
            u.password = data.password;
            u.email = data.email;
            u.avatar = '';
            u.token = '';
            u.save(function (err, document) {
                if(err) {
                    return callback({
                        status: weaveErrorMsg(371),
                        data: null
                    })
                }
                return callback({
                    status: weaveErrorMsg(200),
                    data: {
                        nickname: username,
                        avatar: u.avatar,
                        token: u.token
                    }
                })
            });
            
        }
    })


}

function editFeed() {
    // 编辑文章
}
function  newFeed() {
    // 发布新文章

}

function storeFeed() {
    // 文章存草稿

}

function queryTags() {
    // 获取标签及对应标签下的文章数

}
function  queryFeed(params) {
    /*params : {
        @type:  1,2,3, // type == 1  通过标签查列表，type == 2 通过文章id查文章。
        @id: '' // 文章id ， 当type == 1 时，id为空
    }*/
    // 通过标签获取文章列表

}

const dbs = {
    createMongos: createMongos,
    checkToken: checkToken,
    sigiIn: sigiIn,
    signUp: signUp,
    editFeed: editFeed,
    newFeed: newFeed,
    storeFeed: queryFeed

}


module.exports = dbs