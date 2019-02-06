var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var shape = "circle";

var stopButton  = document.getElementById("stop");
stopButton.addEventListener("click", stopIt); 
var dotButton = document.getElementById("circle");
dotButton.addEventListener("click", drawDot);

var growing = true;

var requestID;

var radius = 10;

var drawDot = function() {
    
    ctx.beginPath();
    if( growing ) {
	radius += 1; 
    } else {
	radius -= 1;
    }
    window.requestAnimationFrame();
    ctx.arc( c.width / 2, c.height / 2, radius,  0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
}

var stopIt = function() {
    console.log( requestID );
    
    
}

