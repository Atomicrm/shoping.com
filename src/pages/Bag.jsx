import React from "react";
import { Link } from "react-router-dom";
import './Css/Bag.css'; // Import the CSS file for styling

const Bag = ({ bagItems = [] }) => { // Default value for bagItems
  console.log("Bag Items:", bagItems); // Debugging
  return (
    <div className="bag-page">
      <h1 className="bag-title">Your Bag</h1>
      {bagItems.length === 0 ? (
        <p className="empty-bag">Your bag is empty.</p>
      ) : (
        
        <div className="bag-items">
          {bagItems.map((item, index) => (
            <div key={index} className="bag-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h2 className="item-name">{item.name}</h2>
                <p className="item-price">Rs. {item.price}</p>
                <p className="item-size">Size: {item.size}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="continue-shopping">Continue Shopping</Link>
    </div>
  );
};

export default Bag;