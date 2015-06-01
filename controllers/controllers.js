var appController = angular.module('friendControllers',[]);

//List controller
appController.controller('listFriends',function($scope,friends){
  $scope.friends = {};
  //Getting our friends list
  function getFriendsList(){
    friends.getFriendsList().success(function(data){
      $scope.friends = data;
    });
  }
  getFriendsList();

});
//Profile controller
appController.controller('showProfile',function($scope){
  $scope.getProfile = function(friend){
    console.log("friend");
  }
});
