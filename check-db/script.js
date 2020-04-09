const socket = io('https://api.networkedrealiti.es/louis').connect();

const main = document.querySelector('main');

// build all the boxes
const numberOfCheckboxes = 8 * 8;
const checkBox = '<input type="checkbox">';
for(let i=0; i<numberOfCheckboxes; i++){
    main.innerHTML += checkBox;
}

// access all the boxes
const boxes = document.querySelectorAll('input');

// upon page load the 'find' channel is invoked to retrieve
// every click since inception, then the program cycles
// through each in the order they were sent to the server
// to avoid such a costly start we could sendthe whole board
// to the server with each emit, but th
socket.emit('find', {app: 'check'}, data => {
    console.log(data);
    for(let i=0; i<data.length; i++){
        toggle(data[i].index);
    }
});

for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click', () => {
        // 'insert' takes objects or an array of objects only
        // here we're placing the index as an object
        // as well as adding an other key to keep track 
        const obj = {
            app: 'check',
            index: i
        };
        socket.emit('insert', obj);
    });
}

// like broadcast, 'insert' listens for other users' emits
socket.on('insert', data => {
    // first check if what was sent corresponds to this app
    // in case the same channel is used in other apps
    if(data.app == 'check')
        toggle(data.index);
});

function toggle(index){
    if(boxes[index].checked == true){
        boxes[index].checked = false;
    }else{
        boxes[index].checked = true;
    }
}