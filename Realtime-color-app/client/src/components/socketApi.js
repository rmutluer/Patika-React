import io from 'socket.io-client';

let socket;

//init değişkenini App.jste kullanacağız. socket üzerine bir endpoint ererek bağlantı salıyoruz transport ta websocket olarak belirtiyoruz
//socket.on bağlantı gerçkelşemesidir


// Palette komponentinde send fonk. import ederiz. use State ile rengi tutmaya çalışırız.input valusuna color atarız ve onchangine target value veririz butonun onclkiğinde send fonk ile colori backende göndeririz.


export const init=()=>{
    console.log("Sunucuya bağlanılıyor...");
    socket=io.connect('http://localhost:3001', { transports: ['websocket'] });

    socket.on('connect',()=>{
        console.log('Sunucuya bağlantı gerçekleşti.');
    })
}


//App.js te useeffect ile mount anında initi çalıştırıyoruz
//send fonksiyonu rengi input olarak alır ve backende iletir ve socket.emit ile servere gönderiyoruz.backendde newColor kanalı ile karşılıyoruz.
export const send=(color)=>{
    socket.emit("newColor",color);
    console.log("Renk gönderildi.");
}



//Herhangi bir client veri gönderdiğinde alabilmek için receive kanalına abone oluyoruz.bunu çalıştırmak için App.js te import ederiz ve useEffectte çalıştırırz. renk her değiştiğinde arka planı değişitirmek için state kullanırız. activeColorı da style olarak komponente veririz. 
//Normalde setActiveColor fonksiyonunu alttaki console logtan sonra yapmamız gerekiyor ama burda tanımlı olmadığı için  callback function şeklinde yazarız .App.jste subscribe içine parametre olarak fonk. geçersek burda çalışır
export const subscribe=(cb)=>{
socket.on("receive",(color)=>{
    console.log(color + " Renk alındı.");
    cb(color);
})}
