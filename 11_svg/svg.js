var pic = document.getElementById('vimage');
var move = document.getElementById("move");
var mystery = document.getElementById("?");
var clear = document.getElementById("clear");

var x = -1;
var y = -1;

var requestID = 0;
var moving = false

var color_change = function (e) {
    var current = e.target
    var color = current.getAttribute("fill")
    if (x == e.offsetX && y == e.offsetY && x != -1)
	e.preventDefault()
    if (!moving) {
	e.stopPropagation();
	if (color == "purple") {
	    current.setAttribute("fill", "green")
	    console.log("color_change");
	}
	else {
	    var curr = e.target
	    pic.removeChild(curr)
	    console.log("rand_loc");
	    
	    var xrand = (Math.random() * 460) + 20
	    var yrand = (Math.random() * 460) + 20
	    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	    c.setAttribute("fill", "purple");
	    c.setAttribute('xvel', 1)
	    c.setAttribute('yvel', 1)
	    c.setAttribute('cx', xrand)
	    c.setAttribute('cy', yrand)
	    c.setAttribute("r", 20);
	    c.setAttribute("move", false);
	    
	    console.log(xrand, yrand);
	    c.addEventListener("click", color_change)
	    pic.appendChild(c)
	}
    }
}

var dots = function(e){
    if (x == e.offsetX && y == e.offsetY && x != -1)
	e.preventDefault()

    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute("fill", "purple");
    c.setAttribute('cx', e.offsetX)
    c.setAttribute('cy', e.offsetY)
    c.setAttribute('xvel', 1)
    c.setAttribute('yvel', 1)
    c.setAttribute("r", 20);
    c.setAttribute("move", moving);

    x = e.offsetX;
    y = e.offsetY;
    
    console.log("init_dot")
    c.addEventListener("click", color_change)
    pic.appendChild(c);
}

var movingSetUp = function(e){
    window.cancelAnimationFrame(requestID);

    moving = true;

    var moving = function(){
	height = pic.getAttribute("height");
	width = pic.getAttribute("width");

	var current = pic.firstElementChild;
	while (current != null){
	    var curr_x = parseInt(current.getAttribute("cx"));
	    var curr_y = parseInt(current.getAttribute("cy"));
	    var curr_r = parseInt(current.getAttribute("r"));
	    var xV = parseInt(current.getAttribute("xvel"));
	    var yV = parseInt(current.getAttribute("yvel"));

	    if (curr_x + curr_r >= width ){
		xV = xV * -1;
		current.setAttribute("xvel", xV );
	    }
	    if (curr_x <= curr_r){
		xV = xV * -1;
		current.setAttribute("xvel", xV );
	    }
	    if (curr_y + curr_r >= height ){
		yV = yV * -1;
		current.setAttribute("yvel", yV );
	    }
	    if (curr_y <= curr_r){
		yV = yV * -1;
		current.setAttribute("yvel", yV );
	    }

	    current.setAttribute("cx", curr_x + xV);
	    current.setAttribute("cy", curr_y + yV);
	    current.setAttribute("move", moving)
	    current = current.nextSibling
	}
	requestID = window.requestAnimationFrame(moving);
    }
    moving()
}

var mysteryEffect = function(){
    window.cancelAnimationFrame(requestID);
    moving = true;

    var mystery = function(){

	height = pic.getAttribute("height");
	width = pic.getAttribute("width");

	var current = pic.firstElementChild;
	while (current != null){
	    var curr_x = parseInt(current.getAttribute("cx"));
	    var curr_y = parseInt(current.getAttribute("cy"));
	    var curr_r = parseInt(current.getAttribute("r"));
	    var xV = parseInt(current.getAttribute("xvel"));
	    var yV = parseInt(current.getAttribute("yvel"));

	    if ((curr_x <= (width - 250)) && (curr_x => 150))
		current.setAttribute("fill", "blue");
	    else
		current.setAttribute("fill", "purple");
	    var xV = parseInt(current.getAttribute("xvel"));
	    var yV = parseInt(current.getAttribute("yvel"));
	    
	    if (curr_x + curr_r >= width ){
		xV = xV * -1;
		current.setAttribute("xvel", xV );
	    }
	    if (curr_x <= curr_r){
		xV = xV * -1;
		current.setAttribute("xvel", xV );
	    }
	    if (curr_y + curr_r >= height ){
		yV = yV * -1;
		current.setAttribute("yvel", yV );
	    }
	    if (curr_y <= curr_r){
		yV = yV * -1;
		current.setAttribute("yvel", yV );
	    }

	    current.setAttribute("cx", curr_x + xV);
	    current.setAttribute("cy", curr_y + yV);
	    current.setAttribute("move", moving)
	    current = current.nextSibling
	}
	requestID = window.requestAnimationFrame(mystery);
    }
    mystery()
}

var clearScreen = function(e){
    window.cancelAnimationFrame(requestID);
    var current = pic.firstChild
    while (current != null){
	console.log("clearing")
	pic.removeChild(current)
	current = pic.firstChild
    }
    x = -1
    y = -1
    requestID = 0
}

var test = function(){
    console.log(pic);
    var hey = pic.firstElementChild
    console.log(hey.getAttribute("cx"));
    console.log(hey)
    var woah = hey.nextSibling
    console.log(woah);
    console.log(woah.nextSibling);
}

pic.addEventListener("click", dots);
move.addEventListener("click", movingSetUp);
clear.addEventListener("click", clearScreen);
mystery.addEventListener("click", mysteryEffect);
