import React from "react";
import { useEffect, useState } from "react";
import {Link, useParams, useLocation } from "react-router-dom";


function UserDetail() {
  //const params = useParams();
  const { id } = useParams();
  // console.log(params);

  const location=useLocation();
  //console.log(location.state); objenin içinde state altında gönderdiğimiz veri gelir
  // stateten gelen değeri yakalamak için  kullanırız bunu kullanırsak state ve useeffecte gerek yok

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, [id]);


const [user, setUser] = useState(location.state)
//burada direk fetch yapmadan önce state üzerinden gelen veriyi usera atıyoruz aşağıda ise useeffect içerisinde eğer stateten gelen user id si bş ise (yani state boş ise ya da cache'ten değil de direk link üzerinden, gizli sekmeden vs tıklanarak gelirse) fetch işlemi ile veriyi çek diyoruz

  useEffect(() => {
    if(!user?.id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
    }
    
  }, [id, user]);
  return (
    <div>
      <h2>Kullanıcı Detayları</h2>

      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {/* {user&&<pre>{JSON.stringify(user, null, 2)}</pre>} */}
      {location.state&&<pre>{JSON.stringify(location.state, null, 2)}</pre>}
      {/* Fakat bu şekilde state ile veriyi aldığımızda aşağıdaki link komponentinde önceki komponentten veri taşınmadığı için doğru sonuç alınmaz 
      o zaman şöyle yapabiliriz; kullanıcı eğer state üzerinde veri bulunduğu şekilde bir önceki menüden tıklayarak geldiyse bu veriyi göster ama direk link üzerinden ya da boş bir state ile geldiyse fetch et diyebiliriz */}

      {user&&<pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${parseInt(id)+1}`}>Bir Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
