import React from 'react';
import './Projects.css'
import {CardDeck,Card} from 'react-bootstrap'
import creative from '../../../Images/creative.JPG'
import Volunteer from '../../../Images/volunteer.JPG'
import travelguru from '../../../Images/travelguru.JPG'

const Projects = () => {
    return (
        <div className="mt-5 pt-5">
            <div className="container mb-5">
            <h1 style={{color:'white'}}>My Recent works</h1> 
<CardDeck className='mt-5'>
  <Card>
    <Card.Img variant="top" src={creative} />
    <Card.Body>
      <Card.Title>Cretiv Agency</Card.Title>
      <Card.Text>
          A service selling web application
        Technologies: JavaScript, Reacj, Node.js, MongoDB, Html, Css. 
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={Volunteer} />
    <Card.Body>
      <Card.Title>Volunteer Network</Card.Title>
      <Card.Text>
          A volunteer social acrivity management web application.
          Technologies: JavaScript, Reacj, Node.js, MongoDB, Html, Css. 
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={travelguru} />
    <Card.Body>
      <Card.Title>Travel Guru</Card.Title>
      <Card.Text>
      A travel agency web application.
          Technologies: JavaScript, Reacj, Node.js, MongoDB, Html, Css.
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardDeck>

            </div>
        </div>
    );
};

export default Projects;