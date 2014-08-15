'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function($scope, $state, $ionicLoading, $firebase, FIREBASE_ROOT, Auth){
    $scope.date = new Date();
    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];

    $scope.enter_daily_data = function() {
     $ionicLoading.show({
        template: 'Please wait...'
      });
      $state.go('home').then($ionicLoading.hide());
    };
  }
);
