var data = [[0,0],[1,1],[2,4],[3,9],[4,16],[5,25],[6,36],[7,49],[8,64],[9,81],[10,100]];

var margin = {top: 50, right: 90, bottom: 50, left: 90}
, width = 1000 - margin.left - margin.right
, height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d[0]; })])
    .range([ 0, width ]);

var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d[1]; })])
    .range([ height, 0 ]);

var chart = d3.select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('class', 'main')

main.append('text').attr("x", 450 ).attr("y",  0 ).style("text-anchor", "middle").text('y = x^2');

var xAxis = d3.axisBottom(x);

main.append('g').attr('transform', 'translate(0,' + height + ')').attr('class', 'axis').call(xAxis);
main.append("text")
    .attr("x", 850 )
    .attr("y",  405 )
    .style("text-anchor", "middle")
    .text("x");

var yAxis = d3.axisLeft(y);

main.append('g').attr('class', 'axis').call(yAxis);
main.append("text")
    .attr("x", 0 )
    .attr("y", -15 )
    .style("text-anchor", "middle")
    .text("y");

var g = main.append("g");

g.selectAll("dots")
    .data(data)
    .enter().append("circle")
    .attr("cx", function (d) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("fill","purple")
    .attr("r", 5);
