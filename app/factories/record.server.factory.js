'use strict';

var mongoose = require('mongoose'),
	Checks = require('../models/document.server.model').Checks,
	id = 'master',
	data = {};

exports.updateRecord = function(checksData){

	data.lastUpdate = new Date();
	data.checks = checksData;

	Checks.update({
		_id : id },
		data,
		{ upsert : true },
		function(err, doc){
			if(err){
				console.log(err);
			}
			if(doc){
				console.log(doc);
			}
	});
};