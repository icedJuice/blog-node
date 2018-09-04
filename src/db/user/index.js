var mongoose = require('mongoose');
var userSchema = require('./schema.js');

var _userSchema = mongoose.Schema(userSchema);
var USER = mongoose.model('USER', _userSchema);

module.exports = USER;