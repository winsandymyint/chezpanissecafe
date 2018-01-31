'use strict';

/**
 * @ngdoc overview
 * @name chezPanisseCafeApp
 * @description
 * # chezPanisseCafeApp
 *
 * Main module of the application.
 */
angular
  .module('chezPanisseCafeApp', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.select',
    '720kb.datepicker',
    'ngToast',
    'bw.paging',
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  })
  .config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
      verticalPosition: 'top',
      horizontalPosition: 'center',
      maxNumber: 3
    });
  }]);
