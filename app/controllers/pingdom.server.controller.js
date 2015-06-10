'use strict';

/**
 * Module dependencies.
 */
var CronJob = require('cron').CronJob,
	pingdom = require('pingdom-api'),
	keys	= require('../../config/keys/keys');

exports.init = function(){

	var job = new CronJob({
	  cronTime: '0 */1 * * * *',
	  onTick: function() {
	    console.log('Tick!');
	  },
	  start: false,
	  timeZone: 'Europe/Amsterdam'
	});
 	// job.start();
};