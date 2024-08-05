import React from 'react';
import './About.css';
import about_img from '../../assets/pb.jpg';
import play_icon from '../../assets/married.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Our Community</h2>
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