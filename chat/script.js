const socket = io('https://api.networkedrealiti.es/louis').connect();

// first we're selected all the elements
// querySelector() returns the first match of a CSS selector
let form = document.querySelector('form');
let main = document.querySelector('main');
// using getElementById here because there are two input elements in the html
// and I wanted to avoid confusion
let input = document.getElementById('input');

// do something when user clicks submit button or hits enter
// both events trigger a form submit
form.addEventListener('submit', event => {
	// send input.value, in this case a string, to the server
	// so it will broadcast to the other users
	socket.emit('broadcast', input.value);
	// in addition, add this add this to this user's "main" element
	main.innerHTML = '<p>' + input.value + '</p>' + main.innerHTML;
	// set the input field to nothing
	input.value = '';
	// prevent the form from actually being submitted to the server
	event.preventDefault();
});

// receiving data from server
socket.on('broadcast', data => {
	// data is a string, so we're going to wrap it in p tags
	// and add it to the main element
	// notice how I'm not using the += operator an you tell me why?
	main.innerHTML = '<p>' + data + '</p>' + main.innerHTML;
});