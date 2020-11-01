import React from 'react';
import './Mail.css'
import emailjs from 'emailjs-com';


const Mail = () => {
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
    return (
        <div className=' mt-5 p-5'>
            <h1 className="footer-header">Get in touch</h1>
             <form className="text-box" onSubmit={sendEmail}>
                <input type="text"id= "email" name="user_Name" placeholder="Name" />
                <br /><br />
                <input type="text"id= "subject" name="user_email" placeholder="Email" />
                <br /><br />
                <textarea name="message" id="text" cols="51" rows="8" placeholder="Write  your message.."></textarea>
                <br /><br />
                <button type="submit" className="send-button">Send Message</button>
                               
            </form>
        </div>
    );
};

export default Mail;