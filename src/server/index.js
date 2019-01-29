var express = require('express');
var routers = require('./router.js')
var app = new express();

// post请求获取数据
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// 跨域处理 cors
var cors = require('cors');

app.use(cors({
    origin:'*',
    methods:['GET','POST'],
    alloweHeaders:['Content-Type','Authorization']
}))
// 使用导出的接口

app.use('/v1', routers);

function startServer(port) {

    var _PORT = port || 12300; 

    app.listen(_PORT);
    
    console.log('server started at: ' + _PORT);
}

module.exports = startServer;


