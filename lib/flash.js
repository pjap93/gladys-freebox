/**
 * flash method
 *
 * Just a debug message
 * 
 * @param  string msg  string type
 * @return void
 */
module.exports = function flash(msg, type){
	if(!type) type = 'error';

	if(type == 'error') {
		console.log("\nERROR : ");
	} 
	else {
		console.log('\nINFO : ');
	}

	console.log(msg);
	console.log("\n");
};