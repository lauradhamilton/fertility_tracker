'use strict';

angular.module('starter.controllers').controller('CalendarCtrl',

  function($scope, $q, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth, User){
  $scope.graph = {'width': 265, 'height': 134};
  $scope.circles = [
    {'x': 15, 'y': 20, 'r':30},
    {'x': 35, 'y': 60, 'r':20},
    {'x': 55, 'y': 10, 'r':40},
  ]
}
);

