import React from 'react';
import styled from 'styled-components';
import powerwashImage from '../images/powerwashing5.jpg';
import powerwashImage2 from '../images/powerwashing6.jpg';
import Navbar from '../components/Navbar';
import serviceImage1 from '../images/serviceimage1.jpeg';
import serviceImage2 from '../images/serviceimage2.jpeg';
import serviceImage3 from '../images/serviceimage3.jpeg';
import serviceImage4 from '../images/serviceimage4.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div class ="homeDiv">
            <Navbar />
            <ImageContainer>
                <TopImage src={powerwashImage} alt="Powerwashing service" hideOnMobile />
                <TopImage src={powerwashImage2} alt="Powerwashing service" />
            </ImageContainer>

            <ServicesSection>
                <Service>
                    <ServiceImg src={serviceImage1} alt="Residential Powerwashing" />
                    <h3>Residential Powerwashing</h3>
                </Service>
                <Service>
                    <ServiceImg src={serviceImage2} alt="Commercial Powerwashing" />
                    <h3>Commercial Powerwashing</h3>
                </Service>
                <Service>
                    <ServiceImg src={serviceImage3} alt="Driveway & Sidewalk Cleaning" />
                    <h3>Driveway & Sidewalk</h3>
                </Service>
                <Service>
                    <ServiceImg src={serviceImage4} alt="Deck & Patio Cleaning" />
                    <h3>Deck & Patio Cleaning</h3>
                </Service>
            </ServicesSection>
            <div className="services-page">
                  <h1>Our Services</h1>
                  <p>I provide top-notch power washing services to restore the beauty of your surfaces.</p>
            
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
             <div className="contactpage">
                  <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p>Ready to see your property shine? Contact us today for a free quote!</p>
                    <div className="contact-details">
                      <div className="detail">
                        <span className="icon-mail"></span>
                        <p>time2cleanindy@gmail.com</p>
                      </div>
                      <div className="detail">
                        <span className="icon-phone"></span>
                        <p>317-500-3392</p>
                      </div>
                    </div>
                  </div>
            
                  <div className="call-to-action">
                  <Link to="/quote">
              <button className="get-a-quote-btn">Get a Free Quote</button>
            </Link>      </div>
                </div>
                <div className="about-section">
  <h1>About Us</h1>
  <p className="about-mission">My mission is simple: to offer the highest quality powerwashing services with unparalleled customer satisfaction...</p>
  
  <div className="about-content">
    <h2>Why Choose Me?</h2>
    <ul>
      <li><strong>Experienced Professionals:</strong> I am an experienced technician who know the ins and outs of powerwashing...</li>
      <li><strong>Cutting-Edge Equipment:</strong> I use the latest in powerwashing technology to effectively remove dirt, grime, mold, and stains without damaging your surfaces...</li>
      <li><strong>Eco-Friendly Solutions:</strong> I care about the environment, which is why we use biodegradable, non-toxic cleaning solutions...</li>
      <li><strong>Customer Satisfaction Guaranteed:</strong> I take pride in my work, and your satisfaction is our top priority...</li>
    </ul>
    
    <h2>Our Services</h2>
    <ul>
      <li>Residential Powerwashing: Driveways, sidewalks, decks, patios, siding, and more.</li>
      <li>Commercial Powerwashing: Storefronts, parking lots, building exteriors, and more.</li>
      <li>Specialized Services: Roof cleaning, graffiti removal, and more.</li>
    </ul>

  </div>
</div>

        </div>
    );
};

export default HomePage;

// Styled Components
const ImageContainer = styled.div`
    display: flex;
    width: 100%;
     @media (max-width: 820px) {
    display: block;
  }
`;

const TopImage = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
     @media (max-width: 820px) {
    width: 100%;
    display: ${props => props.hideOnMobile ? 'none' : 'block'};
  }
`;

const ServicesSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: -100px;
    padding: 40px;
    gap: 5px;
    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Service = styled.div`
    text-align: center;
`;

const ServiceImg = styled.img`
    width: 90%;
    max-width: 500px;
    height: 50%;
    border: 1px solid white;
    border-radius: 8px;
`;
