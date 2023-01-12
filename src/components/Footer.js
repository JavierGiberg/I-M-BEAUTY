import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">יצירת קשר</p>
        <p className="footer-subscription-text">טל:08-688-7288</p>
        <a href="https://wa.me/08-688-7288">
          <img src="image/whatsapp.png" width="100px" />
        </a>
        <p className="footer-subscription-text">עקבו אחרינו</p>
        <a href="https://www.facebook.com/Im.beauty.care/">
          <img src="image/facebook.png" width="100px" />
        </a>
        <p className="footer-subscription-text">ניווט</p>
        <a href="https://waze.com/ul/hsv8d5udsc">
          <img src="image/waze.png" width="100px" />
        </a>
        <br />
        <br />
        <img className="imgFooter" src="image/logo.png" />
        <br />
        <br />
        <small className="website-rights">
          Developed by{" "}
          <a href="https://www.linkedin.com/in/javier-alejandro-giberg-7165ab223/">
            Javier Giberg
          </a>{" "}
          © 2023
        </small>
      </section>
    </div>
  );
}

export default Footer;
