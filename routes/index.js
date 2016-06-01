/**
 * Created by Colm on 22/05/2015.
 */
var express = require('express');
var Router = express.Router();
var Keg = require('../config/models/keg.js');
var Destination = require('../config/models/destination.js');

Router.post('/keg/insert', function(req, res){
    var query = {kegNo: req.body.kegNo};
   Keg.findOneAndUpdate(query, req.body, {upsert:true}, function (err) {
       if(err) console.log(err);
       if(err) return res.status(500).json({error: err});
       res.sendStatus(200);
   })
});

Router.post('/destination/insert', function (req, res) {
    var query = {name: req.body.name};
    Destination.findOneAndUpdate(query, req.body, {upsert:true}, function (err){
        if(err) return res.status(500).json({error: err});
        res.sendStatus(200);
    })
});

module.exports = Router;