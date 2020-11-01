import React from 'react';
import './Skill.css';
import {FaJsSquare,FaReact,FaNode,FaMaxcdn,FaHtml5,FaCss3 } from "react-icons/fa";

const Skill = () => {
    return (
    <div className=" container mb-5 pb-5 row ">
        <div className=' col-sm-6  ' >
            <h1 style={{color:'white'}}>I am <br/> <span style={{color:'yellow'}}>skilled at</span> </h1> <br/>
               
        </div>
        
        <div className="col-md-2">
             <h1 class="devicon-javascript-plain colored"></h1> <br/>
             <h1 class="devicon-react-original-wordmark colored"></h1> browserslist
             <h1 class="devicon-nodejs-plain colored"></h1> <br/>
             <h1 class="devicon-mongodb-plain-wordmark colored"></h1>
         
        
        </div>
        <div className="col-md-2">
        <h1 class="devicon-bootstrap-plain-wordmark"></h1> <br/>
             <h1 class="devicon-html5-plain-wordmark colored"></h1> <br/>
             <h1 class="devicon-css3-plain-wordmark"></h1> <br/>
             <h1 class="devicon-express-original"></h1>


        </div>
        <div className="col-md-2">
                
        <h1 class="devicon-npm-original-wordmark colored"></h1> <br/>
             <h1 class="devicon-git-plain-wordmark colored"></h1> <br/>
             <h1 class="devicon-heroku-original-wordmark"></h1> <br/>
             <h1 class="devicon-sass-original colored"></h1>
        </div>
    </div>
    );
};

export default Skill;