var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// userSchema 用户信息
var userSchema = new Schema({
    username: String,
    password: String,
    token: String
})

userSchema.methods.addUser = function() {
    return new Promise((resolve, reject) => {
        this.model('userModel').find({username: this.username}, (error, docs) => {
            if (error) {
                return reject(500);
            } else if (docs.length) {
                return reject(305);
            }
            this.save((error, doc) => {
                if (error) return reject(500);
                resolve(doc)
            });
        });
    })
};

userSchema.methods.signIn = function () {
    return new Promise((resolve, reject) => {
        this.model('userModel').find({username: this.username}, (error, docs) => {
            if (error) {
                return reject(500)
            }
            if (docs.length && docs[0].password === this.password) {
                resolve({username: docs[0].username, token: docs[0].token})
            } else {
                reject(301)
            }
        })
    })
}


// users 用户表
// 存放用username/password/token 等字段
var userConnect = mongoose.createConnection('mongodb://localhost:27017/users');

var userModel = userConnect.model('userModel', userSchema);

module.exports = userModel;