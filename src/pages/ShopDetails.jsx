import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Brands from "../Gender/BrandsData"; // Import your brands array
import './Css/ShopDetails.css'; // Import the CSS file for styling

const ShopDetail = ({ addToBag }) => {
  console.log("addToBag:", addToBag); 
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size

  // Find the product by ID
  const product = Brands.flatMap(brand => brand.products).find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Sizes available for selection
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Handle "Add to Bag" button click
  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to bag.");
      return;
    }
    addToBag(product, selectedSize); // Add product to bag
    navigate("/bag"); // Navigate to the bag page
  };

  return (
    <div className="shop-detail">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <div className="product-rating">
            {product.rating} ★ | {product.reviews} Ratings
          </div>
          <div className="product-price">
            <strong>Rs. {product.price}</strong> MRP <del>Rs. {product.originalPrice}</del> ({product.discount})
          </div>
          <p className="tax-info">Inclusive of all taxes</p>
          <div className="size-selection">
            <label>SELECT SIZE</label>
            <div className="size-options">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`size-button ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <a href="#" className="size-chart-link">SIZE CHART &gt;</a>
          </div>
          <div className="action-buttons">
            <button className="add-to-bag" onClick={handleAddToBag}>ADD TO BAG</button>
            <button className="wishlist">WISHLIST</button>
          </div>
          <div className="delivery-options">
            <h3>DELIVERY OPTIONS</h3>
            <input type="text" placeholder="Enter pincode" />
            <button>Check</button>
            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
          </div>
          <p className="original-products">100% Original Products</p>

          {/* Best Offers Section */}
          <div className="best-offers">
            <h3>BEST OFFERS</h3>
            <div className="offer">
              <p><strong>Best Price:</strong> Rs. 1391</p>
              <p><strong>Coupon code:</strong> FLAT300</p>
              <p><strong>Coupon Discount:</strong> Rs. 300 off (check cart for final savings)</p>
              <p><strong>Applicable on:</strong> Orders above Rs. 1399 only on first purchase</p>
              <a href="#" className="view-products-link">View Eligible Products</a>
            </div>
            {/* Add more offers here */}
             {/* Best Offers Section */}
             <div className="best-offers">
            <h3>BEST OFFERS</h3>
            <div className="offer">
              <p><strong>Best Price:</strong> Rs. 1391</p>
              <p><strong>Coupon code:</strong> FLAT300</p>
              <p><strong>Coupon Discount:</strong> Rs. 300 off (check cart for final savings)</p>
              <p><strong>Applicable on:</strong> Orders above Rs. 1399 only on first purchase</p>
              <a href="#" className="view-products-link">View Eligible Products</a>
            </div>
            <div className="offer">
              <p><strong>10% Discount on Axis Bank Credit Card.</strong></p>
              <p>Min Spend ₹3500, Max Discount ₹1000</p>
              <a href="#" className="terms-link">Terms & Condition</a>
            </div>
            <div className="offer">
              <p><strong>10% Discount on Axis Bank Credit Card EMI.</strong></p>
              <p>Min Spend ₹3500, Max Discount ₹1000</p>
              <a href="#" className="terms-link">Terms & Condition</a>
            </div>
            <div className="offer">
              <p><strong>10% Discount on PNB Credit Cards.</strong></p>
              <p>Min Spend ₹3000, Max Discount ₹1500</p>
              <a href="#" className="terms-link">Terms & Condition</a>
            </div>
            <div className="offer">
              <p><strong>10% Discount on Kotak Credit and Debit Cards.</strong></p>
              <p>Min Spend ₹5000, Max Discount ₹1500</p>
              <a href="#" className="terms-link">Terms & Condition</a>
            </div>
            <div className="offer">
              <p><strong>10% Discount on HSBC Credit Cards.</strong></p>
              <p>Min Spend ₹5000, Max Discount ₹1500</p>
              <a href="#" className="terms-link">Terms & Condition</a>
            </div>
            <div className="offer">
              <p><strong>7.5% Discount on Myntra Kotak Credit Card.</strong></p>
              <p>Max Discount up to ₹750 on every spends</p>
              <a href="#" className="terms-link">Terms & Condition</a>
            </div>
            <div className="offer">
              <p><strong>EMI option available</strong></p>
              <p>VEM starting from Rs. 79/month</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;