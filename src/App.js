import "./App.css";
import React from 'react';
import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
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
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/trade" component={Trade} />
            <Route path="/login" component={setAuth => Login(setAuth)} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
