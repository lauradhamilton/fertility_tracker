'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function($scope, $q, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth, User){
    $scope.date = new Date();
    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];

    $scope.enter_daily_data = User.enter_data(
      Date(),
      "97",
      true,
      "Watery"
    );

  }
);
