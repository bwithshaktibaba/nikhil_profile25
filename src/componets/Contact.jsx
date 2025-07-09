import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <h2>Connect Me</h2>
      <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/nikhil-tripathi007" target="_blank" rel="noopener noreferrer">nikhil-tripathi007</a></p>
      <p><FaGithub /> GitHub: <a href="https://github.com/bwithshaktibaba" target="_blank" rel="noopener noreferrer">bwithshaktibaba</a></p>
      <p><FaEnvelope /> Email: <a href="nt001230007@gmail.com">nt001230007@gmail.com</a></p>
      <p><FaWhatsapp /> WhatsApp: <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer">9555122144</a></p>
    </div>
  )
}

export default Contact
