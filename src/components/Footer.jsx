import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <hr />
    <footer className="footer">
      <a href="https://github.com/JuanMolinaNavarro" target="_blank" rel="noopener">
        <FaGithub size={24} color='black'/>
      </a>
      <a href="https://ar.linkedin.com/in/juan-martin-molina-navarro-b2501321a" target="_blank" rel="noopener">
        <FaLinkedin size={24} color='black' />
      </a>
      <a href="https://twitter.com/usuario" target="_blank" rel="noopener">
        <FaInstagram size={24} color='black' />
      </a>
    </footer>
    
    </>
  )
}

export default Footer