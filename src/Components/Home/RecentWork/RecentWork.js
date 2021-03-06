import React from 'react';
import './RecentWork.css'
import {CardDeck,Card} from 'react-bootstrap'
import creative from '../../../Images/creative.JPG'
import Volunteer from '../../../Images/volunteer.JPG'
import travelguru from '../../../Images/travelguru.JPG'

const RecentWork = () => {
    return (
        <div className="">
            <div className="container mb-5">
            <h1 style={{color:'white'}}>My Recent works</h1> 
<CardDeck className='mt-5'>
  <Card>
    <Card.Img variant="top" className='img-fluid' src={creative} />
    <Card.Body>
      <Card.Title>Cretiv Agency</Card.Title>
      <Card.Text>
          A service selling web application
        Technologies: JavaScript, Reacj, Node.js, MongoDB, Html, Css. 
      </Card.Text>
    </Card.Body>
    <Card.Footer className='bg-white text-center text-warning'>
      <small className="text-muted "><a target='_blank' href="https://creative-agency-f72c4.web.app/">Live</a></small>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <small className="text-muted"> <a target='_blank' href=" https://github.com/riduanul/creative-agency-client">Github</a></small>
    </Card.Footer>
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
    <Card.Footer className='bg-white text-center'>
      <small className="text-muted"> <a target='_blank' href=" https://volunteer-network-309d5.web.app/">Live </a></small>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <small className="text-muted"> <a target='_blank' href=" https://github.com/riduanul/volunteer-network-client">Github</a></small>
    </Card.Footer>
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
    <Card.Footer className='bg-white text-center'>
      <small className="text-muted"><a target ='_blank'href="https://traval-guru-64b7c.firebaseapp.com/home">Live</a></small>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <small className="text-muted"> <a target='_blank' href=" https://github.com/riduanul/traveller">Github</a></small>
      
    </Card.Footer>
  </Card>
</CardDeck>

            </div>
        </div>
    );
};

export default RecentWork;