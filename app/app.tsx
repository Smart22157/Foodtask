
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '@/app/Home/page';
import Cart from '@/app/cart/page'; 
const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;