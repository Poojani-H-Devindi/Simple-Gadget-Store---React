import React, { useState } from 'react';
import './App.css';

// Card Component - භාණ්ඩයක් පෙන්වීමට
function Card({ item, onBuy }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="price">Rs. {item.price}</p>
        <button className="buy-btn" onClick={onBuy}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

// Navbar Component - මෙනු එක සහ කාර්ට් එක පෙන්වීමට
function Navbar({ count }) {
  return (
    <nav className="navbar">
      <div className="logo">GadgetStore</div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="cart-icon">
          🛒 {count > 0 && <span className="badge">{count}</span>}
        </div>
      </div>
    </nav>
  );
}

// Main App Component
export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const inventory = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '5,500',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '12,000',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    },
    {
      id: 3,
      name: 'Gaming Mouse',
      price: '3,500',
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar count={cartCount} />
      <div className="main-container">
        {inventory.map((item) => (
          <Card
            key={item.id}
            item={item}
            onBuy={() => setCartCount(cartCount + 1)}
          />
        ))}
      </div>
      <footer className="footer">
        <p>Privacy Policy | Terms of Service</p>
        <p>&copy; 2026 GadgetStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
