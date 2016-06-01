/**
 * Created by Colm on 22/05/2015.
 */
var async = require('async');
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

Router.get('/destinations/:dest', function(req, res){
    var regex = new RegExp(`^${req.params.dest}`, 'i');
    Destination.find({name: {$regex: regex}}, 'name -_id' , function(err, destinations){
        if(err) return res.status(500).json({error: err});
        res.status(200).json(destinations);
    })
});

Router.get('/kegs/late', function(req, res){
    var date = new Date(new Date().setDate(new Date().getDate() - 30));
    var query = {dateEntered: {$lt: date} };
    Keg.find(query, 'kegNo size dateEntered dest -_id', function (err, lateKegs) {
        if(err) return res.status(500).json({error: err});
        async.map(lateKegs, addDaysLate, function (err, lateKegs) {
            if(err) return res.status(500).json({error: err});
            res.status(200).json(lateKegs);
        })
    });

    function addDaysLate (keg, callback){
        keg = keg.toObject();
        keg.daysLate = Math.floor((date - Date.parse(keg.dateEntered)) / 1000 / 3600 / 24);
        callback(null, keg)
    }
});

module.exports = Router;