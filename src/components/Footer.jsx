import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/usuario" target="_blank" rel="noopener">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/usuario" target="_blank" rel="noopener">
        <FaLinkedin size={24} />
      </a>
      <a href="https://twitter.com/usuario" target="_blank" rel="noopener">
        <FaInstagram size={24} />
      </a>
    </footer>
  )
}

export default Footer