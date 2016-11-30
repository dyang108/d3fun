var svg = d3.select('#bg-anim')
  .append('svg')
  .attr('width', '100%')
  .attr('height', '100vh')
  .attr('class', 'full-screen')

var w = parseInt(d3.select('#bg-anim').style('width'), 10)
var h = parseInt(d3.select('#bg-anim').style('height'), 10)

var xscale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, w])

var yscale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, h])

var sizescale = d3.scaleLinear()
  .domain([0, 1])
  .range([5, 40])

var colorscale = d3.scaleOrdinal(d3.schemeCategory20)
var circles = []
var links = []


var rep = setInterval(function () {
  var newcirc = {
    xpos: Math.random(),
    ypos: Math.random(),
    size: Math.random(),
    color: Math.random()
  }

  if (circles.length < 150) {
    circles.push(newcirc)
    links.push({
      source: newcirc,
      target: circles[Math.floor(Math.random() * circles.length)]
    })
  } else {
    clearInterval(rep)
  }

  var simulation = d3.forceSimulation()
    .force('charge', d3.forceManyBody().strength(-1))
    .force('link', d3.forceLink().id(function (d, i) {
      return i
    }))
    // .on('tick', ticked)

  simulation.nodes(circles)
  simulation.force('link').links(links)

  svg.selectAll('circle')
    .data(circles)
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return xscale(d.xpos)
    })
    .attr('cy', function (d) {
      return yscale(d.ypos)
    })
    .transition()
    .duration(1500)
    .ease(d3.easeElastic)
    .attr('r', function (d) {
      return sizescale(d.size)
    })
    .attr('fill', function (d) {
      return colorscale(d.color)
    })
}, 500)

