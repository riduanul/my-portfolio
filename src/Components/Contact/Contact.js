import React from 'react';
import { FaHome,FaPhoneAlt,FaMailBulk,FaLinkedin,FaFacebookSquare } from 'react-icons/fa';
import NavBarBlack from '../Home/NavBar/NavBarBlack';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_cc4azel', 'template_itmn2v7', e.target, 'user_FD7l3w6IRiXpKwtCAkzSe')
          .then((result) => {
            alert('Your email has been sent')  
            console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          
      }
    let boxStyle = {
        border: '3px solid goldenrod',
        borderRadius: '5px',
        boxShadow: '10px 10px 10px',
        width: '100%',
        height:'335px',
        margin: '200px auto',
        padding:'50px',
        color:'white'       
    }
    return (
     
        <div className='bg2'>
             
                <NavBarBlack />
            
            <div className="row container">
                <div className="col-md-6">
                    <div style={boxStyle}>
                        <h4><FaHome />   Rangamati,Bangladesh</h4> 
                        <h4><FaPhoneAlt />   +8801794212131</h4> 
                        <h4><FaMailBulk /> riduanulhaque.dev@gmail.com</h4> 
                        <h4><FaLinkedin />  <a href=" https://www.linkedin.com/in/riduanul-haque">Linkedin</a></h4> 
                        <h4><FaFacebookSquare />  <a href=" https://www.facebook.com/riduanul.haque.18/">FaceBook</a></h4> 
                    </div>
                </div>

                 <div className="col-md-6">
                     <h1 className="mail-header"></h1>
                    <form className="mail-box" onSubmit={sendEmail}>
                        <input type="text"id= "email" name="user_Name" placeholder="Name" />
                        <br /><br />
                        <input type="text"id= "subject" name="user_email" placeholder="Email" />
                        <br /><br />
                        <textarea name="message" id="text" cols="31" rows="5" placeholder="Write  your message.."></textarea>
                        <br />
                        <button type="submit" className="send-button">Send Message</button>
                                    
                    </form>
                </div>
             </div>
        </div>
        
    );
};

export default Contact;