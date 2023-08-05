import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function Menu() {
    const navigate=useNavigate();
  return (
    <div>
        <ul className='menu'>
            {/* <li>Anasayfa</li>
            <li>Kullanıcılar</li>
            <li>İletişim</li> */}
            <li><a href="#/" onClick={()=>navigate(-1)} >Geri Dön(a tagi ile)</a></li>
            <li><a href="/">Anasayfa(a tagi ile)</a></li>
            {/* a tagi ile de link verebiliriz ama bu sayfanın tamamen render edilmesine sebep olur  */}
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="users">Kullanıcılar</Link></li>
            <li><Link to="contact">İletişim</Link></li>
            <li onClick={()=>navigate("contact")}>İletişim(useNavigate)</li>
            {/* usenavigate ile de link verebiliriz ama pointer ayarına ihtiyaç duyar, ayrıca navigate içine -1 yazarak da geri gel işlemini yapabiliriz */}
            <li onClick={()=>navigate(-1)}>Geri Dön</li>
            
        </ul>
    </div>
  )
}

export default Menu