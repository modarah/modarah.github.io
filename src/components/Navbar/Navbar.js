import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { RiCodeBoxFill, RiCodeBoxLine, RiCodeSSlashLine } from "react-icons/ri";
import { links, social } from "./data";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
        {/* <RiCodeBoxFill className="logo" /> */}
        <RiCodeSSlashLine className="logo" />
          {/* <img src={logo} className="logo" alt="logo" /> */}
          <a href="/">
            <p className="name">Modar</p>
          </a>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <Link to={url}>
                {/* <a href={url}> */}
                  <li key={id}>{text}</li>
                {/* </a> */}
                </Link>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons" id="icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a className="icons" href={url} target="_blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
