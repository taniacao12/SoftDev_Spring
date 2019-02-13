var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var stopButton  = document.getElementById("stop");
var dotButton = document.getElementById("circle");

var id;
var radius = 0;
var growing = true;
var run = false;

var clear = function (e) {
    console.log("clearing");
    ctx.clearRect(0, 0, c.width, c.height);
}

var stopIt = function() {
    window.cancelAnimationFrame(id);
    run = false;
}

var drawDot = function() {
    run = true;

    // determine whether the dot is expanding or contracting
    if (radius == c.width / 2)
	growing = false;
    else if (radius == 0 || radius >= c.width / 2)
	growing = true;

    // update radius
    if (growing)
	radius += 1; 
    else
	radius -= 1;

    // draw dot
    clear();
    ctx.fillStyle = "#00FFFF";
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius,  0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();


    // loop the animation
    id = window.requestAnimationFrame(drawDot);
}

dotButton.addEventListener('click', function(e) {
    if (!run)
	drawDot();
});

stopButton.addEventListener("click", stopIt);
