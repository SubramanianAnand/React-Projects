import React from "react";
import Logo from "../img/HU-logo-Animation.png";
import "../css/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)

  return (
    <div className="navbar">
      <div className="menu">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
      </div>
      <div className="menu1" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuOpen ? "open" : ""}>
        <div className="hamburger">
          <div className="hamburger1">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 352 512"
                color="white"
                height={32}
                width={32}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </button>
            <div className="hamburger2">
              <div className="heading">
                <p>Hathor Union</p>
              </div>
              <div className="list1">
                <div className="nav1">
                  <a href="/home">Home</a>
                </div>
                <div className="nav1">
                  <a href="/business">Business</a>
                </div>
                <div className="nav1">
                  <a href="/brand">Brand</a>
                </div>
                <div className="nav1">
                  <a href="/ecosystem">Ecosystem</a>
                </div>
                <div className="nav1">
                  <a href="/about">About Us</a>
                </div>
                <div className="nav1">
                  <a href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="list">
        <div className="nav">
          <a href="/home">Home</a>
        </div>
        <div className="nav">
          <a href="/business">Business</a>
        </div>
        <div className="nav">
          <a href="/brand">Brand</a>
        </div>
        <div className="nav">
          <a href="/ecosystem">Ecosystem</a>
        </div>
        <div className="nav">
          <a href="/about">About Us</a>
        </div>
        <div className="nav">
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
