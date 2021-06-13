import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar( {isLogin} ) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            WEBP期末專題
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                組員名單
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/chatroom"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Chatroom
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/trade"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Trade
              </NavLink>
            </li>
            
              {isLogin ? 
              <div className="login">
                歡迎登入 {isLogin.profileObj.name}
                <img src={isLogin.profileObj.imageUrl} width="35" height="35"/>
              </div> :
              <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
