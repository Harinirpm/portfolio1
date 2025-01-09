import React from 'react'
import './About.css'
// import Image from '../Components/My_Profile.jpg'
import Image from '../assets/Pro.jpg';
function About() {
  return (
    <>
    <div className='about'>
    
      <h1>
       Know who am I
      </h1>
      <div className="underline-container">
      <div className="underline first-line"></div>
      <div className="underline second-line"></div>
    </div>
      <div className='about-content'>
        <img src={Image} alt='image' className='image'/>
        
        <p>Hello! I'm Harini M, a pre-final year student at Bannari Amman Institute of Technology, 
          specializing in Artificial Intelligence and Data Science. I'm passionate about web development and 
          have expertise in HTML, CSS, JavaScript, React.js, Material-UI, and MySQL. With a solid foundation 
          in C, Java, and Data Structures and Algorithms, 
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
