import "./App.css";
import Menu from "./components/Menu";
import Contact from "./pages/Dashboard/Contact";
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import UserDetail from "./pages/Dashboard/UserDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";
import Register from "./pages/Auth/Register";
import Error404 from "./pages/Auth/Error404";

function App() {
  return (
    <BrowserRouter>
      {/* Kapsayıcı element */}

      {/* <Menu /> */}
      {/* Menu komponentini appjs te kullanacağımız ve sayfalara da buradan erişeceğimiz  için browser routerın içine ekliyoruz
      
      2. kısımda dashboard layoutta kullanacağımız için buradan kaldırıyoruz
      */}

      <Routes>
        {/* Bizim routelarımızın olacağı yer . index ile path="/" aynı gibi düşünebiliriz */}
        {/* <Route path="/" element={<App />}> */}

        {/* <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="contact" element={<Contact />} /> */}

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>

          {/* <Route path="login" element={<Login />} /> */}
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* Önceden yanyana olan nested routeları farklı layoutlar içerisine yerleştirdik bunu yapmak için ilgili layout komponenti içinde outlet elementini yazarak app.js içerisinde de o elementi o layoutu çağırdığımız farklı bir route içerisine koyarak gerçekleştirdik
        
        yani nurtopu gibi yeni bir route umuz oluyor yeni bir path, yeni bir url adresimiz oluyor. biz login sayfasını göstermek için localhost/auth/login pathini kullanmamız gerekecek artık , peki auth pathinde direk login sayfasını göstermek için ne yapmalıyız, element ten önce path yerine index yazarsak auth içinde direk login pathine yönlendirme yapar
        
        Alltaki route ise olmayan bir sayfaya istek atıldığında 404 göstermek için olan yönlendirme, * demek üsttekilerden biri değilse ne olursa olsun yakala ve buraya yönlendir demek

        */}

<Route path="*" element={<Error404 />}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
