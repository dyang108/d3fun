
var app = angular.module('d3funApp', [
  'ngRoute',
  'ui.bootstrap'
])

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'static/partials/index.html'
    })
    .when('/create', {
      templateUrl: 'static/partials/create.html'
    })
    .when('/examples', {
      templateUrl: 'static/partials/examples.html'
    })
    .otherwise({
      redirectTo: '/'
    })
  }
])

app.controller('DataSelectionCtrl', function ($scope) {
  $scope.apiList = [{
    name: 'Twitter',
    value: 'thingy'
  }]
  $scope.selectedApi = $scope.apiList[0].value
  $scope.dataSelectStage = 0
})
