// import React, { useEffect, useState } from 'react';
// import menuapi from './API/menuApi';
// import gyroapi from './API/gyroApi';
// import saladapi from './API/saladApi';
// import sandwichapi from './API/sandwichApi';
// import ShoppingCart from './ShoppingCart';


// // To get data from local storage

// const getLocalItems = () => {
//     let items = localStorage.getItem('items');
//     console.log(items);

//     if (items) {
//         return JSON.parse(localStorage.getItem('items'));
//     } else {
//         return [];
//     }
// }


// const MenuList = () => {

//     const [riceList, setRiceList] = useState(menuapi);
//     // console.log(menuList);
//     const [gyroList, setGyroList] = useState(gyroapi);
//     const [saladList, setSaladList] = useState(saladapi);
//     const [sandwichList, setSandwichList] = useState(sandwichapi);

//     const handleAddProduct = (item) => {
//         // console.log("Added to Cart", item);
//         const newCart = [...cart, item];
//         setCart(newCart);
//     }

//     const [cart, setCart] = useState(getLocalItems());

//     // To set the cart icon


//     // add data to local storage

//     useEffect(() => {
//         localStorage.setItem('items', JSON.stringify(cart))
//     }, [cart]); 

//   return (
//     <>
//     <div className='menu-main-container'>
//         <div className='product-container'>
//         <h2>RICE PLATTER</h2>
//         <div className="row row-cols-1 row-cols-md-3 g-4 menu-container container">
//             {riceList.map((currentElement, index) => {
//                 const {image, item, price, description} = currentElement;
//                 return (
//                 <>
//                 <div className="col">
//                     <div clasNames="card h-100">
//                     <img src={image} className="card-img-top" alt="..."></img>
//                     <div className="card-body">
//                         <h3 className="card-title">{item}</h3>
//                         <p className="card-text">{description}</p>
//                         <h5>${price}</h5>
//                         <button className='btn button-style main-button' onClick={() => handleAddProduct(currentElement)}>Add To Cart</button>
//                     </div>
//                     </div>
//                 </div>
//                 </>
//                 )
//             })}
//         </div>

//         <br></br>

//         <h2>GYRO PLATTER</h2>
//         <div className="row row-cols-1 row-cols-md-3 g-4 menu-container container">
//             {gyroList.map((currentElement, index) => {
//                 const {image, item, price, description} = currentElement;
//                 return (
//                 <>
//                 <div className="col">
//                     <div clasNames="card h-100">
//                     <img src={image} className="card-img-top" alt="..."></img>
//                     <div className="card-body">
//                         <h3 className="card-title">{item}</h3>
//                         <p className="card-text">{description}</p>
//                         <h5>${price}</h5>
//                         <button className='btn button-style' onClick={() => handleAddProduct(currentElement)}>Add To Cart</button>
//                     </div>
//                     </div>
//                 </div>
//                 </>
//                 )
//             })}
//         </div>

//         <br></br>

//         <h2>SALAD PLATTER</h2>
//         <div className="row row-cols-1 row-cols-md-3 g-4 menu-container container">
//             {saladList.map((currentElement, index) => {
//                 const {image, item, price, description} = currentElement;
//                 return (
//                 <>
//                 <div className="col">
//                     <div clasNames="card h-100">
//                     <img src={image} className="card-img-top" alt="..."></img>
//                     <div className="card-body">
//                         <h3 className="card-title">{item}</h3>
//                         <p className="card-text">{description}</p>
//                         <h5>${price}</h5>
//                         <button className='btn button-style' onClick={() => handleAddProduct(currentElement)}>Add To Cart</button>
//                     </div>
//                     </div>
//                 </div>
//                 </>
//                 )
//             })}
//         </div>

//         <br></br>

//         <h2>SANDWICHES</h2>
//         <div className="row row-cols-1 row-cols-md-3 g-4 menu-container container">
//             {sandwichList.map((currentElement, index) => {
//                 const {image, item, price, description} = currentElement;
//                 return (
//                 <>
//                 <div className="col">
//                     <div clasNames="card h-100">
//                     <img src={image} className="card-img-top" alt="..."></img>
//                     <div className="card-body">
//                         <h3 className="card-title">{item}</h3>
//                         <p className="card-text">{description}</p>
//                         <h5>${price}</h5>
//                         <button className='btn button-style' onClick={() => handleAddProduct(currentElement)}>Add To Cart</button>
//                     </div>
//                     </div>
//                 </div>
//                 </>
//                 )
//             })}
//         </div>
//         <br></br>
//         </div>

//         <div className='cart-container'>
//             <ShoppingCart cart={cart}/>
//         </div>

//     </div>
//     </>
//   )
// }

// export default MenuList


