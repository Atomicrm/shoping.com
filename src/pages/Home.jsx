import React, { useState, useEffect } from "react";
import "./Css/Home.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Welcome to Our Store",
      description: "Discover the best products and services we offer.",
    },
    {
      image: "https://images.unsplash.com/flagged/photo-1553802922-e345434156e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "New Arrivals",
      description: "Check out our latest collection.",
    },
    {
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Exclusive Deals",
      description: "Grab exciting offers before they're gone.",
    },
  ];

  const categories = [
    {
      image: "https://images.unsplash.com/photo-1701365676249-9d7ab5022dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3VydGFzfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Ethnic Wear",
      discount: "50-80% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1618086734768-dab4ca3c2c75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdWFsJTIwd2VhcnxlbnwwfDB8MHx8fDI%3D",
      title: "Casual Wear",
      discount: "40-80% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1608138278545-366680accc66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFjdGl2ZSUyMHdlYXJ8ZW58MHwwfDB8fHwy",
      title: "Men's Activewear",
      discount: "30-70% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFjdGl2ZSUyMHdlYXJ8ZW58MHwwfDB8fHwy",
      title: "Women's Activewear",
      discount: "30-70% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlc3Rlcm4lMjB3ZWFyfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Western Wear",
      discount: "40-80% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwd2VhcnxlbnwwfDB8MHx8fDI%3D",
      title: "Sportswear",
      discount: "30-80% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1596791665572-29c7082429e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG91bmdlJTIwd2VhcnxlbnwwfDB8MHx8fDI%3D",
      title: "Loungewear",
      discount: "30-60% OFF",
    },
    {
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8kgiVLNNvek4KbQ3trnoa-RcilaJMzlG8xnf6HZMotCJid6CKtD1iXLGecWwS5MX8R343R77zuZykH3kdaenMp3Vsd15gKXjOE4UFFoWYKOO-d2SWx5IeGg&usqp=CAc",
      title: "Innerwear",
      discount: "UP TO 70% OFF",
    },
   
    {
      image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfDB8MHx8fDI%3D",
      title: "Watches",
      discount: "UP TO 80% OFF",
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Grooming",
      discount: "UP TO 60% OFF",
    },
   
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide, slides.length]);

  return (
    <div className="home">
      {/* Full-Width Carousel */}
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="carousel-caption">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to="/shop"><button className="shop-now-button">Shop Now</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="shop-by-category">
        <h2>SHOP BY CATEGORY</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
              <p>{category.discount}</p>
             <Link to="/shop"><button className="shop-now-button">Shop Now</button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;