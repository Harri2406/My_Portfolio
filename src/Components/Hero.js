import React from 'react'
import './Hero.css'
import profile_img from '../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const handleDownload = () =>{
  const resumePath = 'resume.pdf'

  const link = document.createElement('a')
  link.href = resumePath

  link.download = 'Harshal_Zade_Resume.pdf'

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link);
}

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Round Image" className='round-image'/>
      <h1><span>I'm Harshal Zade,</span> Frontend Developer based in India</h1>
      <p>I am a Fresher</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume' onClick={handleDownload}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
