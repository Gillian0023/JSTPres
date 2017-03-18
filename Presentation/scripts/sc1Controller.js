(function()
{

    var height = 100;
    var width = 1300;

    var foo = (function proceed() {
        var matrix = [[{"city": "Paris", "value": 100}, {"city": "Munich", "value": 400}, {
            "city": "Madrid",
            "value": 300
        }]];
        var i = 0;
        var test = function () {
        }
    })();

    var svgElement = d3.select("#sc1")
        .append("svg")
        .attr("class", "demo")
        .attr("height", height)
        .attr("width", width)
        .on("click", foo);

    var scale = d3.scaleLinear()
        .domain([0, 100000])
        .range([50, width-50]);

    svgElement.selectAll(".foo").data([1000, 10000, 50000])
        .enter().append("circle")
        .attr("class", "foo")
        .attr("r", 10)
        .attr("cy", 20)
        .attr("cx", function(d){return scale(d)});

    //create axis and set tick-format
    var axis = d3.axisBottom(scale).tickFormat(d3.format("d"));
    var group = svgElement.append("g").attr("transform", "translate(0, 50)");
    group.transition().duration(500).call(axis);


})();