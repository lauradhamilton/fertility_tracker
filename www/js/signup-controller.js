'use strict';

angular.module('starter.controllers').controller('SignupCtrl',
 
  function($scope, $q, $state, $ionicLoading, Auth, User, Signup) {

    $scope.months_trying = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,"25+"];

    $scope.user = {
      email: '',
      password: '',
      trying_to_conceive: '',
      irregular_cycles: '',
      months_trying: '',
      first_name: ''
    };

    $scope.errorMessage = null;

    $scope.signup = function() {
      $scope.errorMessage = null;

      $ionicLoading.show({
        template: 'Please wait...'
      });

      createAuthUser().then(login)
                      .then(createMyAppUser)
                      .then($state.go('home'))
                      .then($ionicLoading.hide())
                      .catch(handleError);
    };

    function createAuthUser() {
      return Auth.createUser(
        $scope.user.email,
        $scope.user.password,
        $scope.user.trying_to_conceive,
        $scope.user.irregular_cycles,
        $scope.user.months_trying,
        $scope.user.first_name);
    }

    function sendPasswordResetEmail(authUser) {
      var defer = $q.defer();

      Auth.sendPasswordResetEmail(authUser.email).then(function() {
        defer.resolve(authUser);
      });

      return defer.promise;
    }

    function login(authUser) {
      return Auth.login($scope.user.email, $scope.user.password);
    }

    function createMyAppUser(authUser) {
      return User.create(
        authUser.uid,
        authUser.email,
        $scope.user.trying_to_conceive,
        $scope.user.irregular_cycles,
        $scope.user.months_trying,
        $scope.user.first_name);
    }

    function goToChangePassword() {
      $ionicLoading.hide();
      $state.go('change-password');
    }

    function goToHome() {
      $state.go('home');
    }

    function handleError(error) {
      switch (error.code) {
        case 'INVALID_EMAIL':
          $scope.errorMessage = 'Invalid email';
          break;
        case 'EMAIL_TAKEN':
          $scope.errorMessage = 'Email already exists';
          break;
        default:
          $scope.errorMessage = 'Error: [' + error.code + ']';
      }

      $ionicLoading.hide();
    }
  });
