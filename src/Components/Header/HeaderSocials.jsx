import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/darrel-austero-974368242/" target="blank" alt="linkedin"><BsLinkedin/></a>
        <a href="https://github.com/darrelaustero2022" target="blank" alt="github"><BsGithub/></a>
        <a href="https://www.facebook.com/darchton.langly/" target="blank" alt="facebook"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials