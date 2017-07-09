var freebox = require('./box.js');
var app = require('./app.js');
var request = require('request');
var Promise = require('bluebird');
var flash = require('./flash.js');


module.exports = function (box){

	if(typeof box != 'undefined') {
		//Update ip (optional)
		if(typeof box.ip != 'undefined') freebox.ip = box.ip;
		//Update port (optional)
		if(typeof box.port != 'undefined') freebox.port = box.port;
		//app_token (optional)
		if(typeof box.app_token != 'undefined') app.app_token = box.app_token;
		//track_id (optional)
		if(typeof box.track_id != 'undefined') app.track_id = box.track_id;
	}

	request('http://'+freebox.ip+'/api_version', function(err, res, body) {
		if (!error && response.statusCode == 200) 
		{
			body = JSON.parse(body);

			freebox.uid        = body.uid;
			freebox.deviceName = body.device_name;
			freebox.deviceType = body.device_type;

			freebox.apiVersion = body.api_version;
			freebox.apiCode    = 'v'+body.api_version.substr(0,1);
			freebox.apiBaseUrl = body.api_base_url;

			freebox.url        = 'http://'+freebox.ip+':'+freebox.port+freebox.apiBaseUrl+freebox.apiCode+'/';

			controller.emit('ready', freebox);	

		}
		else
		{
			flash(error);
		}

	});
};