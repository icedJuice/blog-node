var artiModel = require('./model');
var createHash = require('../../utils/createHash')

function _publish (data, cb) {
    data.id = createHash();
    var aModel = new artiModel(data);

    aModel.addArti().then(data => {
        cb(200, data)
    }).catch(errCode => {
        cb(errCode)
    })
}

function _delete(data, cb) {
    if (!data.id) return cb(311);
    artiModel.remove({id: data.id}, (error) => {
        if (error) return cb(500);
        return cb({
            id: data.id
        })
    })
}

function _update(data, cb) {

    var aModel = new artiModel(data);

    aModel.updateArti().then( data => {
        cb(200, data);
    }).catch(errCode => {
        cb(errCode)
    })
}

function _find(rules, cb) {
    // rules : {
    //     start: 10,
    //     limit: 20,
    //     tag: 'js'
    // }
    var conditions = null;
    if (rules.tags) {
        // 多个标签组合的处理
        var tags = tag.replace(/,$/, '').replace(',', '|');
        conditions = {tags: new RegExp(tags, 'i')}
    }
    var projection = null;
    var options = {
        skip: rules.start || 0,
        limit: rules.limit || 20
    }
    artiModel.find(conditions, projection, options, (error, docs) => {
        if (error) return cb(500);
        cb(200, docs)
    });
}
function _findById(id, cb) {
    artiModel.findOne({id: id}, {_id:0}, (error, doc) => {
        if (error) {
            return cb(500)
        }
        cb (200, doc);
    })
}
var artis = {
    publish: _publish,
    delete: _delete,
    update: _update,
    find: _find,
    findById: _findById
}

module.exports = artis;