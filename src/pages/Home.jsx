import React from 'react';
import styled from 'styled-components';
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
            <ImageContainer>
                <TopImage src={powerwashImage} alt="Powerwashing service" />
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
        </div>
    );
};

export default HomePage;

// Styled Components
const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
`;

const TopImage = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
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
    height: 170px;
    border: 1px solid white;
    border-radius: 8px;
`;
