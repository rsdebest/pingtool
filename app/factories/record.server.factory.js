'use strict';

var mongoose = require('mongoose'),
	Checks = require('../models/document.server.model').Checks,
	id = 'master',
	data = {},
	socketio;

exports.setup = function(app){
	socketio = app.get('socketio');
};

exports.updateRecord = function(checksData){

	data.lastUpdate = new Date();
	data.checks = checksData;

	Checks.update({_id : id },
		data,
		{ upsert : true },
		function(error, count, status){
			if(error){
				console.log(error);
			}
			if(status.ok){
				socketio.sockets.emit('checks.updated', data);
				console.log('Emitted checks.updated');
			}
	});
};