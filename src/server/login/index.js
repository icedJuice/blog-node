const users = require('../../db/mook/userList.js');
const checkToken = require('../func/checkToken.js');
const weaveErrorMsg = require('../errorMark/index.js');

const sign_in = function sing_in(data) {
    if(!(data.nickname && data.password)) return weaveErrorMsg(301);
    // 用户名OK 标志位
    var un_ok = false;
    // 密码OK 标志位
    var pw_ok = false;
    users.forEach(function (item, index) {
        if(item.nickname === data.nickname) {
            un_ok = true;
            if(item.password === data.password) {
                pw_ok = true;
            }
        }
    })
    if(un_ok && pw_ok) {
        return {
            status: weaveErrorMsg(200),
            data: {
                nickname: data.nickname,
                token: 'token' // 可以直接登录
            }
        }
    } else if (!un_ok) {
        return {
            status: weaveErrorMsg(302),
            data: null
        }
    } else {
        return {
            status: weaveErrorMsg(303),
            data: null
        }
    }
}

const sign_up = function (data) {
    if(!(data.nickname && data.password)) return weaveErrorMsg(301);
    var state = false;
    users.forEach(function (item, index) {
        if(item.nickname === data.nickname) {
            states = true;
        }
    })
    if(state) {
        return weaveErrorMsg(312)
    } else {
        return {
            status: weaveErrorMsg(200),
            data: {
                nickname: data.nickname,
                token: 'token' // 直接登录
            }
        }
    }
}

const  sign = {
    in: sign_in,
    up: sign_up
}

module.exports = sign;