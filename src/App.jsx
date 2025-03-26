import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignupPage from "./pages/Common/SignupPage";
import './index.css'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Common/LoginPage";
import WomenPage from "./Gender/WomenPage";
import MenPage from "./Gender/MenPage";
import axios from "axios";
import BrandPage from "./Gender/BrandPage";
import Bag  from "./pages/Bag"
import { ResetPassword } from "./pages/Common/ResetPassword";



export default function App() {

  const [bagItems, setBagItems] = useState([]); // State for bag items

  // Function to add a product to the bag
  const addToBag = (product, size) => {
    const existingItem = bagItems.find(item => item.id === product.id && item.size === size);
    if (existingItem) {
      // If the item already exists, increase the quantity
      setBagItems(bagItems.map(item =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // If the item is new, add it to the bag
      setBagItems([...bagItems, { ...product, size, quantity: 1 }]);
    }
  };

  axios.defaults.baseURL="http://localhost:3134" 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details/:productId" element={<ShopDetails addToBag={addToBag} />} /> {/* Add this route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/women" element={<WomenPage></WomenPage>}></Route>
        <Route path="/men" element={<MenPage></MenPage>}></Route>
        <Route path="/men/:id" element={<BrandPage />} />
        <Route path="/bag" element={<Bag bagItems={bagItems} />} /> {/* Pass bagItems state */}
        <Route path="/forgotpassword/:token" element={<ResetPassword></ResetPassword>}></Route>
       
      </Routes>
      <Footer />
    </Router>
  );
}