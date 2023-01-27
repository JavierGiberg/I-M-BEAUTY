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
        <img src="image/logo.png" width="50px" />
        <div className="nav_title">
          <h1 className="nav-brand">{titleNav}</h1>
        </div>
        <ul className={active}>
          <li className="nav-item">
            <Link
              onClick={() => {
                setTitleNav("מוצרים");
                navToggle();
              }}
              to={"/"}
            >
              מוצרים
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                setTitleNav("מבצעים");
                navToggle();
              }}
              to={"/מבצעים"}
            >
              חבילות מבצע
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                setTitleNav("כל המוצרים");
                navToggle();
              }}
              to="/Gallery"
              className="nav-link"
            >
              כל המוצרים
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                setTitleNav("עמוד הבית");
                navToggle();
              }}
              to="/"
              className="nav-link"
            >
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
