import React, { useEffect, useState } from 'react';
import getLocalItems from './MenuList';
import ReviewItems from './ReviewItems';

const Review = () => {

  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   // cart
  //   const savedCart = getLocalItems();
  //   const itemKeys = Object.keys(savedCart);
  //   const cartProducts = itemKeys.map(key => {
  //     const product = cart.find(item => item.key === key);
  //     product.quantity = savedCart[key];
  //     return product;
  //   });
  //   setCart(cartProducts);
  // })

  return (
    <>
    <h1>Review</h1>
    <h1>Cart Items: {cart.length}</h1>
    {/* {cart.map(pd => <ReviewItems item = {pd}></ReviewItems>)} */}
    </>
  )
}

export default Review