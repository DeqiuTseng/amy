'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope',function($scope) {
      $scope.article={
        title:"",
        content:"",
        author:"deqiutseng"
      };
      loadingArticle();

      function loadingArticle(){
        var query = new AV.Query('Article');
        //query.equalTo('pubUser', 'LeanCloud官方客服');
        query.find().then(function(results) {
            console.info(angular.toJson(results));
          $scope.$apply(function(){
            $scope.articles=results;
            for(var arcit in $scope.articles){
              console.info($scope.article[arcit]);
            }
          });


        }, function(error) {
          console.log('Error: ' + error.code + ' ' + error.message);
        });
      }
  $scope.addArticle=function(){
    if($scope.article.title=="" || $scope.article.content==""){
      return;
    }
    var Article = AV.Object.extend('Article');
    var Article = new Article();
    var articleObj={
      title: $scope.article.title,
      content:$scope.article.content
    };
    console.info(angular.toJson(articleObj));

    Article.save(articleObj).then(function() {
      alert('LeanCloud works!');
    }).catch(function(err) {
      alert('error:' + err);
    });
  }

}]);