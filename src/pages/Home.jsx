import React from 'react';
import powerwashImage from '../images/';


const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Revitalize Your Property with Professional Powerwashing</h1>
        <img src={powerwashImage} alt="Powerwashing service" className="home-image" />

        <p>We bring back the beauty of your surfaces—homes, driveways, decks, and more.</p>
        <button>Get a Free Quote</button>
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
