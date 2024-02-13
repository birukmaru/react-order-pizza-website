import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagramSquare />
        <FaXTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <p> &copy; 2024 Brooktechpizza.com</p>
    </div>
  );
}

export default Footer;
