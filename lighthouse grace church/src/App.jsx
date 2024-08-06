import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Leaders from './Components/Leaders/Testimonials';
import Testimonials from './Components/Leaders/Testimonials';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Programs' title='Here Are Our Prgrams'/>
        <Programs/>
        <About/>
        <Title subTitle='Services' title='Experiencing God Together in Community'/>
        <Services/>
        <Title subTitle='Our Leaders' title='There Role'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;