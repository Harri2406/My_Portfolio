import React, { useState, useRef } from 'react'
import './Contact.css'
import email1 from '../assets/email.png'
import call from '../assets/call.png'
import location from '../assets/location.png'



const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  console.log(process.env.REACT_APP_ACCESS_KEY)

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
      setName('');
      setEmail('');
      setMessage('');
    }else{
      alert('Failed to send message. Please try again.');
    }
  };



  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm a fresher and excited to join it industry and give my 100%, so contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={email1} alt="" /><p>harshalzade274@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call} alt="" /><p>+91-9881359073</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="" /><p>Chandrapur, India</p>
                </div>
            </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your text' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
