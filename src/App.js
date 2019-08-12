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

	const addItem = item => {
		setCart([...cart, item]);
  };
  
  const removeItem = id => {
    console.log('clicked remove item, cart: ', cart)
    console.log('clicked remove item, id: ', id)
    setCart(cart.filter(item => item.id !== id))
  }

  {console.log('cart: ', cart)}
  
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value ={{ cart, removeItem }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/"component={Products}/>

          <Route
            path="/cart"
            render={() => <ShoppingCart cart={cart} />}
          />
          
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
	);
}

export default App;
