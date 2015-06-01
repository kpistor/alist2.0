'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp')
  .controller('MainCtrl', ['$scope','$routeParams','$http', function ($scope, $routeParams, $http) {
    $scope.testList = [
      {'name':'thing 1'},
      {'name':'thing 2'},
      {'name':'thing 3'}
    ];

    $scope.dataToSave = {};

    $scope.update = function(authenticationData) {
        $scope.dataToSave = angular.copy(authenticationData);
        $http.post('/',{}).success(function (data, status) {

        }).
        error(function (data, status) {

        });
    }
    $scope.authenticationData = {
        firstName: '',
        lastName: ''
    }

  }]);

// 'use strict';

// describe('Controller: MainCtrl', function () {

//   // load the controller's module
//   beforeEach(module('alistApp'));

//   var MainCtrl,
//       scope,
//       $httpBackend;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('/api/things')
//       .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

//     scope = $rootScope.$new();
//     MainCtrl = $controller('MainCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of things to the scope', function () {
//     $httpBackend.flush();
//     expect(scope.awesomeThings.length).toBe(4);
//   });
// });
