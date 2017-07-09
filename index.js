
module.exports = function(sails) {
    
    //var setup = require('./lib/setup.js');
    //var exec = require('./lib/exec.js');
    //var calllogs = require('./lib/calllogs.js');
    var getBox = require('./lib/getBox.js');
    var authorize = require('./lib/authorize.js');
    var login = require('./lib/login.js');
    
    return {
        //setup: setup,
        //exec: exec,
	//callhistorique: calllogs,
	getBox: getBox,
	authorize: authorize,
	login: login
    };
};
