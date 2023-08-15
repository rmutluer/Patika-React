import io from 'socket.io-client';

let socket;

export const init=()=>{
    console.log("Sunucuya bağlanılıyor...");
    socket=io.connect('http://localhost:3001', { transports: ['websocket'] });

    socket.on('connect',()=>{
        console.log('Sunucuya bağlantı gerçekleşti.');
    })
}

export const send=(color)=>{
    socket.emit("newColor",color);
    console.log("Renk gönderildi.");
}

export const subscribe=(cb)=>{
socket.on("receive",(color)=>{
    console.log(color + " Renk alındı.");
    cb(color);
})}
