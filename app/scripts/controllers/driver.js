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
              $scope.pagedDriversList = [];
              
              ergastAPIservice.getDrivers().success(function (response) {
                                                    //Dig into the responde to get the relevant data
                                                    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                                                    $scope.setPagingData($scope.driversList, $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
                                                    });
              

              
              $scope.filterOptions = {
              filterText: '',
              useExternalFilter: true
              };
              $scope.totalServerItems = 0;
              $scope.pagingOptions = {
              pageSizes: [5, 10, 20],
              pageSize: 10,
              currentPage: 1
              };
              $scope.setPagingData = function(data, page, pageSize){
              var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
              $scope.pagedDriversList = pagedData;
              $scope.totalServerItems = data.length;
              if (!$scope.$$phase) {
              $scope.$apply();
              }
              };
              
              
              
              $scope.$watch('pagingOptions', function (newVal, oldVal) {
                            if (newVal !== oldVal) {
                            $scope.setPagingData($scope.driversList, $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
                            }
                            }, true);
              $scope.$watch('filterOptions', function (newVal, oldVal) {
                            if (newVal !== oldVal) {
                            $scope.setPagingData($scope.driversList, $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
                            }
                            }, true);
              

              $scope.gridOptions = {
              data: 'pagedDriversList',
              columnDefs: [{field:'Driver.nationality', displayName:'Nationality', cellTemplate: '<img ng-src="images/flags/{{Driver.nationality}}.png" lazy-src />'},
                           {field:'Driver.givenName', displayName:'givenName'},
                           {field:'Driver.familyName', displayName:'familyName'},
                           {field:'Constructors[0].name', displayName:'Constructors'},
                           {field:'points', displayName:'Point', cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 200}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}],
              showGroupPanel: true,
              jqueryUIDraggable: true,
              enablePaging: true,
              showFooter: true,
              totalServerItems: 'totalServerItems',
              pagingOptions: $scope.pagingOptions,
              filterOptions: $scope.filterOptions
              
              };
  });



