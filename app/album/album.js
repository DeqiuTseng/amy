'use strict';

angular.module('myApp.album', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/album', {
    templateUrl: 'album/album.html',
    controller: 'albumCtrl'
  });
}])

.controller('albumCtrl', [function() {

}]);