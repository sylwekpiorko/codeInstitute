'use strict';

angular.module('controllersSite' , [] )


.controller( 'siteHome' , function( $scope , $http ) {

  console.log( "You are in siteHome controller now ..." );


  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  slides = $scope.slides = [
    {image: 'images/DSC_4122.jpg', text: 'Gas measure gauges', id: 0},
    {image: 'images/DSC_4127.jpg', text: 'Welding', id: 1},
    {image: 'images/DSC_4227.jpg', text: 'Quality testing', id: 2},
    {image: 'images/DSC_4548.jpg', text: 'Grinding', id: 3}
  ];

  // $scope.addSlide = function() {
  //   var newWidth = 600 + slides.length + 1;
  //   console.log( newWidth );
  //   slides.push({
  //     image: 'http://lorempixel.com/' + newWidth + '/300',
  //     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
  //     id: currIndex++
  //   });
  // };

  // $scope.randomize = function() {
  //   var indexes = generateIndexesArray();
  //   assignNewIndexesToSlides(indexes);
  // };

  // for (var i = 0; i < 4; i++) {
  //   $scope.addSlide();
  // }
  // console.log( slides );

  // Randomize logic below

  // function assignNewIndexesToSlides(indexes) {
  //   for (var i = 0, l = slides.length; i < l; i++) {
  //     slides[i].id = indexes.pop();
  //   }
  // }

  // function generateIndexesArray() {
  //   var indexes = [];
  //   for (var i = 0; i < currIndex; ++i) {
  //     indexes[i] = i;
  //   }
  //   return shuffle(indexes);
  // }

  // http://stackoverflow.com/questions/962802#962890
  // function shuffle(array) {
  //   var tmp, current, top = array.length;

  //   if (top) {
  //     while (--top) {
  //       current = Math.floor(Math.random() * (top + 1));
  //       tmp = array[current];
  //       array[current] = array[top];
  //       array[top] = tmp;
  //     }
  //   }
  //   console.log( array );
  //   return array;
  // }
})


.controller( 'aboutUs' , function( $scope ) {

  // to be done

  console.log( "You are in aboutUs controller now ..." );


}).controller( 'siteProjects' , function( $scope ) {

    // Set of Photos
    $scope.photos = [
        {src: 'images/projects/1.jpg', desc: '1'},
        {src: 'images/projects/2.jpg', desc: '2'},
        {src: 'images/projects/3.jpg', desc: '3'},
        {src: 'images/projects/4.jpg', desc: '4'},
        {src: 'images/projects/5.jpg', desc: '5'},
        {src: 'images/projects/6.jpg', desc: '6'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
  console.log( "You are in siteProjects controller now ..." );

})


.controller( 'siteFindUs' , function( $scope , $http ) {

  $scope.title = 'About Us';
  $scope.maps = [{
    address: 'Ojca Maksymiliana Marii Kolbe, Piła, Polska',
    zoom: 16,
    width: 600
    }, {
    address: '51st Street, New York, New York',
    zoom: 14,
    width: 400
    }];
  $scope.map = $scope.maps[0];

  console.log( "You are in siteFindUs controller now ..." );
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
    
