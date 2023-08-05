import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Users() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading]=useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .then(()=>setLoading(false));
  }, []);
  return (
    <div>
      <h2>Kullanıcılar</h2>
      {loading&&<div>Yükleniyor...</div>}
      <ul>
        
        {users.map((user) => (
          // <li key={user.id}>{user.name}</li>
          // <li key={user.id}><Link to={`${user.id}`} >{user.name}</Link></li>
          <li key={user.id}><Link to={`${user.id}`} state={{user}} >{user.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
