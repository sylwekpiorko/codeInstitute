'use strict';

angular.module('controllersSite' , [] )


.controller( 'siteHome' , function( $scope , $http ) {

  console.log( "You are in siteHome controller now ..." );


  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    console.log( newWidth );
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
})


.controller( 'siteProjects' , function( $scope ) {

  // to be done

  console.log( "You are in siteProjects controller now ..." );

})


.controller( 'siteFindUs' , function( $scope , $http ) {

  console.log( "You are in siteFindUs controller now ..." );


  $scope.seba = {};
  $scope.seba.firstName = "Seba";
  $scope.seba.lastName  = "Smith";

  $scope.adam = {};
  $scope.adam.firstName = "Adam";
  $scope.adam.lastName = "Nowak";

})


.controller( 'siteStock' , function( $scope ) {

	// to be done

  console.log( "You are in siteStock controller now ..." );

})


.controller( 'login' , function( $scope , $http ) {

    // TODO collect data from form and send to the mysql base to authorise

  console.log( "You are in login controller now ..." );

    $scope.input = {};

    $scope.formSubmit = function () {
      $scope.errors = {};
      $scope.errors.login = 'Email or password not valid';
      console.log( $scope.input );
    };    

})


.controller( 'register' , function( $scope , $http ) {

    // TODO collect data from form and send to the mysql base to authorise

  console.log( "You are in register controller now ..." );  

    $scope.registerForm = {
      username : '',
      email : '',
      password : '',
      passconf : ''
    };

    $scope.submitForm = function (isValid) {      

      console.log( "Form submited" );

      if (isValid) {
        alert('Form is valid');
      }

      console.log( $scope.registerForm.username );
      console.log( $scope.registerForm.email );
      console.log( $scope.registerForm.password );
      console.log( $scope.registerForm.passconf );

    };

});
    
