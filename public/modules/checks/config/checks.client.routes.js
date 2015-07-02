'use strict';

//Setting up route
angular.module('checks').config(['$stateProvider',
	function($stateProvider) {
		// Checks state routing
		$stateProvider.
		state('checks', {
			url: '/checks',
			templateUrl: 'modules/checks/views/checks.client.view.html'
		});
	}
]);