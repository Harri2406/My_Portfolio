import React from 'react'
import './About.css'
import profile_img from '../assets/profile_img.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" className='square-img' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>My name is Harshal Gorakhnath Zade. Currently I am pursuing my B.Tech in Computer Technology from Yeshwantrao Chavan College of Engineering, Nagpur. I have knowledge about programming languages are java, javascript and have a hands on experience in html, css, javascript, react.</p>
                    <p>Beyond academics, I serve as the Web-Development Co-Head of the GDSC(Google Developer Student Club) and Food and Beverages in IRU.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Fresher</h1>
                <p>I have done some personal projects and get hands on knowledge</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3</h1>
                <p>Projects Completed</p>
            </div>
           
            
        </div>
    </div>
  )
}

export default About
