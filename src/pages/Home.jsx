import React from 'react';
import powerwashImage from '../images/powerwashing5.jpg';
import powerwashImage2 from '../images/powerwashing6.jpg';
import Navbar from '../components/Navbar'; // Adjust path if needed

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Navbar is placed at the top */}
      
      <div className="image-container">
        <div className="image-wrapper">
          {/* Wrap the homeheader text in a div */}
          <div className="homeheader-container">
            <h1 className="homeheader">Revitalize Your Property with Professional Powerwashing</h1>
          </div>
          <img src={powerwashImage} alt="Powerwashing service" className="home-img1" />
        </div>
        <img src={powerwashImage2} alt="Powerwashing service" className="home-img2" />
      </div>

      <section>
        <h2>Our Services</h2>
        <div>
          <div>Residential Powerwashing</div>
          <div>Commercial Powerwashing</div>
          <div>Driveway & Sidewalk Cleaning</div>
          <div>Deck & Patio Cleaning</div>
          <div>Roof & Gutter Cleaning</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
