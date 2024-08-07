import React from 'react';
import './About.css';
import about_img from '../../assets/pb.jpg';
import play_img from '../../assets/married.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Our Community</h2>
        <p>
          We are a vibrant community of approximately 350 people attending our four locations every Sunday, with 900 individuals joining us for our missional family gatherings every Wednesday.
        </p>
        <h3>Our Community:</h3>
        <p>We are a vibrant community of approximately 350 people attending our four locations every Sunday, with 900 individuals joining us for our missional family gatherings every Wednesday.</p>
        <h3>Denomination</h3>
        <p>
          We are a non-denominational church that subscribes to the National Fellowship for Born Again Pentecostal Churches of Uganda and is under the Grace Redeemed Ministries.
        </p>
        <h3>Our Mission</h3>
        <p>We are a discipling movement dedicated to impacting our community spiritually, socially, and economically by planting light and life-giving churches, thereby catalyzing spiritual renewal. We achieve this by creating missional families within our community, fostering a family-centered and family-based church environment.</p>
        <h3>Our Vision</h3>
        <p>To be a lighthouse bringing hope to our community, city, and the whole world in Jesus' Name.</p>
        <h3>Our Focus</h3>
        <p>At Lighthouse Grace Church, we prioritize families by creating missional families that function like home cells. These groups provide a space for individuals to be discipled and to grow in the character and competence of Jesus Christ.</p>
        <h3>Our Needs</h3>
        <p>As we continue to grow, we have identified several needs to further our mission: <br/>A permanent church auditorium <br/>Land for our three locations<br/>Sound equipment<br/>A missions van</p>
      </div>
    </div>
  );
};

export default About;