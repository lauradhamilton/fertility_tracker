'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function($scope, $q, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth, User){
    $scope.date = new Date();
    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];

    $scope.enter_daily_data = function() {
      var myDataRef = new Firebase('https://fertility-tracker.firebaseio.com/date');
      myDataRef.set({name: "date", text: "today"});
      alert("This is an alert");
    };
  }
);
