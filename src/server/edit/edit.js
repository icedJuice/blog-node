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

const weaveErrorMsg = require('../errorMark/index.js');
const checkToken = require('../func/checkToken.js');


const newArti = function (data) {
    // here needs build a new article

}

const editArti = function (data) {
    // here needs reedit old article

}


const editor = function (data) {
    // need params
    if(!!data.token) {
        if(data.type) {
            if(checkToken(data.token)) {
                if(data.type === 1) {
                    // new article
                    newArti(data);
                } else if(data.type === 2){
                    // rebuild
                    editArti(data);
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