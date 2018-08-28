const users = [
    {nickname: '寒玉知', password: '123456'},
    {nickname: '小路灯', password: '123456'},
]

const sign_in = function sing_in(data) {
    if(!(data.nickname && data.password)) return {
        status: {
            code: '301',
            message: '参数有误'
        },
        data: null
    }
    var un_ok = false;
    var pw_ok = false;
    users.forEach(function (item, index) {
        console.log(item, index)
        console.log(data)
        if(item.nickname === data.nickname) {
            un_ok = true;
            if(item.password === data.password) {
                pw_ok = true;
            }
        }
    })
    if(un_ok && pw_ok) {
        return {
            status: {
                code: '200',
                message: 'ok'
            },
            data: {
                nickname: data.nickname
            }
        }
    } else if (!un_ok) {
        return {
            status: {
                code: '302',
                message: '用户不存在'
            },
            data: null
        }
    }
    else {
        return {
            status: {
                code: '303',
                message: '密码错误'
            },
            data: null
        }
    }
}

const sign_up = function (data) {
    if(!(data.nickname && data.password)) return {
        status: {
            code: '301',
            message: '参数有误'
        },
        data: null
    }
    var state = false;
    users.forEach(function (item, index) {
        if(item.nickname === data.nickname) {
            states = true;
        }
    })
    if(state) {
        return {
            status: {
                code: '304',
                message: '用户已存在'
            },
            data: {
                nickname: data.nickname
            }
        }
    } else {
        return {
            status: {
                code: '200',
                message: 'ok'
            },
            data: {
                nickname: data.nickname
            }
        }
    }
}

const  sign = {
    in: sign_in,
    up: sign_up
}

module.exports = sign;