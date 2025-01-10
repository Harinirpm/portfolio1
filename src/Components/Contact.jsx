import React,{useRef} from 'react'
import './Contact.css';
import Gmail from '../assets/gmail.png';
function Contact() {
  return (
    <>
    <div className='contact'>
      <h1>Let's Connect</h1>
      <p>If you are interested in my skills and services, feel free to contact me. 
        I would be happy to discuss with you and share values that benefit each other!</p>
        <p>
        <a 
    href="mailto:harinirangammal4@gmail.com" 
    style={{
      textDecoration: "none", 
      color: "inherit", 
      display: "flex", 
      alignItems: "center"
    }}
  >
          <img 
                        src={Gmail}
                        alt='Gmail'
                        style={{
                          height:"30px",
                          width:"30px",
                         marginRight:"10px",
                         marginTop:"-7px"
                        }}
                        /> harinirangammal4@gmail.com
                        </a>
                        </p>
      
      <footer className='footer'>
          <p>Created by Harini | 2024</p>
        </footer>
    </div>
    </>
  )
}

export default Contact
