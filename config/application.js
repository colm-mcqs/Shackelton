/**
 * Created by Colm on 22/05/2015.
 */
var env         = process.env.NODE_ENV || 'development'
    , packageJson = require('../package.json')
    , path        = require('path')
    , express     = require('express')
    , config = require('./config.js')[env]
    , morgan = require('morgan')
    , errorhandler = require('errorhandler')
    , methodOverride = require('method-override')
    , cookieParser = require('cookie-parser')
    , cookieSession = require('cookie-session')
    , bodyParser = require('body-parser');

console.log('Loading App in ' + env + ' mode.')

global.App = {
    app: express()
    , port: process.env.PORT || 3000
    , version: packageJson.version
    , root: path.join(__dirname, '..')
    , appPath: function(path) {
        return this.root + '/' + path
    }
    , require: function(path) {
        return require(this.appPath(path))
    }
    , env: env
    , start: function() {
        if (!this.started) {
            this.started = true;
            this.app.listen(this.port);
            console.log("Running Shackleton: Dingle Brewing App Version " + App.version + " on port " + App.port + " in " + App.env + " mode")

        }
    }
    , model: function(path) {
        return this.require("config/models/" + path)
    }
    , route: function(path) {
        return this.require("routes/" + path)
    }
};

// Middleware
App.app
        .use(bodyParser.json())
        .use(morgan('tiny'))
        .use(bodyParser.urlencoded({ extended: true }))
        .use(methodOverride())
        .use(cookieParser())
        .use(cookieSession({secret: "it'sasecrettoeverybody", key: "session"}))
        .use(express.static(App.appPath('public')))

;

App.app.engine('html', require('ejs').renderFile);
App.app.set('view engine', 'html');

if(env=='development'){
    App.app.use(errorhandler({ dumpExceptions: true, showStack: true }));
} else {
    App.app.use(errorhandler());
}

App.require('config/database')(process.env.DATABASE_URL || 'mongodb://localhost/test')
App.app.use(require(App.appPath('./routes')));