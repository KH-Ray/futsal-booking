// About.js
import React from "react";
import "./About.css";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";



function About() {
  return (
    <div className="about-container">
    <div className="above-content">
      <p>Selamat datang di platform pemesanan lapangan olahraga online kami.</p>
      <img src="/images/About.png" alt="" />
    </div>
    <div className="below-content">
      <h2>Informasi Social Media</h2>
      <ul className="social-media-list">
        <li>
          <a
            href="https://www.facebook.com/contoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={32} /> Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} /> Instagram
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={32} />
            WhatsApp 0838 0789 9678
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  );
}

export default About;
