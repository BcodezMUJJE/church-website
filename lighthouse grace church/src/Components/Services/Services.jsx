import React from "react";
import './Services.css';
import gal_1 from '../../assets/children.jpeg';
import gal_2 from '../../assets/BIBLE.jpg';
import gal_3 from '../../assets/impartation.jpg';
import gal_4 from '../../assets/prayersSteve.jpg';

const Services = () => {
    return (
        <div className="trip" id='ministries'>
            <h1>Our Ministries</h1>
            <div className="tripcard">
                <div className="t-card">
                    <div className="t-image">
                        <img src={gal_1} alt='' />
                    </div>
                    <h4>Children Services</h4>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img src={gal_2} alt='' />
                    </div>
                    <h4>Sunday Service</h4>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img src={gal_3} alt='' />
                    </div>
                    <h4>Tuesday Prayer Altar 5:00pm-9:30pm</h4>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img src={gal_4} alt='' />
                    </div>
                    <h4>Friday Quarter Night Prayers 6pm-10pm</h4>
                </div>
            </div>
        </div>
    );
}

export default Services;