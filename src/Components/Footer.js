import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h2>Harshal Zade</h2>
            <p>I am a frontend developer from India, and I'm a fresher.</p>
        </div>
        <div className="footer-top-right">
          <a className='icon-logo' href='https://github.com/Harri2406' target='_blank' rel='noopener noreferrer'>
            <GitHubIcon style={{ fontSize: 40 }}/>
            </a>
          <a className='icon-logo' href='https://www.linkedin.com/in/harshal-zade-765a04211/' target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon style={{ fontSize: 40 }}/>
            </a>
            
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {currentYear} Harshal Zade. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
