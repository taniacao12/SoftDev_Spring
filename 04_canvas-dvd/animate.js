var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var stopButton  = document.getElementById("stop");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");

var requestID = 0;
var radius = 0;
var growing = true;

var clear = function (e) {
    console.log("clearing");
    ctx.clearRect(0, 0, c.width, c.height);
}

var stopIt = function() {
    window.cancelAnimationFrame(requestID);
    requestID = 0;
}

var drawDot = function() {
    window.cancelAnimationFrame(requestID);
    
    if (radius == c.width / 2)
	growing = false;
    else if (radius == 0 || radius >= c.width / 2)
	growing = true;

    if (growing)
	radius += 1; 
    else
	radius -= 1;

    clear();
    ctx.fillStyle = "#00FFFF";
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius,  0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame(drawDot);
}

var dvdLogoSetup = function(){
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = Math.floor(Math.random() * (c.width - rectWidth));
    var rectY = Math.floor(Math.random() * (c.height - rectHeight));
    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    
    var dvdLogo = function() {
	window.cancelAnimationFrame(requestID);
	clear();
	
	ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
	
	if (rectX <= 0 || rectX >= c.width - rectWidth)
	    xVel *= -1;
	if (rectY <= 0 || rectY >= c.height - rectHeight)
	    yVel *= -1;

	rectX += xVel;
	rectY += yVel;
	
	requestID = window.requestAnimationFrame(dvdLogo);
    };

    dvdLogo();
};

dotButton.addEventListener('click', drawDot);
dvdButton.addEventListener('click', dvdLogoSetup);
stopButton.addEventListener('click', stopIt);
