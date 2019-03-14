var pic = document.getElementById('vimage');
var clear = document.getElementById("but_clear");

var x = -1;
var y = -1;

var dots = function(e){
    if (x != -1){
	var connect = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	connect.setAttribute('x2', e.offsetX)
	connect.setAttribute('y2', e.offsetY)
	connect.setAttribute('x1', x)
	connect.setAttribute('y1', y)
	connect.setAttribute("stroke", "black");
	pic.appendChild(connect)
    }

    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute("fill", "purple");
    c.setAttribute('cx', e.offsetX)
    c.setAttribute('cy', e.offsetY)
    c.setAttribute("r", 20);

    x = e.offsetX;
    y = e.offsetY;

    console.log(pic)
    console.log(x)
    console.log(y)

    pic.appendChild(c)
}

var clearScreen = function(e){
    var current = pic.firstChild
    while (current != null){
	console.log(current)
	pic.removeChild(current)
	current = pic.firstChild
    }
    x = -1
    y = -1
}

pic.addEventListener("click", dots);
clear.addEventListener("click", clearScreen);
