'use strict';

angular.module('controllersNavigation' , [] )

.controller('navigation' , function( $scope , $location ){

	$scope.navigation = function() {

		return 'partials/site/navigation.html';
			
	};
	
	$scope.isNavActive = function ( path ) {
			return $location.path() === path;
	};	

	$scope.names = [ 'cerulean', 'cosmo', 'flatly', 'lumen', 'paper', 'readable', 'sandstone', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti' ];
	$scope.selectedTemplate = $scope.names[7];

});