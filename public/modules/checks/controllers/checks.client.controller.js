'use strict';

angular.module('checks').controller('ChecksController', ['$scope', '$http', 'Socket',
	function($scope, $http, Socket) {

		this.init = function(){
			this.fetchChecks();
		};

		this.fetchChecks = function(){
			$http.get('/api').
			success(function(data, status, headers, config) {
				$scope.lastUpdatedAt(data.lastUpdate);
    			$scope.checks = data.checks;
			}).
			error(function(data, status, headers, config) {
				console.error('Error! Something went wrong');
				console.error(data);
			});
		};

		Socket.on('checks.updated', function(data) {
    		$scope.checks = data.checks;
    		$scope.lastUpdatedAt(data.lastUpdate);
    		console.log('>>> Updated the checks');
		});

		$scope.lastUpdatedAt = function(timestamp){
			$scope.time = timestamp;
		}

		$scope.updateGetParams = function(){
			console.log($scope.namesFilter);
		};

		this.init();
	}
]);