'use strict';

angular.module( 'myDirectives' , [] )

	.directive('userinfo' , function() {

		return {

			restrict: 'E',

			scope: {
				user : "=user"
			},

			template: "User : <b>{{user.firstName}}</b> <b>{{user.lastName}}</b>"

		};
	
	})

	.directive ('compareTo' , function() {
    
	    return {
			require: "ngModel",
			scope: {
				otherModelValue: "=compareTo"
			},
			link: function(scope, element, attributes, ngModel) {

				ngModel.$validators.compareTo = function(modelValue) {
					return modelValue == scope.otherModelValue;
				};

				scope.$watch("otherModelValue", function() {
					ngModel.$validate();
				});
			}
	    };
  	})

	.directive('makeMap', function() {

	  var directive = {
	    restrict: 'EA',
	    templateUrl: 'partials/site/map.html',
	    scope: {
	      map: '='
	    },
	    link: function(scope, element, attrs) {
	      console.log("you are in map directive link");
	    },
	    controller: function mapController($scope) {

	        $scope.zoomIn = function() {
	          $scope.map.zoom++;
	        };
	        $scope.zoomOut = function() {
	          $scope.map.zoom--;
	        };
	        $scope.mapDimensions = function() {
	          if (!$scope.map.width)
	            var width = 600;
	          else 
	            width = $scope.map.width;
	          if (!$scope.map.height)
	            var height = 600;
	          else
	            height = $scope.map.height;
	          return width + 'x' + height;
	        }
	      }
	    };
	  return directive;
	 });
