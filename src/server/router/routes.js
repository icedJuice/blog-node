var util = require('util');
var page_index = require('../pages/index.js');
var page_detail = require('../pages/detail.js');

var routes = {
    // 首页
    home: function(req, res) {

        var tags = {
            lists:['javascript','nodeJs','vue','']
        };

        var indexCont = page_index();

        indexCont.req = util.inspect(req);
        res.render('index', indexCont);
    },
    // 文章页
    detail: function (req, res) {

        var detailCont = page_detail();

        res.render('detail', detailCont);
    },
    // 文章编辑页
    edit: function (req, res) {
        
    },
    test: function (req, res) {
        var fb = {
            status: {code: 0},
            data: {
                router: 'test',
                container: '内容'
            }
        }
        res.send(fb);
    }
}

module.exports = routes;
