var c;
var scaling = 0.1;

function setup() {
	createCanvas(800, 800);
    c = new Car();
    c.createRandom();
}

function draw() {
    background(51);
    c.update();
}
