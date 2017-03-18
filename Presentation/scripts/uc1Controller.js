(function() {

    var height = 300;
    var width = 380;


    var foo = (function proceed() {
        var matrix = [[100, 400, 300, 500], [300, 200, 400], [200, 300, 200, 500, 400]];
        var i = 0;
        var test = function () {
            update(svgElement, matrix[i]);
            i++;
            if (i >= matrix.length) {
                i = 0;
            }
        };
        return test;
    })();

    var svgElement = d3.select("#uc1")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .attr("class", "demo")
        .on("click", foo);

    svgElement.append("text").attr("id", "text1").attr("y", 20).attr("x", 30).style("text-anchor", "start");

    update(svgElement, [100, 200, 150, 300]);

    function update(svg, data) {

        var margin = 50;

        svg.select("#text1").text("Data: [ " + data + " ]");


        var elements = svg.selectAll(".celement").data(data);

        elements.exit().remove();

        var circles = svg.selectAll(".celement").data(data);
        //.attr("fill", "orange");

        circles.exit().remove();

        circles.enter().append("rect")
            .attr("class", "celement")
            .attr("y", function (d, i) {
                return i * 50 + margin
            })
            .attr("x", 30)
            .attr("height", 20)
            //.attr("fill", "green")
            .merge(circles)
            .attr("width", function (d) {
                return d
            });

    }
})();