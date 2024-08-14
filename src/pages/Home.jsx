import React from 'react';
import powerwashImage from '../images/powerwashing5.jpg';
import powerwashImage2 from '../images/powerwashing6.jpg';
import Navbar from '../components/Navbar';
import serviceImage1 from '../images/serviceimage1.jpeg';
import serviceImage2 from '../images/serviceimage2.jpeg';
import serviceImage3 from '../images/serviceimage3.jpeg';
import serviceImage4 from '../images/serviceimage4.jpeg';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      
      <div className="image-container">
        <div className="image-wrapper">
          <div className="homeheader-container">
            <h1 className="homeheader">Revitalize Your Property with Professional Powerwashing</h1>
          </div>
          <img src={powerwashImage} alt="Powerwashing service" className="home-img1" />
        </div>
        <img src={powerwashImage2} alt="Powerwashing service" className="home-img2" />
      </div>

      <section className="services-section">
  <div className="service">
    <img src={serviceImage1} alt="Residential Powerwashing" className="service-img" />
    <h3>Residential Powerwashing</h3>
  </div>
  <div className="service">
    <img src={serviceImage2} alt="Commercial Powerwashing" className="service-img" />
    <h3>Commercial Powerwashing</h3>
  </div>
  <div className="service">
    <img src={serviceImage3} alt="Driveway & Sidewalk Cleaning" className="service-img" />
    <h3>Driveway & Sidewalk Cleaning</h3>
  </div>
  <div className="service">
    <img src={serviceImage4} alt="Deck & Patio Cleaning" className="service-img" />
    <h3>Deck & Patio Cleaning</h3>
  </div>
</section>

    </div>
  );
};

export default HomePage;
