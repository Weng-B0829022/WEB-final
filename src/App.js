import "./App.css";
import React from 'react';
import { useState } from "react";
import NavBar from "./components/Bar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import About  from "./components/Pages/About/About";
import Chatroom from "./components/Pages/Connect/Pushdb";
import FirebaseRead from "./components/Pages/Connect/firebaseApp";
import { Trade } from "./components/Pages/Trade/Trade";
import { Login } from "./components/Pages/Login/Login";

function App() {
  const [auth, setAuth] = useState("");
  return (
    <>
      <Router>

        <NavBar isLogin={auth}/>

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" >
              <About source="https://api.github.com/users/Weng-B0829022"></About>
              <About source="https://api.github.com/users/Jie0117"></About>
            </Route>
            <Route path="/chatroom">
              <Chatroom isLogin={auth}/>
              
            </Route>
            <Route path="/trade" component={Trade} />
            <Route path="/login" >
              <Login set={setAuth}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
//<FirebaseRead/>
export default App;
