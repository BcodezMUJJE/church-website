import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Use this for the location icon

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>
                    Send us a message 
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </h3>
                <p>
                    At Lighthouse Grace Church, we believe in the power of connection and community. 
                    Whether you have questions, need support, or want to share your thoughts, we encourage you to send us a message. 
                    Your voice matters, and we are here to listen!
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' /> 
                        gbkstevens@gmail.com
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} className='icon' /> 
                        +256 704 635979
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /> 
                        DC Zone, Bulindo Mulawa Shimoni Estate,<br />Kira Municipality, Kampala Wakiso Metropolitan Area
                    </li>
                </ul>
            </div>
            <div className='contact-col'>
                <form>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your message here</label>
                    <textarea name='message' id='' rows='6' placeholder='Enter message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span>sending</span>
            </div>
        </div>
    );
}

export default Contact;