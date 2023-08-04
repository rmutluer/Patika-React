import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import About from "./components/About";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink activeStyle={{backgroundColor:'black', color:'#fff'}} to="/" exact >Home</NavLink>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <NavLink activeStyle={{backgroundColor:'black', color:'#fff'}} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{backgroundColor:'black', color:'#fff'}} to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
          {/* <About /> 
        </Route>*/}
        <Route path="/users"component={Users} />
        <Route path="/user/:id"component={User} />
        <Route path="*"component={Error404} />
          {/* <Users />
        </Route> */}
        {/* <Route path="/" component={Home}/> */}
          {/* <Home /> */}
        
      </Switch>
    </div>
  </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
export default App;
