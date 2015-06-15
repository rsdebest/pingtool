'use strict';

/**
 * Module dependencies.
 */
var keys = require('../../config/keys/keys'),
	pingdom = require('pingdom-api')({
    	user: keys.pingdom.email,  // user account login
    	pass: keys.pingdom.password,  // user account password
    	appkey: keys.pingdom.apiKey
	});

exports.getChecks = function(){
	return pingdom.getChecks();
};

// -- Usagge:
// 	pingdomApi.getChecks()
// .spread(function(checks, response){
// 	console.log(checks);
// })
// .catch(function(e){
//   console.log(e);
// });
//};