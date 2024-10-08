import React from "react";
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>We provide top-notch power washing services to restore the beauty of your surfaces.</p>

      <div className="services-container">
        <div className="service-card">
          <h2>Residential Power Washing</h2>
          <p>
            Keep your home's exterior looking its best with our gentle yet effective
            residential power washing services.
          </p>
          <ul>
            <li>House washing</li>
            <li>Window cleaning</li>
            <li>Gutter cleaning</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Commercial Power Washing</h2>
          <p>
            Maintain a professional image with our commercial power washing services,
            perfect for offices, restaurants, and retail spaces.
          </p>
          <ul>
            <li>Building exterior cleaning</li>
            <li>Parking lot cleaning</li>
            <li>Sidewalk cleaning</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Driveway and Sidewalk Power Washing</h2>
          <p>
            Revitalize your driveway and sidewalk with our specialized power washing
            services, removing dirt, grime, and oil stains.
          </p>
          <ul>
            <li>Driveway cleaning</li>
            <li>Sidewalk cleaning</li>
            <li>Curb cleaning</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Deck and Patio Power Washing</h2>
          <p>
            Restore your outdoor living spaces with our gentle power washing services,
            perfect for decks, patios, and pool areas.
          </p>
          <ul>
            <li>Deck cleaning</li>
            <li>Patio cleaning</li>
            <li>Furniture cleaning</li>
          </ul>
        </div>
      </div>

      <Link to="/quote">
  <button className="cta-button">Get a Free Quote</button>
</Link>
</div>
  );
};

export default ServicesPage;