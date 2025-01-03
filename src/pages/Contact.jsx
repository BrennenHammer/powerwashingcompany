import React from "react";
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
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
  );
};

export default ContactPage;