var app = angular.module('breweryApp');
var async = require('async');
const storage = require('electron-storage');
app.factory('kegsService', [function(){
    return {
        addKeg: function (keg) {
            return new Promise((reject, resolve) =>{
                storage.get('kegs', {create: true}, (err, kegs) => {
                    if (err) return console.error(err);
                    kegs[keg.kegNo.toString()] = keg;
                    storage.set('kegs', kegs, (err) => {
                        if (err) return reject(err);
                        resolve(kegs);
                    })
                });
            });
        },

        addDestination: function (dest) {
            const destinations = {};
            return new Promise((resolve, reject) => {
                storage.get('destinations', {create: true}, (err, destinations) => {
                    if (err) return reject(err);
                    destinations[dest.name] = true;
                    storage.set('destinations', destinations, (err) => {
                        if (err) return reject(err);
                        resolve(destinations);
                    })
                })
            })
            },

        getDestinations: function(dest){
            storage.get('destinations', (err, destinations) => {
                if(err) return console.errors(err);
                return Object.keys(destinations);
            });
        },

        getLateKegs: function () {
            return new Promise((resolve, reject) => {
                storage.get('kegs', (err, kegs) => {
                    async.map(kegs, addDaysLate, function (err, kegs) {
                        if(err) return reject({error: err});
                        async.filter(kegs, x => x, (err, lateKegs) => {
                            return resolve(lateKegs);
                        })
                    })
                });
            });

            function addDaysLate (keg, callback){
                var date = new Date(new Date().setDate(new Date().getDate() - 30));
                if(keg.dateEntered < date) {
                    keg.daysLate = Math.floor((date - Date.parse(keg.dateEntered)) / 1000 / 3600 / 24);
                } else {
                    keg = null;
                }
                callback(null, keg)
            }
        }
    };
}]);
