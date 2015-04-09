'use strict';

angular.module('myApp.mv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mv', {
    templateUrl: 'mv/mv.html',
    controller: 'mvCtrl'
  });
}])

.controller('mvCtrl', [function() {

}]);