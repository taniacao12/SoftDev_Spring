var pic = document.getElementById('vimage');
var move = document.getElementById("move");
var clear = document.getElementById("but_clear");

var x = -1;
var y = -1;

var color_change = function(e) {
    var current = e.target
    var color = current.getAttribute("fill")

    e.stopPropagation();

    if (color == "purple"){
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
	c.setAttribute('cx', xrand)
	c.setAttribute('cy', yrand)
	c.setAttribute("r", 20);

	console.log(xrand, yrand);

	c.addEventListener("click", color_change)
	pic.appendChild(c)
    }
}

var dots = function(e){
    if (x == e.offsetX && y == e.offsetY && x != -1){
	e.preventDefault()}

    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute("fill", "purple");
    c.setAttribute('cx', e.offsetX)
    c.setAttribute('cy', e.offsetY)
    c.setAttribute("r", 20);

    x = e.offsetX;
    y = e.offsetY;

    console.log("init_dot")
    c.addEventListener("click", color_change)
    pic.appendChild(c)
}

var clearScreen = function(e){
    var current = pic.firstChild
    while (current != null){
	console.log("clearing")
	pic.removeChild(current)
	current = pic.firstChild
    }
    x = -1
    y = -1
}

pic.addEventListener("click", dots);
clear.addEventListener("click", clearScreen);
