/*
*  数据库配置
*
*  @host // 数据库地址
*  @username // 用户名
*  @password // 密码
*   tables  表，
*   tables.tag 标签表
*   tables.feed 文章表，存放文章的各种信息
*   tables.user 用户表， 存储用户信息
*
 */

const dbconf = {
    host: 'http://localhost:27017',
    username: 'root',
    password: '123456',
    tables: {
        tag: 'tag',
        feed: 'feed',
        user: 'user'
    }
}

module.exports = dbconf;
