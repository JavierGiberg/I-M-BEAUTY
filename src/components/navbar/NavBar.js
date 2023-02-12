import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar({ titleNav, setTitleNav }) {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav_title">
          <Link onClick={() => {}} to={"/"}>
            <img src="image/logo.png" width="55px" />
          </Link>
        </div>
        <ul className={active}>
          <li className="nav-item">
            <Link to={"/"}>מוצרים</Link>
          </li>
          <li className="nav-item">
            <Link to={"/מבצעים"}>חבילות מבצע</Link>
          </li>
          <li className="nav-item">
            <Link to="/Gallery" className="nav-link">
              כל המוצרים
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              בית
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
