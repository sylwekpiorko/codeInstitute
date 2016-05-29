'use strict';

angular.module('app' , [ 'ngRoute' , 'controllersNavigation' , 'controllersSite' , 'ngAnimate', 'ngTouch' , 'ui.bootstrap' , 'myDirectives' ] )

	.config( function( $routeProvider , $httpProvider ) {

	$routeProvider
		
		// =============== Site  =====================

		.when( '/home' , {
		controller: 'siteHome',
		templateUrl: 'partials/site/home.html'
		})

		.when( '/about-us' , {
		controller: 'aboutUs',
		templateUrl: 'partials/site/about-us.html'
		})

		.when( '/projects' , {
		controller: 'siteProjects',
		templateUrl: 'partials/site/projects.html'  
		})

		.when( '/find-us' , {
		controller: 'siteFindUs',
		templateUrl: 'partials/site/find-us.html'  
		})

		.when( '/stock' , {
		controller: 'siteStock',
		templateUrl: 'partials/site/stock.html'  
		})
	
		// =============== Login & Register ============

		.when( '/login' , {
		controller: 'login',
		templateUrl: 'partials/site/login.html'
		})

		.when( '/register' , {
		controller: 'register',
		templateUrl: 'partials/site/register.html'
		})


		// =============== Default =====================

		.otherwise({
		redirectTo: '/home'
		})

	});