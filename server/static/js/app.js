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
    return $resource('/api/twitter')
  }

  /* OBJECT TYPES */
}])

app.controller('DataSelectionCtrl', ['$scope', 'Resources', function ($scope, Resources) {
  Resources.getApiList().query(function (list) {
    console.log(list)
  })
  // $scope.selectedApi = $scope.apiList[0].value
  // $scope.dataSelectStage = 0
}])


// app.service('Resources', function ($resource) {
//     this.getApiList = function () {
//       return $resource('/api/list')
//     }
//   })


