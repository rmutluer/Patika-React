//import { useMemo } from 'react';
import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { useCallback } from 'react';
//import User from './User';

// const userData={
//     id:1,
//     name:"Resul",
// }

function Counter() {
const [count, setCount] = useState(0);
//
const [name, setName] = useState("Resul");

const [amount, setAmont] = useState(1);
  
console.log("Counter componenti render edildi");

// const userData={
//     id:1,
//     name:"Resul",
// }

// const userData=useMemo(()=>{
//     return {
//         id:1,
//         name:"Resul",
//     }
// },[])

// const userData=useMemo(()=>{
//     return {
//         id:1,
//         name
//     }
// },[name])
//buraya name yazdığımızda name stati değiştiğinde user componenti de yeniden render ediliri ama bu state değişmezse ya da bu bağımlılığı yazmazsak user componenti render edilmez


//butona her tıkladığımızda alttaki fonksiyonu çalıştırır ve her seferinde referansı değişri bu nedenle header yeniden render edilir.Propta fonksiyon gönderdiğimiz için her seferinde referansı değişir bu durumdan kurtulmak için react altındaki useCallback fonksiyonunu kullanırız.useCallback kullanımı da useEffect ve useMemo kullanımıyla aynıdır. 1. parametre arrow function 2. parametre dependency array

// const increment=()=>{
//     setCount(count+1);
// }

// const increment=useCallback(()=>{
//     setCount(count+1);
// },[])
// const increment=useCallback(()=>{
//     setCount(count+1);
// },[count])
//Bu şekilde  fonksiyonu state olarak görüp yalnızca 1 kere çalıştırır setcount+1 den 0=>1 olur ve fonksiyonda bi değişim olmadığı için sayacımız daha fazla artmaz . 
//Dependency array içine countu verirsek de bu sefer sayaç çalışır ama her 2 komponent de render ediliri ve istediğimiz sonuç gene olmaz.Çünkü fonksiyon her çalıştırıdlığında referansı değişir Bu nedenle fonksiyon içinde  değişkenle değil de state ile çalışırsak bu sorunu halledebiliriz.usecallback fonksiyon için usememo ise obje ve arrayler için kullanılabilir Referans tipli her veride bunu kullanabiliriz.

// const increment=useCallback(()=>{
//     setCount((prev)=>prev+1);
// },[])


const increment=useCallback(()=>{
    setCount((prev)=>prev+amount);
},[amount])

//Burada ise bizim amount değişkenini takip edip o değiştiğinde componenti render etmemize gerek olduğu için array içine yazarız.yoksa hep 1 arttırmaya devam eder




  return (
  <div>
    {/* <Header count={count < 5 ? count : 5}/> */}
    <Header  increment={increment} />

    {/* <User data={userData}/> */}
    <hr></hr>

    <h2>{count}</h2>

    {/* <button onClick={() => setCount(count + 1)}>Arttır</button> */}
    <button onClick={increment} >Arttır</button>
    <hr/>

    <button onClick={() => setName(name==="Resul"?"Mehmet":"Resul")}>Name</button>
    <div>Yetmezz {amount}

        <button onClick={() => setAmont(1)}>1 arttır</button>
        <button onClick={() => setAmont(3)}>3 arttır</button>
        <button onClick={() => setAmont(5)}>5 arttır</button>
    </div>
    
    </div>
  )
}

export default Counter