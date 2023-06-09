import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {BsFillPenFill} from  "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/angpace/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/angpace" rel="noreferrer" target="_blank"><FaGithub/></a>
        <a href="https://www.kitchenandcode.com/" rel="noreferrer" target="_blank"><BsFillPenFill/></a>
    </div>
  )
}

export default HeaderSocials