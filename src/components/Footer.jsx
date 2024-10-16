import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>Worachet Uttha.</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a href="http://www.instagram.com/se_npru">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a href="http://www.facebook.com/se.npru">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="http://www.githun.com/wuttha">
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            Wuttha
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
