import React from "react";
import    './Footer.css';

const Footer = () => {
  return (
      <>

            <div className='contact-item'>
            <h3>Contact Information</h3>
                <div className="myFooter">
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                
                <h5>New cairo . Egypt</h5>
              </p>
            </div>


            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                <h5>0508013222</h5>
              </p>
            </div>



            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                <h5>mbtwj1434@gmail.com</h5>
              </p>
              </div>
              
            
            </div>
            </>
          
  );
};

export default Footer;
