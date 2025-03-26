import React from "react";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-16 text-gray-700">
      <div className="grid grid-cols-4 gap-8">
        {/* Online Shopping & Useful Links */}
        <div>
          <h3 className="font-bold mb-3">ONLINE SHOPPING</h3>
          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
          <h3 className="font-bold mt-6 mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h3 className="font-bold mb-3">CUSTOMER POLICIES</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Track Order</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        {/* App Download & Social Media */}
        <div>
          <h3 className="font-bold mb-3">EXPERIENCE HEXA-SHOP APP </h3>
          <div className="flex space-x-4 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32"/>
            
          </div>
          
          
        </div>

        {/* Guarantee & Return Policy */}
        <div>
          <div className="mb-6">
            <h3 className="font-bold">100% ORIGINAL</h3>
            <p>guarantee for all products at HEXA-SHOP</p>
          </div>
          <div>
            <h3 className="font-bold">Return within 14 days</h3>
            <p>of receiving your order</p>
          </div>
        </div>
      </div>

      {/* Popular Searches */}
      
    </footer>
  );
};

export default Footer;
