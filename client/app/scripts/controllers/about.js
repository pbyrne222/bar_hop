'use strict';

/**
 * @ngdoc function
 * @name barHopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the barHopApp
 */
angular.module('barHopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
