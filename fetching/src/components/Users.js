import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data);
  //         setIsLoading(false);
  //       })
  //       .catch((e)=>console.log(e))
  //   }, []);

//   useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((data) => setUsers(data))
//         .catch((e)=>console.log(e))
//         .finally(()=>setIsLoading(false))
//     }, []);
  
//kullanımı daha kolay, arada bir then atlıyoruz çünkü responsu jasona çevirmemize gerek yok ve daha geniş browser desteği va r

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>Kullanıcılar Yükleniyor...</div>}
      {/* {users.map((user,index)=> <div key={index}>{user.name}</div>)} */}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
