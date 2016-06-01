var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String
});

var Model = mongoose.model('Destination', schema);

module.exports = Model;
