(function() {
  'use strict';

  angular.module('chezPanisseCafeApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('/', {
          url: '/',
          templateUrl: 'views/main.html',
          controllerAs: 'mVm',
          controller: 'MainCtrl'
        })
    });
})()
