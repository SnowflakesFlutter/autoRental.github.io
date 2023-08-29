import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo/logo.png";
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navbar");

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  const [header, setHeader] = useState("header");
  const addBg = () => {
    if (window.screenY >= 20) {
      setHeader("header addBg");
    }
  };

  window.addEventListener("scroll", addBg);
  return (
    <nav className={header}>
      <div className="logoDiv">
        <img src={logo} alt="Logo Image" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Home{" "}
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="#trending" className="link">
              Trending
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="#auctions" className="link">
              Auctions
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <GiHamburgerMenu
          className="icon toggleNavbarIcon"
          onClick={showNavbar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
