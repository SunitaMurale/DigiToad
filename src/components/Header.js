import React from "react";
import "./Header.css";
import log from "../assets/Digitoad-01.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={log} alt="DigiToad Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#events">Events</a>
        <a href="#academics">Academics</a>
        <a href="#solutions">Solutions</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
