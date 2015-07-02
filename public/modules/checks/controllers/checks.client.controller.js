'use strict';

angular.module('checks').controller('ChecksController', ['$scope', 'Socket',
	function($scope, Socket) {

		Socket.on('checks.updated', function(checks) {
    		console.log(checks);
		});

	}
]);