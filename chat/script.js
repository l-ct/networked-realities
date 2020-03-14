const socket = io('https://api.networkedrealiti.es/louis').connect();

let form = document.querySelector('form');
let text = document.getElementById('text');
let main = document.querySelector('main');

form.addEventListener('submit', event => {
    main.innerHTML = '<p>' + text.value + '</p>' + main.innerHTML;
    socket.emit('broadcast', text.value);
    text.value = '';
    event.preventDefault();
});

socket.on('broadcast', data => {
    main.innerHTML = '<p>' + data + '</p>' + main.innerHTML;
});
