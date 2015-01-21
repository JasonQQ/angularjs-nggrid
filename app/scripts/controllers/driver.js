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
              $scope.gridOptions = {
              data: 'driversList',
              columnDefs: [{field:'Driver.nationality', displayName:'Nationality'},
                           {field:'Driver.givenName', displayName:'givenName'},
                           {field:'Driver.familyName', displayName:'familyName'},
                           {field:'Constructors[0].name', displayName:'Constructors'},
                           {field:'points', displayName:'Point', cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 200}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}],
              showGroupPanel: true,
              jqueryUIDraggable: true
              };
  });



