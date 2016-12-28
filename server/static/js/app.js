var app = angular.module('d3funApp', [
  'ngRoute',
  'ui.bootstrap',
  'ngResource'
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

app.service('Resources', ['$resource', function ($resource) {
  /* ARRAY TYPES */
  this.getApiList = function () {
    return $resource('/api/list')
  }

  /* OBJECT TYPES */
}])

app.controller('DataSelectionCtrl', ['$scope', 'Resources', function ($scope, Resources) {
  $scope.apiList = Resources.getApiList().query(function (list) {
    $scope.selectedApi = list[0].url
  })
  $scope.dataSelectStage = 0
  // $scope.selectedApi = $scope.apiList[0].value
}])

