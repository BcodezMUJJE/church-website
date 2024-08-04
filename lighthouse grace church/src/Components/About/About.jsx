import React from 'react';
import './About.css';
import about_img from '../../assets/BIBLE.jpg';
import play_icon from '../../assets/sweet.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="about-icon" />
      </div>
      <div className="about-right">
        <h2>About Us</h2>
        <h3>Our Community</h3>
        <p>
          We are a vibrant community of approximately 350 people attending our four locations every Sunday, with 900 individuals joining us for our missional family gatherings every Wednesday.
        </p>
        <h3>Denomination</h3>
        <p>
          We are a non-denominational church that subscribes to the National Fellowship for Born Again Pentecostal Churches of Uganda and is under the Grace Redeemed Ministries.
        </p>
      </div>
    </div>
  );
};

export default About;