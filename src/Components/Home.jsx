import React from 'react'
import './Home.css';
import Profile from "../assets/Pro.jpg";
import Resume from "../Components/Harini-AD-resume.pdf";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <div className='home'>
      <div className='profile-container'>
        <div className='text'>
        <h3>Welcome to my Portfolio!</h3>
        <h2>Hi, I'm Harini M</h2>
        {/* <h4 className="cursor typewriter-animation">Artificial Intelligence and Data Science Student!</h4> */}
        <h1 className="cursor typewriter-animation">Artificial Intelligence and Data Science Student!</h1>
     <div className='resume-download'>
      <a href='https://harinimurali-resume.tiiny.site/' target="_blank" rel="noopener noreferrer" className='download-button'>Download Resume</a>
     </div>

        <div className='media'>
        <a href='https://www.linkedin.com/in/harini-murali-bitsathy/' target="_blank" rel="noopener noreferrer">
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0adDoUGWVD3jGzfT8grK5Uhw0dLXSk3OWJwZaXI-t95suRZQ-wPF7-Az6KurXDVktV4&usqp=CAU' alt='LinkedIn' className='personal-links'/>
</a>
    
     <a href='https://github.com/Harinirpm' target="_blank" rel="noopener noreferrer">
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnn_FLBfy9aUkcxjAnbOIwnRt1Da8obGqo0w&s' alt='GitHub' className='personal-links'/>
</a>
     <a href='https://leetcode.com/u/harinimr/' target="_blank" rel="noopener noreferrer">
  <img src='https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png' alt='LeetCode' className='personal-links'/>
</a>
     <a href='https://www.geeksforgeeks.org/user/harinirano0yb/' target="_blank" rel="noopener noreferrer">
  <img src='https://media.geeksforgeeks.org/wp-content/uploads/20220123013311/gfg-200x200.png' alt='HackerRank' className='personal-links'/>
</a>
     <a href='https://www.hackerrank.com/profile/harinirangammal4' target="_blank" rel="noopener noreferrer">
  <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png' alt='HackerRank' className='personal-links'/>
</a>
    </div>
    </div>
      {/* <img src={Profile} alt='myprofile' className='home-profile' /> */}
      </div>

    </div>
    
    </>
  )
}

export default Home
