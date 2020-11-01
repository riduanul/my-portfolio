import React from "react";
import Banner from "../Banner/Banner";
import RecentWork from "../RecentWork/RecentWork";
import Skill from "../Skill/Skill";
import Mail from "../Mail/Mail";
// import Particles from 'react-particles-js';
import ParticlesBg from "particles-bg";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg2 img-fluid">
     <ParticlesBg type="circle" bg={true} id="bgCanvas"></ParticlesBg>
        <Banner />
        <Skill />
        <RecentWork />
        <Mail />
    </div>
  );
};

export default Home;
