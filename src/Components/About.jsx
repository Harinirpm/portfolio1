import React from 'react'
import './About.css'
import Image from '../assets/Pro.jpg';
import Who from '../assets/cancan.png';
function About() {
  return (
    <>
    <div className='about'>
    
      <h1>
       Know who am I<img src={Who}
                 alt='hii'
                 style={{
                   height:"50px",
                   width:"50px",
                   marginLeft:"5px",
                 }}
                 />
      </h1>
      <div className="underline-container">
      <div className="underline first-line"></div>
      <div className="underline second-line"></div>
    </div>
      <div className='about-content'>
        <img src={Image} alt='image' className='image'/>
        
        <p>Hello! <strong>I'm Harini M </strong>, a pre-final year student at Bannari Amman Institute of Technology, 
          specializing in Artificial Intelligence and Data Science. I'm passionate about web development and 
          have expertise in <strong>HTML, CSS, JavaScript, React.js, Material-UI, and MySQL</strong>. With a solid foundation 
          in <strong>C, Java, and Data Structures and Algorithms</strong>, 
          I thrive on solving problems and creating responsive, user-friendly digital experiences. 
          I am always eager to learn, adapt to new technologies, and take on challenges that push my boundaries. My goal is to contribute innovative solutions to real-world problems and make a meaningful impact in the tech industry.
         </p>
      </div>
      {/* <div className="underline hori-line"></div> */}
      
    </div>
    </>
  )
}

export default About
