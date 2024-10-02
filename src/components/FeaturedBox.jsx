import React from "react";
import avatar from "../assets/images/avatar.jpg";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Worachet Uttha</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Currently I'm a lecturer at Software Engineering Program, Faculty of
            Science and Technology , Nakhon Pathom Rajabhat University, I'm
            interested in Specification and Verification of access control
            model, Security policies, Web Service, SOA, Distributed System and
            Software Engineering.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
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
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
