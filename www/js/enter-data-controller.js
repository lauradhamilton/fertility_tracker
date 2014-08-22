'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function($scope, $stateParams, $q, $state, $ionicLoading, $firebase, $filter, FIREBASE_ROOT, Auth, User, Signup, $firebaseSimpleLogin){
    
    var data_date_year = parseInt($stateParams.date.substring(0,4));
    var data_date_month = parseInt($stateParams.date.substring(4,6));
    var data_date_day = parseInt($stateParams.date.substring(6,9));
    $scope.data_date = new Date(data_date_year, data_date_month -1, data_date_day);

    var previous_date = $filter('date') (new Date(data_date_year, data_date_month-1, data_date_day -1), 'yyyyMMdd');
    var next_date = $filter('date') (new Date(data_date_year, data_date_month-1, data_date_day +1), 'yyyyMMdd');

    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];

    $scope.period_options = ['Spotting', 'Light', 'Medium', 'Heavy'];

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
      cm: '',
      period: '',
      sex: ''};

    var formattedDate = $filter('date') ($scope.data_date, 'yyyy-MM-dd');

    $scope.enter_daily_data = function() {
      User.enter_data(
        formattedDate,
        $scope.date.temperature,
        $scope.date.opk,
        $scope.date.cm,
        $scope.date.period,
        $scope.date.sex
      );
      $state.go('home');
    };

    Auth.getCurrentUser().then(function() {
          var dateRef = new Firebase('https://fertility-tracker.firebaseio.com/users/' + Auth.currentUser['uid'] + '/' + formattedDate);
          var sync = $firebase(dateRef);
          var syncObject = sync.$asObject();
          syncObject.$bindTo($scope, "date");
          });
    }
);
