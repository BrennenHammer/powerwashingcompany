import React from "react";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <div className="contact-info">
        <h1>Get in Touch</h1>
        <p>Ready to see your property shine? Contact us today for a free quote!</p>
        <div className="contact-details">
          <div className="detail">
            <span className="icon-mail"></span>
            <p>email@email.com</p>
          </div>
          <div className="detail">
            <span className="icon-phone"></span>
            <p>317-789-1012</p>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default ContactPage;