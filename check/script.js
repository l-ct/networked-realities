const socket = io('https://api.networkedrealiti.es/louis').connect();

// querySelector returns the first node
// matching the passed selector
// in our html we just have one main element
const main = document.querySelector('main');

// change the value of numberOfCheckBoxes
const numberOfCheckBoxes = 8 * 8;

// a piece of HTML that we want to inject into the DOM
const checkBox = '<input type="checkbox">';
// place multiple checkBoxes in the DOM using a for loop
for(let i=0; i<numberOfCheckBoxes; i++){
    // innerHTML is both a getter and a setter
    main.innerHTML += checkBox;
}

// after injecting all the input elements select them
// querySelectorAll returns an HTML collection of Nodes
// HTML collections are kind of like arrays:
// they have a .length property
// and are accessed using the [] notation
const boxes = document.querySelectorAll('input');
// and cycle through each to add an eventlistener that returns 
for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click', () => {
        // sends the element's index if it's clicked
        socket.emit('broadcast', i);
    });
}

// socket.on invokes a callback
// placing incoming data from the server
// in the callback's arguments
socket.on('broadcast', index => {
    // toggle the appropriate checkbox:
    // "false if true or true if false"
    if(boxes[index].checked){
        boxes[index].checked = false;
    }else{
        boxes[index].checked = true;
    }
});

