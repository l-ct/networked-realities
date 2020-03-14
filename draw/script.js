const socket = io('https://api.networkedrealiti.es/louis').connect();

window.addEventListener('click', event => {
    console.log(event.clientX, event.clientY);
    addToMain(event.clientX, event.clientY);
    socket.emit('broadcast', {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
    });
});

socket.on('broadcast', data => {
    console.log(data);
    addToMain(
        data.x * window.innerWidth,
        data.y * window.innerHeight
    );
});

function addToMain(x, y){
    let div = `<div style="left:${x};top:${y}"></div>`;
    document.body.innerHTML += div;
}