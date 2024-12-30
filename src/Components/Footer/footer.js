import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="social">
          <a href='https://twitter.com/TeenaGoyal18?t=bTP2UlIhBNNw1PEp56Dqtw&s=08' target='_blank' rel='noreferrer'>
            <BsTwitter size={30} />
          </a>
          <a href='https://www.linkedin.com/in/teena-goyal-1758b5238' target='_blank' rel='noreferrer'>
            <AiFillLinkedin size={30} />
          </a>
          <a href='https://github.com/teenagoyal627' target='_blank' rel='noreferrer'>
            <BsGithub size={30} />
          </a>
        </div>
        <p className="footer-text">© 2024 Teena Goyal. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
