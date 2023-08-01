import React from "react";
import { useState } from "react"; 
import "./App.css";
import Header from "./components/header";
import User from "./components/user";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

const friends=[
  {
    id:1,
    name:"Ali"
  },
  {
    id:2,
    name:"Veli"
  },
  {
    id:3,
    name:"Hasan"
  },
  {
    id:4,
    name:"Hüseyin"
  },
  {
    id:5,
    name:"Faruk"
  },
  {
    id:6,
    name:"Furkan"
  }
]


function App() {
  //return React.createElement('div',null,'Hello')
  //Component ya da fonksiyonun baş harfi büyük  yoksa html etiketi olarak varsayar
  //JSX te mutlaka kapsayıcı bir element olması lazım.div ya da <>  (react.fragment)
  //JSX yazarken özel tanımlı keywordleri kullanmamak lazım class gibi
  //<p class="xyz"></p>
  //<label for="myInput"> Name <input id=myInput/> </label>

  const [name, setName]=useState('Mehmet');
  const [age, setAge]=useState(33);
  const [friends, setFriends]=useState([
    {
      id:1,
      name:"Ali"
    },
    {
      id:2,
      name:"Veli"
    },
    {
      id:3,
      name:"Hasan"
    },
    {
      id:4,
      name:"Hüseyin"
    },
    {
      id:5,
      name:"Faruk"
    },
    {
      id:6,
      name:"Furkan"
    }
  ]);
  
  return (
    <div className="App">
      Hello React
      <Header></Header>
      <Header />
      {/* <User name="Mehmet" surname="Mutlu" isLoggedIn={true} age={34}></User> */}
      {/* <User name="Mehmet" surname="Mutlu" isLoggedIn={true} age={34} friends={["Ali","Veli","Hasan", "Hüseyin","Faruk", "Furkan"]}></User> */}

      <User name="Mehmet" surname="Mutlu" isLoggedIn={true} age={34} friends={friends} address={{title:"Izmit/Kocaeli", zipCode:41300}}></User>

      <hr></hr>
      <Counter></Counter>
      <hr></hr>
     
<InputExample></InputExample>

      <hr></hr>

      <h1>Merhaba {name}!</h1>
      <button onClick={()=>setName("Resul")}>Adı Değiştir</button>
      <hr></hr>

      <h1>Yaşım {age}!</h1>
      <button onClick={()=>setAge(34)}>Yaşı Düzelt</button>

      <hr></hr>
      {friends.map((friend,id)=>(<div key={friend.id}>{friend.id}-{friend.name}</div>))}
      <button onClick={()=>setFriends([...friends,{id:friends.length+1, name:"Kamil"}])}>Arkadaş Ekle</button>

      <hr></hr>


    </div>
  );
}

export default App;
