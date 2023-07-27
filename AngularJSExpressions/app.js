(function() {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Tejashree";

    $scope.sayMessage = function () {
      return "I like to read at night!";
    };
  }

})();
