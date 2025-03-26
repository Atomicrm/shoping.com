import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import Brands from "../Gender/BrandsData"; // Import your brands array
import '../pages/Css/Brandspage.css'; // Import the CSS file for styling

const BrandPage = () => {
  const { id } = useParams();
  const brand = Brands.find(b => b.id === parseInt(id));

  if (!brand) {
    return <div>Brand not found</div>;
  }

  const products = brand.products || [];

  return (
    <div className="brand-page">
      <h1 className="brand-title">{brand.name}</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Link 
            to={`/shop-details/${product.id}`} // Link to ShopDetail with product ID
            key={index} 
            className="product-item-link"
          >
            <div className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-rating">
                {product.rating} ★ | {product.reviews}
              </div>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">
                <strong>Rs. {product.price}</strong> (Rs. {product.originalPrice} ({product.discount}))
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;