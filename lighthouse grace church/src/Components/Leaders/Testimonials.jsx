import React, { useState } from 'react';
import './Testimonials.css';
import lead_1 from '../../assets/logo1.jpeg'; // Update these with actual image paths
import lead_2 from '../../assets/logo1.jpeg';
import lead_3 from '../../assets/logo1.jpeg';
import lead_4 from '../../assets/logo1.jpeg';
import lead_5 from '../../assets/logo1.jpeg';
import lead_6 from '../../assets/logo1.jpeg';
import lead_7 from '../../assets/logo1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimonials = [
    {
      image: lead_1,
      name: 'Steven and Brenda Kisaame',
      feedback: 'As our Lead Pastors and Founders, Steven and Brenda have been the heart and vision behind Lighthouse Grace Church. Their commitment to discipleship and community outreach inspires our congregation to grow in faith and service.',
    },
    {
      image: lead_2,
      name: 'Emmanuel Wambi',
      feedback: 'Serving as the Location Pastor for Nabusugwe, Emmanuel is dedicated to fostering a vibrant church environment that encourages spiritual growth and community engagement.',
    },
    {
      image: lead_3,
      name: 'Nzingo Samuel',
      feedback: 'As the Location Pastor for Kyanja, Nzingo plays a crucial role in ministering to our members and ensuring that the teachings of Jesus are reflected in the lives of those in the community.',
    },
    {
      image: lead_4,
      name: 'Komugisha Jemima',
      feedback: 'Serving as the Location Pastor for Bujjuko, Jemima is passionate about building relationships within the church and reaching out to those in need, creating a welcoming space for all.',
    },
    {
      image: lead_5,
      name: 'Robert and Brenda Bugembe',
      feedback: 'As the Pastors in charge of Finance and Administration, Robert and Brenda manage the church\'s resources with integrity and transparency, ensuring that we can effectively support our ministries and outreach programs.',
    },
    {
      image: lead_6,
      name: 'Nabatanzi Betty',
      feedback: 'Our Children’s Church Pastor, Betty is committed to nurturing the faith of our youngest members. Through engaging programs and activities, she helps children learn about Jesus in a fun and meaningful way.',
    },
    {
      image: lead_7,
      name: 'Collin Kiridde',
      feedback: 'As our Youth Pastor, Collin focuses on empowering and guiding our youth to develop a strong faith foundation. His passion for mentoring young people encourages them to actively participate in the life of the church.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="slider">
              <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div className="item" key={index}>
                    <div className="shadow-effect">
                      <img className="img-circle" src={testimonial.image} alt={testimonial.name} />
                      <p>{testimonial.feedback}</p>
                    </div>
                    <div className="testimonial-name">{testimonial.name}</div>
                  </div>
                ))}
              </div>
              <FontAwesomeIcon className="nav-btn prev-btn" icon={faChevronLeft} onClick={handlePrev} />
              <FontAwesomeIcon className="nav-btn next-btn" icon={faChevronRight} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;