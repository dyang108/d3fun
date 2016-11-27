
// initialize canvas
var svg = d3.select('#svg-canvas')
  .append('svg')
  .attr("width", "100%")
  .attr("height", "80vh")
var w = parseInt(d3.select('#svg-canvas').style('width'), 10)
var h = parseInt(d3.select('#svg-canvas').style('height'), 10)


// initialize angular
var app = angular.module('d3Test', [])

app.controller("CircleController", function CircleController ($scope) {
  $scope.circles = []
  $scope.thing = "hello"
  $scope.newcirc = {
    xpos: 250,
    ypos: 250,
    size: 30,
    color: 250
  }
  $scope.addCircle = function (info) {
    $scope.circles.push($scope.newcirc)
    var xscale = d3.scaleLinear()
      .domain([0, 500 /*d3.max($scope.circles, function (d) {
        return d.xpos
      })*/])
      .range([0, w])

    var yscale = d3.scaleLinear()
      .domain([0, 500/*d3.max($scope.circles, function (d) {
        return d.ypos
      })*/])
      .range([h, 0])

    var colorscale = d3.scaleLinear()
      .domain([0, 500])
      .range(["red", "blue"]);

    svg.selectAll("circle")
      .data($scope.circles)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xscale(d.xpos)
      })
      .attr("cy", function (d) {
        return yscale(d.ypos)
      })
      .transition()
      .attr("r", function (d) {
        return d.size
      })
      .attr("fill", function (d) {
        return colorscale(d.color)
      })
  }
})

