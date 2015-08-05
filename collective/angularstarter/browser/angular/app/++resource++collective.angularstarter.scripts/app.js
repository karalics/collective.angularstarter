var app = angular.module("firstApp", ["solr"]);

app.controller("MainCtrl", ["$scope", "$location",  function($scope, $location){

  $scope.params= $location.search();
}]);

  app.directive("resultDocument", function() {
    return {
      restrict: "E",
      scope :{
        doc : "=record",
      },
      templateUrl:"++resource++collective.angularstarter.views/my_result_document.html",
    }
  });
