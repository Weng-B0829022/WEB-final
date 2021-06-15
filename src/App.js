import "./App.css";
import React from 'react';
import { useState , useEffect} from "react";
import NavBar from "./components/Bar/NavBar";
import { Switch, Route, useLocation} from "react-router-dom";
import { Home } from "./components/Pages/Home";
import About  from "./components/Pages/About/About";
import Chatroom from "./components/Pages/Connect/Pushdb";
import { Trade } from "./components/Pages/Trade/Trade";
import { Login } from "./components/Pages/Login/Login";
import ReactGA from 'react-ga'


ReactGA.initialize('UA-199361611-1');

function App() {
  const [auth, setAuth] = useState("");
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)    // To Report Page View 
    //console.log(location.pathname + location.search)
  }, [location]);

  return (
    <>
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
    </>
  );
}
//<FirebaseRead/>
export default App;
