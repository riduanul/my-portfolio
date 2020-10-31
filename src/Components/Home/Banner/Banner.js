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
                            
                            <li><FaLinkedin><a href="https://www.linkedin.com/in/riduanul-haque"></a></FaLinkedin> </li>
                            <li><FaGithub /> <a href="https://github.com/riduanul"></a> </li>
                            <li><FaMailBulk /> <a href="https://mail.google.com/mail"></a> </li>
                            
                        </ul>
                                <h3 style={{color:'goldenrod'}}>Hello, I'm </h3>
                                <h1 style={{color:'white'}}>I'm Md. Riduanul Haque</h1>
                                <p style={{color:'white'}}>I am a professional Web Developer, i love to learn</p>
                                <button className='btn btn-warning'><a target='_blank' href="https://drive.google.com/file/d/1q6Dl1l-N0UPXdSjABAtDBzYvsAA8cjAg/view?usp=sharing">Get My Resume</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 ">
                        <img class='img-fluid'src={me}/>
                </div>
                </div>
            </div>
       </div>
    );
};

export default Banner;