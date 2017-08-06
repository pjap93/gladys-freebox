var request = require('request');
var Promise = require('bluebird');
var box = require('./box.js');
var app = require('./app.js');

module.exports = function(){

// On demande la version de la freebox

    request('http://'+box.ip+'/api_version', function(err, res, body) {
	if(err)return reject(err);

	if(res.statusCode !== 200) return reject(new Error(`Status code failed: ${res.statusCode}`));
	
	if (!error && response.statusCode == 200) {
		body = JSON.parse(body);

		box.uid        = body.uid;
		box.deviceName = body.device_name;
		box.deviceType = body.device_type;

		box.apiVersion = body.api_version;
		box.apiCode    = 'v'+body.api_version.substr(0,1);
		box.apiBaseUrl = body.api_base_url;

		box.url        = 'http://'+box.ip+':'+box.port+box.apiBaseUrl+box.apiCode+'/';

		if(box.apiCode === 4) {
			gladys.modules.speak.say({language: 'fr', text: 'J'ai détecté une Freebox Révolution vé 4.'});
		}

		return resolve(body);
	}
    
    })

};
