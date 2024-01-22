
import React from 'react';
import phone from '../images/icons/phone-icon.png'
import email from '../images/icons/email_icon.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>Email: <a href='mailto:tafadzwachiri03@outlook.com'><small><img src={email} alt='.' id='email-icon'/></small></a></p>
            <p>Phone: <a href='tel: +27813532248'><small><img src={phone} alt='.' id='phone-icon'/></small></a> </p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            {/* Add your social media icons or links here */}
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2024 Tafadzwa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
