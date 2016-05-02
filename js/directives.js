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
  	});
