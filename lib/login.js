var request = require('request');
var Promise = require('bluebird');
var box = require('./box.js');
var app = require('./app.js');
var crypto = require('crypto');
var getChallenge = require('./getChallenge.js');

module.exports = function(token,cb){
	getChallenge(cb);
        var endpoint = box.url + 'login/session';
        app.token = token;
        app.password = crypto.createHmac('sha1', app.token).update(box.challenge).digest('hex');
        var options = {
            	url: endpoint,
    		method: 'POST',
    		json: {
    			   "app_id": app.id,
    			   "password": app.password
    			},
    		encode: 'utf-8'
       	 	};
        request(options, (err, res, body)=>{
	sails.log.debug(body);
            if(!err){
		
                if(body.success){
                    box.token = body.result.session_token;
                    cb(true);
                }else cb(false);
            }
        });

	sails.log.debug(box);
	sails.log.debug(app);

};

