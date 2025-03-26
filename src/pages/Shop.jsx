import React from "react";
import './Css/Shop.css'
const products = [
  {
    id: 1,
    name: "Kurta With Trousers & Dupatta",
    brand: "Indo Era",
    price: 1749,
    originalPrice: 5999,
    discount: 4250,
    rating: 4.4,
    reviews: "7.1k",
    image: "https://via.placeholder.com/250",
  },
  {
    id: 2,
    name: "Embroidered Kurta Set",
    brand: "Indo Era",
    price: 1799,
    originalPrice: 7999,
    discount: 6200,
    rating: 4.3,
    reviews: "5.7k",
    image: "https://via.placeholder.com/250",
  },
  {
    id: 3,
    name: "Women Kurta with Trousers W...",
    brand: "Libas",
    price: 2999,
    originalPrice: 7999,
    discount: 5000,
    rating: 4.5,
    reviews: "6k",
    image: "https://via.placeholder.com/250",
  },
  {
    id: 4,
    name: "Beads and Stones Saree",
    brand: "Kasee",
    price: 1504,
    originalPrice: 7163,
    discount: 79,
    rating: 4.4,
    reviews: "4.3k",
    image: "https://via.placeholder.com/250",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-brand">{product.brand}</h3>
        <p className="product-name">{product.name}</p>
        <div className="product-rating">
          <span className="rating-value">{product.rating} ★</span>
          <span className="reviews">({product.reviews})</span>
        </div>
        <div className="product-pricing">
          <span className="price">Rs. {product.price}</span>
          <span className="original-price">Rs. {product.originalPrice}</span>
          <span className="discount">{product.discount} OFF</span>
        </div>
      </div>
    </div>
  );
};

const ShopPage = () => {
  return (
    <div className="shop-page">
      <h1 className="shop-title">Trending Women's Ethnic Wear</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;