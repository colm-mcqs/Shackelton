/**
 * Created by Colm on 22/05/2015.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String
    , img: String
    , price: Number
});

var Model = mongoose.model('Product', schema);

module.exports = Model;