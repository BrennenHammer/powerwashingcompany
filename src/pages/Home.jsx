import React from 'react';
import powerwashImage from '../images/powerwashing5.jpg';


const HomePage = () => {
  return (
    <div>
      <header>
        <h1 class='homeheader'>Revitalize Your Property with Professional Powerwashing</h1>
        <img  src={powerwashImage} alt="Powerwashing service" className="home-img1" />

       
      </header>

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

      {/* Other sections as discussed earlier */}
    </div>
  );
};

export default HomePage;
