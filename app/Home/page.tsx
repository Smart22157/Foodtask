"use client"
import React, { useState } from 'react';
import '../APP.css';
import Image from 'next/image';

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({}); 
  const [showCart, setShowCart] = useState(false);
   

  function handleButtonClick(itemName: string) {

    setCartItems(prevItems => ({
      ...prevItems,
      [itemName]: (prevItems[itemName] || 0) + 1 
    }));
  }

  function handleRemoveButtonClick(itemName: string) {
    setCartItems(prevItems => {
      const newItems = { ...prevItems };
      delete newItems[itemName]; 
      return newItems;
    });
  }

  function toggleCart() {
    setShowCart(prevShowCart => !prevShowCart); 
  }

  return (
    <div className=".container">
      <header className="header">
        <h1>Welcome to foodstore</h1>
        <div className="Cart">
          <button onClick={toggleCart}>
            <img src="cart.png" alt="cart" />({Object.values(cartItems).reduce((a, b) => a + b, 0)})
          </button>
        </div>
      </header>

      {showCart && (
        <div className="cartItems">
          <h2>Items in Cart:</h2>
          <ul>
            {Object.keys(cartItems).map(item => {
                let price = 0;
                if (item === 'Apple') price = 50;
                else if (item === 'Avocado') price = 30; 
                else if (item === 'Burger') price = 80; 
                else if (item === 'Hotdog') price = 100; 
                else if (item === 'Melon') price = 120;
                else if (item === 'Pizza') price = 800;
                else if (item === 'Salad') price = 50; 
  
              const total = price * cartItems[item];
              return (
                <li key={item}>
                  {item} = {cartItems[item]} = sh{total}
                  <div className="dels">
                  <button onClick={() => handleRemoveButtonClick(item)}><img src="del.png" alt="del"></img></button>
                  </div>
                  </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="banner">
        <div className="customShape">
          <h2>Fresh Produce</h2>
        </div>
      </div>

      <main className="mainContent">
        <h2>Shop Our Products</h2>
        <p>Explore a wide range of fresh fruits, vegetables, and Snacks.</p>

        <div className="productContainer">
          <div className="product">
            <img src="Apple.jpg" alt="Apple" />
            <p className="text">Apple  - sh50</p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Apple')}>Take Item</button>
            </div>
          </div>
          <div className="product">
            <img src="Avacado.jpg" alt="Avocado" />
            <p className="text">Avocado - sh30  </p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Avocado')}>Take Item</button>
            </div>
          </div>
          <div className="product">
            <img src="burger.jpg" alt="Burger" />
            <p className="text">Burger - sh 80</p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Burger')}>Take Item</button>
            </div>
          </div>
          <div className="product">
            <img src="hotdog.jpg" alt="Hotdog" />
            <p className="text">Hotdog - sh 100</p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Hotdog')}>Take Item</button>
            </div>
          </div>
          <div className="product">
            <img src="melon.jpg" alt="Melon" />
            <p className="text">Melon - sh 120</p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Melon')}>Take Item</button>
            </div>
          </div>
          <div className="product">
            <img src="pizaa.jpg" alt="Pizza" />
            <p className="text">Pizza - sh 800</p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Pizza')}>Take Item</button>
            </div>
          </div>
          <div className="product">
            <img src="salad.jpg" alt="Salad" />
            <p className="text">Salad - sh 50</p>
            <div className="buttontake">
              <button onClick={() => handleButtonClick('Salad')}>Take Item</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 jefgreg Store. All rights reserved.</p>
      </footer>
    </div>
  );
};
  
     
      
    
  


export default Home;