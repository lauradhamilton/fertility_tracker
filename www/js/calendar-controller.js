'use strict';

angular.module('starter.controllers').controller('CalendarCtrl',

  function($scope, $q, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth, User){
    // line graph
    var firebaseRef = new Firebase("https://fertility-tracker.firebaseio.com/users/simplelogin:141");
    var fireGrapher1 = new FireGrapher(firebaseRef, "#fertilityChart", {
      type : "line",
      path: "$date",
      title: "Fertility",
      xCoord: {
        "label" : "Day",
        "value" : "dayOfMonth",
        "min": 0,
        "max": 30
      },
      yCoord: {
        "label" : "Temperature",
        "value" : "temperature",
        "min": 95,
        "max": 105
      },
      series: "$user"
    }); 
  }
);

