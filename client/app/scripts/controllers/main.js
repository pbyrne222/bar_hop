'use strict';

/**
 * @ngdoc function
 * @name barHopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the barHopApp
 */
angular.module('barHopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
