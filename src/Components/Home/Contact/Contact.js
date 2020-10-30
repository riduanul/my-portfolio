import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className=' mt-5 p-5'>
            <h1 className="footer-header">Get in touch</h1>
             <div className="text-box">
                <input type="text"id= "email" name="email" placeholder="Email" />
                <br /><br />
                <input type="text"id= "subject" name="email" placeholder="Subject" />
                <br /><br />
                <textarea name="text" id="text" cols="61" rows="10">Enter your message..</textarea>
                <br /><br />
                <a href="#" className="send-button">Send Message</a>
                
            </div>
        </div>
    );
};

export default Contact;