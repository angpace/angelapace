import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {BsFillPenFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>ANGELA PACE</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#interests">Interests</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        {/* <li><a href="/#testimonials">Testimonials</a></li> */}
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/angpace/"><FaLinkedinIn/></a>
        <a href="https://github.com/angpace"><FiGithub/></a>
        <a href="https://www.kitchenandcode.com/"><BsFillPenFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Angela Pace.</small>
      </div>
    </footer>
  )
}

export default Footer