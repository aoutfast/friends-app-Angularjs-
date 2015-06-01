var friendService = angular.module('friendService', [])

//A factory that brings my friends records
  .factory('friends',function($http){

      return{
              getFriendsList : function() {
                return $http.get('friends.json');
              }
            }

  });
