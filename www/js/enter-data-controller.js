'use strict';

angular.module('starter.controllers').controller('EnterDataCtrl',

  function Ctrl($scope){
    $scope.date = new Date();
    $scope.cm_options = ['Sticky','Creamy','Egg White','Watery'];
  }
);
