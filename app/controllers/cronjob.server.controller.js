'use strict';

/**
 * Module dependencies.
 */
var CronJob = require('cron').CronJob,
	pingdom = require('pingdom-api'),
	keys	= require('../../config/keys/keys');

var pingdomApi = require('pingdom-api')({
    user: keys.pingdom.email,  // user account login
    pass: keys.pingdom.password,  // user account password
    appkey: keys.pingdom.apiKey
});


exports.init = function(){

	var job = new CronJob({
	  cronTime: '0 */1 * * * *',
	  onTick: function() {
	    console.log('Tick!');

	 	//pingdomApi.getChecks()
		// .spread(function(checks, response){
		//   console.log(checks);
		// })
		// .catch(function(e){
		//   console.log(e);
		// });
		console.log('Tack!');
	  },
	  start: false,
	  timeZone: 'Europe/Amsterdam'
	});
 	job.start();
};