import React from 'react';
import './Skill.css';
import {FaJsSquare,FaReact,FaNode,FaMaxcdn,FaHtml5,FaCss3 } from "react-icons/fa";

const Skill = () => {
    return (
       <div className="mb-5 pb-5 ">
            <div className='container' >
            <h1 style={{color:'white'}}>I am skilled at</h1> <br/>
            <h3 style={{color:'goldenrod'}}><FaJsSquare /> JavaScript &nbsp; &nbsp; 
             <FaReact /> React.JS &nbsp; &nbsp; &nbsp; <FaNode /> Node.JS &nbsp;  &nbsp;
             <FaMaxcdn /> MongoDB &nbsp; &nbsp; &nbsp; <FaHtml5 /> HTML5 &nbsp; &nbsp; &nbsp; 
             <FaCss3 /> CSS3
             </h3 >
               
        </div>
       </div>
    );
};

export default Skill;