'use strict';

angular.module('starter.controllers').controller('CalendarCtrl',

  function($scope, $q, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth, User){
    $scope.graph = {'width': 265, 'height': 134};
    $scope.points = [
      {'x': 3,  'y': 7 },
      {'x': 5,  'y': 15},
      {'x': 7,  'y': 8 },
      {'x': 11, 'y': 17},
      {'x': 13, 'y': 13},
      {'x': 17, 'y': 23}
    ];

    var x = d3.time.scale().range([0, $scope.graph.width]);
    var y = d3.scale.linear().range([$scope.graph.height, 0]);
    x.domain(d3.extent($scope.points, function(d) {return d.x}));
    y.domain(d3.extent($scope.points, function(d) {return d.y}));

    $scope.line = d3.svg.line()
      .x(function(d) {return x(d.x);})
      .y(function(d) {return y(d.y);});
    }
);

