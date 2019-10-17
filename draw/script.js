const socket = io('https://api.networkedrealiti.es/louis').connect();

// we're attaching an event listener of type "click" to the window
// so that any time the user clicks anywhere in the window,
// the below callback will be called
window.addEventListener('click', event => {
	// take a look at all the info available to you
	// from the click event
	console.log(event);

	// addDot is invoked twice. Once here upon a user click
	// and a second time further down in the code when data is received
	addDot(event.clientX, event.clientY);

	// sending data to the server, in this example an object,
	// to be broadcasted to the other users
	socket.emit('broadcast', {
		// divide event's x and y coordinates
		// by the window's width and height
		// to get a relative position from 0 to 1
		x: event.clientX / window.innerWidth,
		y: event.clientY / window.innerHeight
	});
});


// this is the part of the websocket that receives data from the
socket.on('broadcast', data => {
	// addDot is invoked again when data is received
	// from the server
	// we know that the data.x and data.y are from 0 to 1
	// so we multiply by the window's width and height
	// to get the absolute position
	addDot(data.x * window.innerWidth, data.y * window.innerHeight);
});


// this function takes absolute coordinates, x and y
// and adds a div with class "dot" to the body element
// the .dot class is already set to position:absolute
// so establishing the x,y
function addDot(x, y){
	let dot = `<div class="dot" style="left:${x}px;top:${y}px"></div>`;
	document.body.innerHTML += dot;
}