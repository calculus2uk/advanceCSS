'use script';

//1. Selects the elements on the page - canvas, shake and button
const canvas = document.querySelector('#etch-a-sketch'),
	ctx = canvas.getContext('2d'),
	shakeButton = document.querySelector('.shake');

//2. Setup the canvas for drawing
const { width, height } = canvas; // make variables from destructuring the width and height from the canvas object

//Create a random point from
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the drawing marker
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//3. Write a draw function

//4.
