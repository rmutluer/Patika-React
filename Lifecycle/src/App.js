import { isVisible } from "@testing-library/user-event/dist/utils";
import Counter from "./components/Counter"; 
import { useState } from "react";

function App() {
//   const [number, setNumber]=useState(0);
//   const [name, setName]=useState('Mehmet');

// // useEffect(()=>{
// //   console.log("Number veya Name State Güncellendi");
// // },[number,name]);

// useEffect(()=>{
//   console.log(" Name State Güncellendi");
// },[name]);

// useEffect(()=>{
//   console.log("Number State Güncellendi");
// },[number]);

// // useEffect(()=>{
// //   console.log("Component mount edildi!");
// // }, []);

// useEffect(()=>{
//   console.log("Component mount edildi!");
// }, []);

const [isVisible, setIsVisible]=useState(true);

  return (
    <div className="App">
      {/* <Counter></Counter> */}

      {isVisible&&<Counter></Counter>}
      

      <button onClick={()=>setIsVisible(!isVisible)}>Göster/Gizle</button>

    </div>
  );
}

export default App;
