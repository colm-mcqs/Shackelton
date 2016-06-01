/**
 * Created by Colm on 22/05/2015.
 */
var express = require('express');
var Router = express.Router();
var Keg = require('../config/models/keg.js');

Router.post('/keg/new', function(req, res){
    var keg = new Keg(req.body);

   keg.save(function (err) {
       if(err) return res.status(500).json({error: err});
       res.sendStatus(200);
   })
});

module.exports = Router;