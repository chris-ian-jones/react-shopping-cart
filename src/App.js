import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => setCart([...cart, item])
  
  // iterates over cart array, filtering the items in cart
  // returning items whose id is different to passed in id from ShoppingCartItem component
  const removeItem = id => setCart(cart.filter(item => item.id !== id))
  
  return (
    // 2.) Wrap component tree inside Provider component
    // 3.) Pass the data to the value prop of the Provider
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value ={{ cart, removeItem }}>
        <div className="App">
          <Navigation cart={cart} />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
	);
}

export default App;
