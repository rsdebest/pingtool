'use strict';

angular.module('checks').controller('ChecksController', ['$scope', '$http', 'Socket', '$location',
	function($scope, $http, Socket, $location) {

		this.init = function(){
			$scope.checks = [];
			$scope.totalChecks = $scope.checks.length;

			// Refactor to a service...
			this.fetchChecks();

			if($location.search().filter){
				$scope.checksFilter = $location.search().filter;
			}
		};

		this.fetchChecks = function(){
			$http.get('/api')
			.success(function(data, status, headers, config) {
				$scope.lastUpdatedAt(data.lastUpdate);
    			$scope.checks = data.checks;
			})
			.error(function(data, status, headers, config) {
				console.error('Error! Something went wrong');
				console.error(data);
			});
		};

		$scope.saveFilterUrl = function(){
			$location.search('filter', $scope.checksFilter);
		};

		Socket.on('checks.updated', function(data) {
    		$scope.checks = data.checks;
    		$scope.lastUpdatedAt(data.lastUpdate);
    		console.log('>>> Updated the checks');
    		console.log(data.checks);
		});

		$scope.lastUpdatedAt = function(timestamp){
			$scope.time = timestamp;
		}

		this.init();
	}
]);