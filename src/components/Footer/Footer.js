import React from 'react';
import { social } from '../Navbar/data'
import { Link } from "react-router-dom";

import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <h3 className="contact-me" id="contact">Contact me</h3>
        <a className='links' href="mailto:modar.abohassoun@gmail.com">
          <p>modar.abohassoun@gmail.com</p>
        </a>
      </div>
      {/* <div className='datenschutz-link'>
        <Link to="datenschutz">
          <p>Datenschutzerklärung</p>
        </Link>
      </div>
      <div className='impressum-link'>
        <Link to="impressum">
          <p>Impressum</p>
        </Link>
      </div> */}
      <ul className="social-icons">
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
  );
};

export default Footer;
