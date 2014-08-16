'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function($scope, $q, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth, User){
    $scope.data_date = new Date();
    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];

    $scope.date = {
      data_date: '',
      temperature: '',
      opk: '',
      cm: ''};

    $scope.enter_daily_data = function() {
      User.enter_data(
        Date(),
        $scope.date.temperature,
        $scope.date.opk,
        $scope.date.cm
      )
      $state.go('home');
    };

  }
);
