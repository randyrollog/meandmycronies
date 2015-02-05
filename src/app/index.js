'use strict';

angular.module('meandmycronies', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      
      .state('downloads', {
        url: '/downloads',
        templateUrl: 'app/downloads/downloads.html',
        controller: 'DownloadsCtrl'
      })

      .state('callback', {
        url: '/callback',
        templateUrl: 'app/downloads/callback.html',
        controller: 'DownloadsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;