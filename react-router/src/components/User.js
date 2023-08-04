import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

//import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams, Link } from 'react-router-dom';


function User() {
    const [loading, setLoading]=useState(true);
    const [user, setUser]=useState({});
    useEffect(()=>
    {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>setUser(res.data))
        .finally(()=>setLoading(false))
    },[id])
    const {id}=useParams();
  return (
    <div>
        <h1>User Detail</h1>
        {loading&& <div>Loading...</div>}
        {/* id:{id} */}
        {!loading&&<code>
            {JSON.stringify(user)}
        </code>}

        {/* <button onClick={()}>Next User</button> */}
        
        <Link to={`users/${parseInt(id)+1}`}>Next User {parseInt(id)+1}</Link>
        </div>
  )
}

export default User