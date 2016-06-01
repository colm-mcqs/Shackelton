/**
 * Created by Colm on 22/05/2015.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    kegNo: Number
    , size: Number
    , dest: String
    , dateEntered: Date
});

var Model = mongoose.model('Keg', schema);

module.exports = Model;