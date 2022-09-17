

let slimes = [];

let x = 0;
let numParticles = 1000;
function random(max, min) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min)
}

function setup() {

	createCanvas(2560, 1440);
	for (let i = 0; i < numParticles; i++) {
		slimes.push(new Slime(width/2, height/2, .5))
	};
}

function draw() {
	for (let i = 0; i < slimes.length; i++) {
		slimes[i].display();
		slimes[i].update();
	}


}



class Slime {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.history = [];
	}

	update() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);

		let v = createVector(this.x, this.y);
		this.history.push(v);

		if (this.history.length > 10) {
			this.history.splice(0, 1);
		}
	}

	display() {
		stroke(186, 219, 186);
		beginShape();
		for (let i = 0; i < this.history.length; i++) {
			let pos = this.history[i];
			vertex(pos.x, pos.y)

			endShape();
		}

		noStroke();
		fill(50, 74, 56, [random(255, 0)])
		smooth();
		ellipse(this.x, this.y, 1, 1)
		noSmooth();
	}
} 


/*
function Slime(x, y, mass) {
	this.pos = createVector(x, y);
	this.velocity = createVector(0, 0);
	this.acceleration = createVector(0, 0);
	this.mass = mass;

	this.display = function() {
		stroke(random(255, 0), 219, 186);
		strokeWeight(.3);
		fill(211, 219, 186)
		smooth()
		ellipse(this.pos.x, this.pos.y, this.mass)
		
	}
	
	this.update = function() {
		this.pos.add(this.velocity)
		this.velocity.add(this.acceleration)
		this.acceleration.set(0, 0)

		let movement = p5.Vector.random2D()
		movement.mult(3)
		this.pos.add(movement);
	}
} */