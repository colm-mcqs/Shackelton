/**
 * Created by Colm on 22/05/2015.
 */
module.exports = function(app){

   app.get('/api/catalog', function(req, res){
       App.route('server/getItems.js')(req, res);
   })
};