import React from "react";
import "../css/Footer.css";
import Logo from "../img/HU-logo-Animation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="social">
          <img src={Logo} alt="logo" />
          <p>
            Hathor Union, your strategic channel partner, accelerates business
            growth by connecting enterprises with valuable partners. We
            specialize in fostering collaborations that complement your journey
            to success.
          </p>
          <div className="link">
            <p>SOCIAL LINKS</p>
            <div className="icon">
              <a href="/"><FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} /></a>
              <a href="/"><FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} /></a>
              <a href="/"><FontAwesomeIcon icon={faXTwitter} style={{ color: "white" }} /></a>
              <a href="/"><FontAwesomeIcon icon={faThreads} style={{ color: "white" }} /></a>
              <a href="/"><FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} /></a>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div className="navigate">
            <div className="home">
              <p>
                <span>NAVIGATION</span>
              </p>
              <a href="/">Home</a>
              <a href="/">Hathor Blueprint</a>
              <a href="/">Hathor Spotlight</a>
              <a href="/">Hathor Synergy</a>
              <a href="/">Team</a>
              <a href="/">Contact Us</a>
            </div>
          </div>
          <div className="navigate1">
            <div className="home1">
              <p>
                <span>QUICK LINKS</span>
              </p>
              <a href="/">Business Setup</a>
              <a href="/">Business Planning</a>
              <a href="/">Marketing & Branding</a>
              <a href="/">Startup Ecosystem</a>
              <a href="/">Client Network</a>
              <a href="/">B2B Ecosystem</a>
              <a href="/">Partnership</a>
            </div>
          </div>
          <div className="navigate">
            <div className="home">
              <p>
                <span>CONTACT US</span>
              </p>
              <a href="/">info@hathorunion.com</a>
              <a href="/">UAE: +971 58 222 9401</a>
              <a href="/">INDIA: +91 9894 131 969</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p id="copy">© 2023 Hathor union Inc. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
