import React, { useEffect, useState } from 'react'
import './Home.css';
// import MyImage from '../Components/My_Profile.jpeg';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Hi from '../assets/hi.png';
import Download from '../assets/download.png';
import Codechef from '../assets/codechef.png';
function Home() {

  const images =[Image1,Image2,Image5,Image3,Image4];
  const[currentImage, setCurrentImage] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImage((prevIndex)=>(prevIndex+1)%images.length);
    },2000);
    return () =>  clearInterval(interval);
  },[images.length]);

  return (
    <>
    <div className='home'>
    <div className='home-left-content'>
      <div className='profile-container'>
        <div className='text'>
        {/* <h3>Welcome to my Portfolio!</h3> */}
        <h2>Hi 
          I'm Harini M <img src={Hi}
          alt='hii'
          style={{
            height:"50px",
            width:"50px",
          }}
          /></h2>
        <h1 className="cursor typewriter-animation">Artificial Intelligence and Data Science !!!</h1>
     <div className='resume-download'>
      <a href='https://harinimurali-resume.tiiny.site/' target="_blank" rel="noopener noreferrer" className='download-button'>Resume <img src={Download}
          alt='hii'
          style={{
            height:"25px",
            width:"25px",
            marginTop:"-5px",
            justifyContent:"center",
            marginLeft:"10px",
          }}
          /></a>
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
<a href='https://www.codechef.com/users/harini38' target="_blank" rel="noopener noreferrer">
  <img src={Codechef} alt='HackerRank' className='personal-links'/>
</a>
    </div>
    </div>
      </div>
</div>
<div className='home-right-content'>
  <img 
  src={images[currentImage]} 
  alt='profile' 
  className='profile'
  />
</div>
    </div>
    
    </>
  )
}

export default Home
