var request = require('request');
var Promise = require('bluebird');
var box = require('./box.js');
var app = require('./app.js');

module.exports = function(cb){
    var endpoint = box.url + 'login';
    request(endpoint, (err, res, body)=>{
	body = JSON.parse(body);
	sails.log.debug(body);
        box.challenge = body.result.challenge;
        cb(box);
    });

};
