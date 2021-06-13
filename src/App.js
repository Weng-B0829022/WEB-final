import "./App.css";
import React from 'react';
import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import  About  from "./components/Pages/About";
import { Chatroom } from "./components/Pages/Chatroom";
import { Trade } from "./components/Pages/Trade";
import { Login } from "./components/Pages/Login";

function App() {
  const [auth, setAuth] = useState(false);
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
            <Route path="/chatroom" component={Chatroom} />
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

export default App;
