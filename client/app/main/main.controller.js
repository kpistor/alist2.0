'use strict';

angular.module('alistApp')
  .controller('MainCtrl', ['$scope','$routeParams','$http', function ($scope, $routeParams, $http) {
    $scope.testList = [
      {'name':'thing 1'},
      {'name':'thing 2'},
      {'name':'thing 3'}
    ];

    $scope.dataToSave = {};

    $scope.update = function(authenticationData) {
        $scope.dataToSave = angular.copy(authenticationData);
        $http.post('/api/passengerInfo',$scope.dataToSave).success(function (data, status) {
        }).
        error(function (data, status) {
        });
    }
    $scope.authenticationData = {
        firstName: '',
        lastName: '',
        confirmation: ''
    }

  }]);

// angular.module('alistApp')
//   .controller('MainCtrl', function ($scope, $http) {
//     $scope.awesomeThings = [];

//     $http.get('/api/things').success(function(awesomeThings) {
//       $scope.awesomeThings = awesomeThings;
//     });

//   });
