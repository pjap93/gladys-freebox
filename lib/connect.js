var freebox = require('./box.js');
var app = require('./app.js');
var request = require('request');
var Promise = require('bluebird');


/**
 * connect method
 *
 * Example :
 *
 * freebox.connect({
 * 	'ip'        : 'mafreebox.freebox.fr', (optional)
 * 	'port'      : 80, (optional)
 * 	'app_token' : '012345', (optional)
 * 	'track_id'  : '12', (optional)
 * });
 * 
 * Update freebox information
 * 
 * @return void
 */

module.exports = function (box){};