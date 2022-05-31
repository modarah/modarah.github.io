import React from "react";
import { Link } from "react-router-dom";
import "./HeroStyles.css"

const Hero = () => {
  return (
    <div className="hero-area">
      <div className="hero-text">
        <h1 className="big-name">MODAR ABO HASSOUN</h1>
        <p>
          <q>Developer or something.</q>
        </p>
          <Link className="about-me-btn" to={"/about"}>
        <div className="button">
            About Me
        </div>
          </Link>
      </div>
      <div>
        {/* <img className="modar" src="/modar.jpg" alt="Picture of Modar" /> */}
      </div>
    </div>
  );
};

export default Hero;
