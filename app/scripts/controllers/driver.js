'use strict';

/**
 * @ngdoc function
 * @name angularjsNggridApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsNggridApp
 */
angular.module('angularjsNggridApp')
  .controller('DriverCtrl', function ($scope, ergastAPIservice) {
              $scope.nameFilter = null;
              $scope.driversList = [];
              
              ergastAPIservice.getDrivers().success(function (response) {
                                                    //Dig into the responde to get the relevant data
                                                    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                                                        });
  });
