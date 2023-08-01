import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber]=useState(0);
    // const [name, setName]=useState('Mehmet');
  
  // useEffect(()=>{
  //   console.log("Number veya Name State Güncellendi");
  // },[number,name]);
  
//   useEffect(()=>{
//     console.log(" Name State Güncellendi");
//   },[name]);
  
  useEffect(()=>{
    console.log("Number State Güncellendi");
  },[number]);
  
  // useEffect(()=>{
  //   console.log("Component mount edildi!");
  // }, []);
  
  useEffect(()=>{
    console.log("Component mount edildi!");

    const interval=setInterval(() => {
        setNumber((n)=>n+1)
    }, 1000);

    // return()=>console.log("Component unmount edildi");
    return()=>clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Tıkla</button>
      <br></br>

      {/* <h1>{name}</h1>
      <button onClick={()=>setName('Resul')}>Tıkla</button> */}
    </div>
  )
}

export default Counter