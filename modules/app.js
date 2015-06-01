var friendApp = angular.module('friendApp', ['friendControllers','ngRoute','friendService']);

//Defining our routes
friendApp.config(function($routeProvider){
    //Home routes
    $routeProvider
    .when('/',
        {
          templateUrl:'views/list.html',
          controller:'listFriends'
        }
      )
    .when('/friends/:friendId',
        {
          templateUrl:'views/profile.html',
          controller:'showProfile'
        }
      )
      .otherwise({
          redirectTo:'/'
      });

});
