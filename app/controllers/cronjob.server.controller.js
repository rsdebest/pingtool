'use strict';

/**
 * Module dependencies.
 */
var CronJob = require('cron').CronJob,
	api = require('./pingdom.server.controller'),
	mongoose = require('mongoose'),
	model = require('../models/document.server.model');

exports.init = function(){

	console.log('starting cronjob');

	// checksModel.save(function(err, response) {
 //  		if (err) return handleError(err);
 //  		console.log('--saved');
 //  		console.log(response);
	// });
	// var checksCollection = new model.Checks(checks);
	// checksCollection.save();

	var job = new CronJob({
	  cronTime: '0 */1 * * * *',
	  onTick: function() {
	    console.log('Tick!');

	    api.getChecks()
		.spread(function(checks, response){
			var test = new model.Checks(checks);
			test.save();
		});
	  },
	  start: false,
	  timeZone: 'Europe/Amsterdam'
	});
 	job.start();
};