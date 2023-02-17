import React from 'react'
// Images
import github from '../assets/icons/github.png'
import twitter from '../assets/icons/twitter.png'
import linkedin from '../assets/icons/linkedin.png'
import youtube from '../assets/icons/youtube.png'
// Styles 
import './styles.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__div'>
        <a href="https://github.com/lucianogriffa" target='_blank'><img src={github} alt="instagram" className='footer__rs' /></a>
        <a href="https://www.linkedin.com/in/lucianogriffa/" target='_blank'><img src={linkedin} alt="instagram" className='footer__rs' /></a>
        <a href="https://twitter.com/lucianogriffa_" target='_blank'><img src={twitter} alt="twitter" className='footer__rs' /></a>
        <a href="https://www.youtube.com/@lucianogriffa" target='_blank'><img src={youtube} alt="youtube" className='footer__rs' /></a>
      </div>
      <div className='footer__div'>|
        <a className='footer__p' href='/'>By Luciano Griffa &copy; 2023 </a>
      </div>
    </footer>
  )
}
export default Footer