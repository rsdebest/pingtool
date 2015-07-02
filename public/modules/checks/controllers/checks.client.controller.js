'use strict';

angular.module('checks').controller('ChecksController', ['$scope', 'Socket',
	function($scope, Socket) {

		Socket.on('checks.updated', function(data) {
    		console.log(data);
    		$scope.checks = data.checks;
    		$scope.lastUpdatedAt(data.lastUpdate);
    		console.log(data.checks);
		});

		$scope.lastUpdatedAt = function(timestamp){
			$scope.time = timestamp;
		}
	}
]);