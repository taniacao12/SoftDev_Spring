var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");
var state = 'dot';

clear.addEventListener('click', () => {
    console.log('clearing')
    ctx.clearRect(0, 0, c.width, c.height);
});

c.addEventListener('click', (e) => {
    if (state == 'dot'){
        console.log('HII');
        ctx.beginPath();
        ctx.ellipse(e.clientX, e.clientY, 50, 50, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.stroke();
    }
});
