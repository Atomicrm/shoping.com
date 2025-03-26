import React from "react";
// import "./MenPage.css"; // Import the CSS file
import '../pages/Css/MenPage.css'
import { Link } from "react-router-dom";
import  Brands  from "./BrandsData"

const categories = [
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1603252110971-b8a57087be18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Jeans",
    image: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Shorts & Trousers",
    image: "https://plus.unsplash.com/premium_photo-1666265087913-9326638decfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcnRzfGVufDB8fDB8fHww"
  },
  {
    name: "Casual Shoes",
    image: "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzdWFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
  }
];


const MenPage = () => {
  
  return (
    <div className="men-page">
      <h1 className="page-title">Men's Fashion Deals</h1>
      <div className="brand-grid">
        {Brands.map((brand) => (
          <Link 
            to={`/men/${brand.id}`} // Dynamic route based on brand ID
            key={brand.id} 
            className="brand-card-link"
          >
            <div className="brand-card">
              <img src={brand.image} alt={brand.name} className="brand-image" />
              <h2 className="brand-name">{brand.name}</h2>
              <p className="brand-discount">{brand.discount}</p>
            </div>
          </Link>
        ))}
      </div>
       {/* Categories Section */}
      <div className="categories-section">
        <h2 className="categories-title">CATEGORIES TO BAG</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img 
                src={category.image} 
                alt={category.name} 
                className="category-image"
              />
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default MenPage;