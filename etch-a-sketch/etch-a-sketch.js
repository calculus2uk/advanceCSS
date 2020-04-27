'use script';

//1. Selects the elements on the page - canvas, shake and button
const canvas = document.querySelector('#etch-a-sketch'),
	ctx = canvas.getContext('2d'),
	shakeButton = document.querySelector('.shake'),
	MOVE_AMOUNT = 10;

//2. Setup the canvas for drawing
const { width, height } = canvas; // make variables from destructuring the width and height from the canvas object

//Create a random point from
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // Start the drawing marker
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//3. Write a draw function
function draw({ key }) {
	// Begin to /Start the path
	ctx.beginPath();
	ctx.moveTo(x, y);

	//Move the x, y values depending on what the user did
	switch (key) {
		case 'ArrowUp':
			y -= MOVE_AMOUNT;
			break;
		case 'ArrowDown':
			y += MOVE_AMOUNT;
			break;
		case 'ArrowLeft':
			x -= MOVE_AMOUNT;
			break;
		case 'ArrowRight':
			x += MOVE_AMOUNT;
			break;
		default:
			break;
	}

	ctx.lineTo(x, y);
	ctx.stroke();
}
//4. Write the handlers for the keys
function handleKey(e) {
	const { key } = e;
	if (key.includes('Arrow')) {
		e.preventDefault();
		draw({ key });
	}
}

//6. Listen for the arrow keys
window.addEventListener('keydown', handleKey);
