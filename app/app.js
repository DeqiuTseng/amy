'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.album',
    'myApp.mv',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});

      AV.initialize('JDseHTU9NbVAyQNVqHAuvCU3-gzGzoHsz','SuUxs91btjGn65BNpW9j95fS');
}]);
