import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Contexts
import { CartContext } from './../contexts/CartContext'

const Navigation = () => {
  const cart = useContext(CartContext)
  console.log('navigation: cart= ', cart)
  
  return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
