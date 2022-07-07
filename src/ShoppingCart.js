import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from './pages/Cart'

const ShoppingCart = (props) => {
  const cart = props.cart;
  console.log(cart);

  // using reduce
  // const total = cart.reduce((total, prd) => total + prd.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total = (total + item.price);
  }

  let shipping = 0.0;
  if(total > 35) {
    shipping = 0.00;
  }
  else if(total > 0) {
    shipping = 6.99;
  }

  const tax = total / 10;
  const totalPrice = total + shipping + tax;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <>
    {cart.length === 0 && (
    <div><h3>No Items Are Added!</h3></div>
  )}
    <h3 className='order'>Order Summary</h3>
    <p className='order-list'>Items Ordered: {cart.length}</p>
    <p className='order-list'>Price: ${formatNumber(total)}</p>
    <p className='order-list'><small>Shipping Cost: ${shipping}</small></p>
    <p className='order-list'><small>Tax: ${formatNumber(tax)}</small></p>
    <p className='order-list'>Total Price: ${formatNumber(totalPrice)}</p>
    <br />
    <NavLink to='/cart'>
      <button className='review-btn'>Review Order</button>
    </NavLink>
    </>
  )
}

export default ShoppingCart;