window.onload = function () {

    var paper = Raphael("raphaelCircle", 450, 300);

    var rect1 = paper.rect(70,80,100,12).attr({fill: "orange"});
    var ellipse1 = paper.ellipse(150,160,40,30).attr({fill: "red"});
    var circle = paper.circle(50, 40, 20);
// Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "green");
// Sets the stroke attribute of the circle to white
    circle.attr("stroke", "#fff");
    paper.customAttributes.step = function (s) {
        var len = this.orbit.getTotalLength();
        var point = this.orbit.getPointAtLength(s * len);
        return {
            transform: "t" + [point.x, point.y] + "r" + point.alpha
        };
    };

    var middle = paper.path("M325,105 a45,15 90 0,0 50,0 a45,15 90 0,0 -50,0");
    var right = paper.path("M350,80 a45,15 25 0,0 0,55 a45,15 25 0,0 0,-55");
    var left = paper.path("M350,80 a45,15 -25 0,0 0,55 a45,15 -25 0,0 0,-55");


    function atom(r, o, s) {
        var a = r.ellipse(0, 0, 6, 6).attr({stroke: "#000", fill: "#fff"});
        a.orbit = o;
        a.attr({step: 0});

        function run() {
            a.animate({step: 1}, s, function () {
                a.attr({step: 0});
                setTimeout(run);
            });
        }
        run();
        return a;
    }

    atom(paper, middle, 2000);
    atom(paper, left, 2000);
    atom(paper, right, 2000);
};

