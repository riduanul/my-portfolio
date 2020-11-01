import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Banner.css'
import {FaLinkedin,FaGithub,FaMailBulk } from "react-icons/fa";
import me from '../../../Images/me.png';
const Banner = () => {
    return (
       <div className="header mb-0 col-md-6">
          <div className="container"> <NavBar></NavBar></div>
          <div className="container">
                <div className="row container ">
                    <div className="col-sm-6">
                        <div className="header-content">
                            <div className="title">
                            <ul className="header-ul">
                            
                            <li><a target='_blank' href="https://www.linkedin.com/in/riduanul-haque"><FaLinkedin /></a> </li>
                            <li><a target='_blank' href="https://github.com/riduanul"><FaGithub /> </a> </li>
                            <li><a target='_blank' href="https://mail.google.com/mail"><FaMailBulk /> </a> </li>
                            
                        </ul>
                                <h3 style={{color:'goldenrod'}}>Hello, I'm </h3>
                                <h1 style={{color:'white'}}>I'm Md. Riduanul Haque</h1>
                                <p style={{color:'white'}}>I am a professional Web Developer, i love to learn</p>
                                <button className='btn btn-warning'><a target='_blank' href="https://drive.google.com/file/d/1spLmA2tKt2XpHGFElVrG0poa9uMmwtIr/view?usp=sharing">Get My Resume</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 img">
                        <img class=''src={me}/>
                </div>
                </div>
            </div>
       </div>
    );
};

export default Banner;