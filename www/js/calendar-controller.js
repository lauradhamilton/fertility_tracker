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

    var userRef = new Firebase('https://fertility-tracker.firebaseio.com/users/' + 'simplelogin:141');
    userRef.on('value', function (snapshot) {
      var calendarInfo = snapshot.val();
      console.log(calendarInfo)
    });

    // line graph
    var fireGrapher1 = new FireGrapher(userRef.child("stocks"), "#stockChart1", {
      type : "line",
      path: "$symbol/*",
      title: "Price over Time (Stocks in USD)",
      xCoord: {
        "label" : "Time",
        "value" : "time",
        "min": 0,
        "max": 30
      },
      yCoord: {
        "label" : "Price",
        "value" : "price",
        "min": 40,
        "max": 150
      },
      series: "$symbol"
    });
    
  }
);

