import React, { useState } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import Todo from '../assets/todo.png';
import PsEvents from '../assets/psevents.png';
import Alumni from '../assets/alumni.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Project() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="project">
        <h1>Projects</h1>
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]} 
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="project-cards"
      >
        <SwiperSlide>
          <div className="cards">
            <div className="inner">
              <div className="front">
                <img 
                src={PsEvents}
                alt='PsEvents'
                style={{
                  objectFit:"cover",
                  height:"100%",
                  width:"100%",
                  borderRadius:"10px"
                }}
                />
                <h3>PS Events</h3>
              </div>
              <div className="back">
                <h2>PS Events</h2>
                <p>
                The PS Events platform facilitates event management where administrators can create and manage events, while students register, participate, and complete levels to earn rewards. Built with React JS, Node JS, Express JS, and MySQL, it integrates seamless event creation and tracking with a robust backend.
                </p>
          <p><strong>Tech Stack : </strong>React JS, Node JS, Express JS, MySQL</p>
        
          <p><strong>Role : </strong>Front end Developer</p>
                <button onClick={togglePopup}> <Link to="https://github.com/DharshiniPandian/PS_Events" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Git Repo</Link></button>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="cards">
            <div className="inner">
              <div className="front">
              <img 
                src={Alumni}
                alt='Alumni'
                style={{
                  objectFit:"cover",
                  height:"90%",
                  width:"100%",
                  borderRadius:"10px"
                }}
                />
                <h3 style={{marginBottom:"50px"}}>Alumni Tracking System</h3>
              </div>
              <div className="back">
                <h2>Alumni Tracking System</h2>
                <p>
                Developed a web application connecting students, alumni, and faculty through forums, event sharing, and a knowledge hub. It fosters networking, career guidance, and collaboration in fields like software development and data science.
                </p>
                <p><strong>Tech Stack : </strong>React JS, Node JS, Express JS, Postgresql, CSS, MUI</p>
        
        <p><strong>Role : </strong>Front end Developer</p>
                <button onClick={togglePopup}><Link to="https://github.com/Harinirpm/Alumini_Tracking_System" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Git Repo</Link></button>
              </div>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>

        <div className="cards">
            <div className="inner">
              <div className="front">
              <img 
                src={Todo}
                alt='Todo'
                style={{
                   objectFit:"cover",
                  height:"90%",
                  width:"100%",
                  borderRadius:"10px"
                }}
                />
                <h3>Personal TODO App</h3>
              </div>
              <div className="back">
                <h2>Personal TODO App</h2>
                <p>
                Developed personal TODO app for Task Management.
                </p>
                <button onClick={togglePopup}><Link to="https://personal-todoapp.netlify.app/" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Website Link</Link></button>
              </div>
            </div>
          </div>
          </SwiperSlide>
          </Swiper>
        {showPopup && (
          <>
            <div className="overlay" onClick={togglePopup}></div>
            <div className="popup">
              <h3>GitHub Repository</h3>
              <p>
                <Link to="https://github.com/DharshiniPandian/PS_Events" target="_blank">
                  PS Events Repo
                </Link>
              </p>
              <p>
                <Link to="https://github.com/Harinirpm/HariniPortfolio" target="_blank">
                  Alumni Tracking System Repo
                </Link>
              </p>
              <button onClick={togglePopup}>Close</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Project;
