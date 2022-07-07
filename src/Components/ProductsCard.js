import React from 'react'

function ProductsCard({product}) {
  return (
    <>
    <div className='productCard_wrapper'>
        <div>
            <img className='productCard_img' src={product.image} alt=''>
                <h4>{product.name}</h4>
                <div className='productCard_price'>
                    <h5>{product.price}</h5>
                </div>
            </img>
        </div>
    </div>
    </>
  );
};

export default ProductsCard;