import React from 'react';
import products from '../data';
import ProductsCard from '../Components/ProductsCard'


const Menu = () => {
  return (
    <>
      <div className='products_wrapper'>
        {products.map((product) => (product.item))}
      </div>
    </>
  );
};

export default Menu;
