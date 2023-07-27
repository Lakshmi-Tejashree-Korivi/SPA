(function() {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  DIController.$inject = ['$scope', '$filter'];
  function DIController ($scope, $filter, $injector) {
    $scope.name = "Tejashree";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
  }

  function AnnotateMe(name, job, blah){
    return "Blah!";
  }

  console.log(AnnotateMe());

})();
