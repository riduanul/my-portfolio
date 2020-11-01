import React from 'react';
import NavBar from '../Home/NavBar/NavBar';
import NavBarBlack from '../Home/NavBar/NavBarBlack';
import creative from '../../Images/creative-ss.png';
import './ProjectDetails.css'

const ProjectDetails = () => {
    return (
        <div className=" bg2 text-white">
           <div> <NavBarBlack /></div>
            <div className=''><h1>R</h1></div >
            <div className="row d-flex project-details container ">
                <div className="col-md-6">
                    <img width= '50%' height='300'src={creative} alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>Creative agency</h1>
                    <h5>A Service selling website</h5>


                </div>
            </div>
            <div className="row d-flex project-details container ">
                <div className="col-md-6">
                    <img width= '50%' height='300'src={creative} alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>Creative agency</h1>
                    <h5>A Service selling website</h5>


                </div>
            </div>
            <div className="row d-flex project-details container ">
                <div className="col-md-6">
                    <img width= '50%' height='300'src={creative} alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>Creative agency</h1>
                    <h5>A Service selling website</h5>


                </div>
            </div>



        </div>
    );
};

export default ProjectDetails;