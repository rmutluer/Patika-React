import React from "react";
//import { useContext } from "react";
//import UserContext from "../Context/UserContext";
import { useState } from "react";

import {useUser} from "../Context/UserContext"

function Profile() {
  //const data=useContext(UserContext);
  const { user, setUser } = useUser();
  //console.log(data);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        name: "Resul",
        surname: "Mutluer",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem",
      });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {/* <button onClick={handleLogin}>
            {loading?"loading..." :"Giriş Yap"}
        </button> */}
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Giriş Yap"}
        </button>
      )}
      <br></br>
      <code>{JSON.stringify(user)}</code>
      <br></br>
      {user && (
        <button onClick={handleLogout}>
          Logout
          
        </button>
      )}
    </div>
  );
}

export default Profile;
