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
    socket.emit('insert', {
        // divide event's x and y coordinates
        // by the window's width and height
        // to get a relative position from 0 to 1
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
        // adding an arbitrarily named 'app' key to this object
        // in order to distinguish data sent from this app
        // from others that will share the same database
        app: 'draw'
    });
});


// this is the part of the websocket that receives data from the
socket.on('insert', data => {
    console.log(data);
    // addDot is invoked again when data is received
    // from the server
    // we know that the data.x and data.y are from 0 to 1
    // so we multiply by the window's width and height
    // to get this user's absolute positions
    addDot(
        data.x * window.innerWidth,
        data.y * window.innerHeight
    );
});

// passing an object in the find channel...
// this will ensure that only data from this draw app is returned
// passing an empty object as the second parameter
// retrieves all the items in the database
socket.emit('find', {app:'draw'}, data => {
    console.log(data);
    // data will be an array of saved objects
    // using for loop to cycle through each one
    for(let i=0; i<data.length; i++){
        addDot(
            data[i].x * window.innerWidth,
            data[i].y * window.innerHeight
        );
    }
});


// this function takes absolute coordinates, x and y
// and adds a div with class "dot" to the body element
// the .dot class is already set to position:absolute
// so establishing the x,y
function addDot(x, y){
    let dot = `<div class="dot" style="left:${x}px;top:${y}px"></div>`;
    document.body.innerHTML += dot;
}