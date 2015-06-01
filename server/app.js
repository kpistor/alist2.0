/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mysql	= require('mysql');
var config 	= require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

//Connect to DB
var db = require('./config/environment/development');
var connection = mysql.createConnection({
  host     : db.url,
  user     : db.user,
  password : db.password,
  database : db.databse,

});

// Expose app
exports = module.exports = app;