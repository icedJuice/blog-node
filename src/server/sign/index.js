const checkToken = require('../func/checkToken.js');
const weaveErrorMsg = require('../errorMark/index.js');
const dbs = require('../../db/index.js');

function _in(data, callback) {
    if(!(data.nickname && data.password)) return callback(weaveErrorMsg(302));
    dbs.sigiIn(data, callback);
}

const _up = function (data, callback) {
    if(!(data.nickname && data.password)) return weaveErrorMsg(301);
    dbs.sigiUp(data, callback);
    // var state = false;
    // users.forEach(function (item, index) {
    //     if(item.nickname === data.nickname) {
    //         states = true;
    //     }
    // })
    // if(state) {
    //     return weaveErrorMsg(312)
    // } else {
    //     return {
    //         status: weaveErrorMsg(200),
    //         data: {
    //             nickname: data.nickname,
    //             token: 'token' // 直接登录
    //         }
    //     }
    // }
}

const  sign = {
    in: _in,
    up: _up
}

module.exports = sign;