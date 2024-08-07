import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location-container">
      <h1 className="location-title">Our Location</h1>
      <p className="location-address">
        DC Zone, Bulindo / Mulawa Shimoni Estate, Kira Municipality, Kampala Wakiso Metropolitan Area
      </p>

      <iframe
        title="Lighthouse Grace Church Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0576845195947!2d30.601405514795873!3d-0.3896904359800067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d22b647d01c75f%3A0x7f597c5e9517d1b4!2sDC%20Zone%2C%20Bulindo%2C%20Kira%20Municipality!5e0!3m2!1sen!2sug!4v1630554828376!5m2!1sen!2sug"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="location-map"
      />
    </div>
  );
};

export default Location;