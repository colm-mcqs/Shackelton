/**
 * Created by Colm on 22/05/2015.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String
    , email: String
});

var Model = mongoose.model('User', schema);

module.exports = Model;