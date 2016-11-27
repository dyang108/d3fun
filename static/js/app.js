'use strict'

var app = angular.module('d3funApp', [
  'ngRoute',
])

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '../static/partials/index.html',
    }).
    when('/create', {
      templateUrl: '/static/partials/create.html',
    }).
    otherwise({
      redirectTo: '/'
    })
  }
])
