var request = require('request');
var Promise = require('bluebird');
var box = require('./box.js');
var app = require('./app.js');

module.exports = function (cb){

    sails.log.debug(box);
    sails.log.debug(app);

    var endpoint = box.url + 'login/authorize';
    var options = {
		url    : endpoint,
		method : 'POST',
		json   : {
			   "app_id"      : app.id,
			   "app_name"    : app.name,
			   "app_version" : app.version,
			   "device_name" : app.device
			},
		encode : 'utf-8'
	};
	sails.log.debug(options);
    request(options, (err, res, body)=>{
	//sails.log.debug(err);
	sails.log.debug(body);
	//sails.log.debug(res);
        if(!err){
            gladys.param.setValue({name: 'FREEBOX_APP_TOKEN', value:  body.result.app_token});
	    gladys.param.setValue({name: 'FREEBOX_APP_TRACK', value:  body.result.track_id});
            app.token = body.result.app_token;
	    app.track = body.result.track_id;
            cb(app);
        }
    });

};