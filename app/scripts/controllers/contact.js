'use strict';

/**
 * @ngdoc function
 * @name angularjsNggridApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularjsNggridApp
 */
angular.module('angularjsNggridApp')
  .controller('ContactCtrl', function ($scope) {
              $scope.myData = [{name: 'Moroni', age: 50},
                               {name: 'Tiancum', age: 43},
                               {name: 'Jacob', age: 27},
                               {name: 'Nephi', age: 29},
                               {name: 'Enos', age: 34}];
              $scope.gridOptions = {
              data: 'myData',
              columnDefs: [{field:'name', displayName:'Name'},
                           {field:'age', displayName:'Age', cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 30}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'}],
              showGroupPanel: true,
              jqueryUIDraggable: true
              };
  });
