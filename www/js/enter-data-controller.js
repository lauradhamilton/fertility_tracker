'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function($scope, $stateParams, $q, $state, $ionicLoading, $firebase, $filter, FIREBASE_ROOT, Auth, User, Signup){
    $scope.data_date = new Date($stateParams.date);

    var previous_date = $scope.data_date - 1000*60*60*24;
    var next_date = $scope.data_date + 1000*60*60*24;

    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];

    $scope.goToPreviousDate = function() {
      $state.go('enter-data/:date', {date: previous_date});
      $stateParams.date = $scope.data_date;
    }

    $scope.goToNextDate = function() {
      $state.go('enter-data/:date', {date: next_date});
      $stateParams.date = $scope.data_date
    }

    $scope.date = {
      data_date: '',
      temperature: '',
      opk: '',
      cm: ''};

    $scope.enter_daily_data = function() {
      var formattedDate = $filter('date') ($scope.data_date, 'yyyy-MM-dd');
      User.enter_data(
        formattedDate,
        $scope.date.temperature,
        $scope.date.opk,
        $scope.date.cm
      )
      $state.go('home');
    };

  }
);
