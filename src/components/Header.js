import React, { useState } from "react";
import Logo from "../images/logo.svg";
import CloseMenu from "../images/icon-close.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Slides from "./Slides";

function Header() {

  const [toggle, setToggle] = useState(false);

  const menuHandle = () =>{
    setToggle(!toggle)
  }

  return (
    <header className="header">
      <nav className={toggle ? "close-nav" :" open-nav" } >
        <div className="header-nav-wrapper">
            <div className="header-nav">
              <div className="menu-wrapper">
                <img onClick={menuHandle} src={Hamburger} alt="close menu" className="close" />
                <img onClick={menuHandle} src={CloseMenu} alt="open menu" className="open" />
              </div>
              <div className="logo-wrapper">
                <img src={Logo} alt="logo" className="logo" />
              </div>
              <ul className="items">
                <li className="item">Home</li>
                <li className="item">Shop</li>
                <li className="item">About</li>
                <li className="item">Contact</li>
              </ul>
            </div>
        </div>
      </nav>

      <Slides />
    </header>
  );
}

export default Header;
