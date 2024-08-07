import "./AboutUsStyles.css";
import React from "react";

function AboutUs() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <h2>Lighthouse Grace Church/Ministries</h2>
            <h3>Location:</h3>
            <p>DC Zone, Bulindo / Mulawa Shimoni Estate, Kira Municipality, Kampala, Wakiso Metropolitan Area.</p>
            
            <h3>Established:</h3>
            <p>Lighthouse Grace Church has been a beacon of hope in our community for the past 8 years.</p>

            <h3>Our Community:</h3>
            <p>We are a vibrant community of approximately 350 people attending our four locations every Sunday, with 900 individuals joining us for our missional family gatherings every Wednesday.</p>

            <h3>Denomination:</h3>
            <p>We are a non-denominational church that subscribes to the National Fellowship for Born Again Pentecostal Churches of Uganda and is under the Grace Redeemed Ministries.</p>

            <h1>Our Vision</h1>
            <p>To be a lighthouse bringing hope to our community, city, and the whole world in Jesus' Name.</p>

            <h1>Our Mission</h1>
            <p>We are a discipling movement dedicated to impacting our community spiritually, socially, and economically by planting light and life-giving churches, thereby catalyzing spiritual renewal. We achieve this by creating missional families within our community, fostering a family-centered and family-based church environment.</p>

            <h1>Our Focus</h1>
            <p>At Lighthouse Grace Church, we prioritize families by creating missional families that function like home cells. These groups provide a space for individuals to be discipled and to grow in the character and competence of Jesus Christ.</p>

            <h1>Our Leadership Team</h1>
            <p>We are blessed to have a dedicated team of 8 pastors guiding our ministry:</p>
            <ul>
                <li>Steven and Brenda Kisaame - Lead Pastors (Founders)</li>
                <li>Emmanuel Wambi - Location Pastor, Nabusugwe</li>
                <li>Nzingo Samuel - Location Pastor, Kyanja</li>
                <li>Komugisha Jemima - Location Pastor, Bujjuko</li>
                <li>Robert and Brenda Bugembe - Pastors in charge of Finance and Administration</li>
                <li>Nabatanzi Betty - Children’s Church Pastor</li>
                <li>Collin Kiridde - Youth Pastor</li>
            </ul>

            <h1>Eldership Board</h1>
            <p>Our Eldership Board consists of the following members, providing spiritual oversight and guidance:</p>
            <ul>
                <li>Nicodemus and Phiona Bazaale</li>
                <li>Butundu Rebecca</li>
                <li>Robert and Brenda Bugembe</li>
                <li>Yakalemye John</li>
                <li>Steven and Brenda Kisaame</li>
            </ul>

            <h1>Our Needs</h1>
            <p>As we continue to grow, we have identified several needs to further our mission:</p>
            <ul>
                <li>A permanent church auditorium</li>
                <li>Land for our three locations</li>
                <li>Sound equipment</li>
                <li>A missions van</li>
            </ul>

            <h1>Our Ministries</h1>
            <p>Lighthouse Grace Church offers a variety of ministries to serve our community:</p>
            <ul>
                <li>Leadership Academy</li>
                <li>Children's Ministry (which includes sponsorship and education)</li>
                <li>Family and Marriage Ministry</li>
                <li>Business Development and Employment Linkages</li>
                <li>Missions</li>
            </ul>

            <h1>Our Location</h1>
            <p>DC Zone, Bulindo / Mulawa Shimoni Estate, Kira Municipality, Kampala Wakiso Metropolitan Area</p>

            <iframe
                title="Lighthouse Grace Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0576845195947!2d30.601405514795873!3d-0.3896904359800067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d22b647d01c75f%3A0x7f597c5e9517d1b4!2sDC%20Zone%2C%20Bulindo%2C%20Kira%20Municipality!5e0!3m2!1sen!2sug!4v1630554828376!5m2!1sen!2sug"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default AboutUs;