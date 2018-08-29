/*
*  need params
*
*  @token: string    用户登录发放的token
*  @type: Number    类型  1: 新增， 2: 二次编辑
*  @id: String   文章id  , @type==1时为空
*  @title: String    文章标题
*  @summary: String    文章摘要
*  @feed: String   文章正文
*  @tags: String    标签， 用英文逗号(,)分割
*
*
*  error code
*
*  301  tokenError
*  302  缺少字段
*
*/

const errMsg = {
    301: 'token error',
    302: '缺少字段'
}

const weaveErrorMsg = function (errCode) {
    if(errCode && errMsg[errCode]) {
        return {
            status: {
                code: errCode,
                message: errMsg[errCode]
            },
            data: null
        }
    } else {
        return {
            status: {
                code: 500,
                message: 'unkonwn error'
            },
            data: null
        }
    }
}

const checkToken = function (token) {
    // search sql to verify token
    // we will do some sql methods here

    if (token) {
        return true;
    } else {
        return false;
    }
}
const format = function (token) {
    if(checkToken(token)) {

    }
}
const editor = function (data) {
    // need params

    if(!!data.token) {
        if(data.type) {
            if(checkToken(data.token)) {
                if(data.type === 1) {
                    // new article

                } else if(data.type === 2){
                    // rebuild

                } else {
                    // do something
                }
            } else {

            }
        } else {
            return weaveErrorMsg(302)
        }
    } else {
        return weaveErrorMsg(301)
    }
}



module.exports = editor;