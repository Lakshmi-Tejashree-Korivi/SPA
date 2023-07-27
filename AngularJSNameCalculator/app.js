(function () {
  'use strict';

  angular.module('AngularJS Name Calculator', [])
//name of application and list of dependencies.
  .controller('NameCalculatorController', function($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function () {
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };


    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }

      return totalStringValue;
    }
//$ means this is reserved for something provided by AngularJS
  });

}) ();
