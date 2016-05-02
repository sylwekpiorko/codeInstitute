'use strict';

angular.module('controllersNavigation' , [] )

.controller('navigation' , function( $scope , $location ){

	$scope.navigation = function() {

		return 'partials/site/navigation.html';
			
	};
	
	$scope.isActive = function ( path ) {
			return $location.path() === path;
	};	

	$scope.names = [ 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'paper', 'readable', 'sandstone', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti' ];
	$scope.selectedTemplate = $scope.names[2];

});