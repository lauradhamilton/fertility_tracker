'use strict';

angular.module('starter.services').service('User',
  function($q, $firebase, FIREBASE_ROOT, Auth) {
    var usersRef = new Firebase(FIREBASE_ROOT + '/users');
    var currentUser = null;

    this.loadCurrentUser = function() {
      var defer = $q.defer();
      var currentUserRef = usersRef.child(Auth.currentUser.uid);
      
      currentUser = $firebase(currentUserRef);
      currentUser.$on('loaded', defer.resolve);

      return defer.promise;
    };

    this.create = function(id, email, trying_to_conceive, irregular_cycles, months_trying, first_name) {
      var users = $firebase(usersRef);

      return users.$child(id).$set({
        email: email,
        trying_to_conceive: trying_to_conceive,
        irregular_cycles: irregular_cycles,
        months_trying: months_trying,
        first_name: first_name
        });
    };

    this.enter_data = function(date, temperature, opk, cm, period, sex) {
      var dateRef = new Firebase('https://fertility-tracker.firebaseio.com/users/' + Auth.currentUser.uid + '/' + date);
      var firebaseDate = $firebase(dateRef);
      var dayOfMonth = date.slice(-2);
      firebaseDate.$update({data_date:date, dayOfMonth: dayOfMonth, temperature: temperature, opk: opk, cm: cm, period: period, sex: sex});
    };

    this.recordPasswordChange = function() {
      var now = Math.floor(Date.now() / 1000);
      
      return currentUser.$update({ passwordLastChangedAt: now });
    };

    this.hasChangedPassword = function() {
      return angular.isDefined(currentUser.passwordLastChangedAt);
    };
  });
