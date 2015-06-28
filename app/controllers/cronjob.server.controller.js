'use strict';

/**
 * Module dependencies.
 */
var CronJob = require('cron').CronJob,
	api = require('./pingdom.server.controller'),
	record = require('../factories/record.server.factory');

exports.init = function(){

	console.log('starting cronjob');

	var job = new CronJob({
	  cronTime: '0 */1 * * * *',
	  onTick: function() {
	    console.log('Tick!');

	    api.getChecks()
		.spread(function(checks, response){
			record.updateRecord(checks);
		});
	  },
	  start: false,
	  timeZone: 'Europe/Amsterdam'
	});
 	job.start();
};