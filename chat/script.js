const socket = io('https://api.networkedrealiti.es/louis').connect();

// querySelector() returns the first match of a CSS selector
let form = document.querySelector('form');
// When user clicks submit button or hits enter
// a form submit event is triggered
form.addEventListener('submit', event => {
	// using getElementById here because there are two input elements in the html
	// and I wanted to avoid confusion
	let input = document.getElementById('input');

	// input.value is a getter and setter
	if(input.value != ''){

		// Send user input to the server.
		// The 'insert' channel saves an object to a database
		// in addition to broadcasting it to other connected users.
		// We can't use primitive data types with 'insert'
		// only objects, or arrays of objects.
		socket.emit('insert', {
			app: 'chat',
			text: input.value
		});

		// function defined below
		addToMain(input.value);

		// set the input field to nothing
		input.value = '';
	}

	// prevent the form from actually being submitted to the server
	event.preventDefault();
});

// receiving data from server using the same 'insert' channel
socket.on('insert', data => {
	// every time another user sends data to server
	// current user adds it to their interface as well
	// I'm using an if statemnt in case we've received info
	if(data.app == 'chat'){
		addToMain(data.text);
	}
});

// now I'm passing an object in the find channel...
// this will ensure that only data from this app is returned
// otherwise we could get everything from the DB
// and filter the returned data using if statements
// passing an empty object as the second parameter
// retrieves all the items in the database
socket.emit('find', {app: 'chat'}, data => {
	console.log(data);
	// data will be an array of saved objects
	// using for loop to cycle through each one in order
	for(let i=0; i<data.length; i++){
		addToMain(data[i].text);
	}
});

// takes a string
// wraps it in p tags
// and prepends it to the main element
function addToMain(text){
	// first we select the main element
	let main = document.querySelector('main');
	// Getting and setting the .innerHTML value
	// allows us to manipulate its contents
	// notice how I'm not using the += operator
	// ... can you tell me why?
	main.innerHTML = '<p>' + text + '</p>' + main.innerHTML;
}