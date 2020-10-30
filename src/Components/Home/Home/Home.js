import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';




const Home = () => {
    return (
        <div className="bg2">
            <Banner />
            <Skill />
            <Projects />
            <Contact />
           
        </div>
    );
};

export default Home;