'use strict';

/**
 * @ngdoc overview
 * @name angularjsNggridApp
 * @description
 * # angularjsNggridApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsNggridApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularjsNggridApp.services',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/driver', {
        templateUrl: 'views/driver.html',
        controller: 'DriverCtrl'
      })
       .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
                })
      .otherwise({
        redirectTo: '/'
      });
  });
