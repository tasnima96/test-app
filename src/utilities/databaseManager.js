// const getUser = () => {
//     const existingUser = window.session.getItem('userId');
//     if (existingUser) {
//         return existingUser;
//     } else {
//         const newUser = 'user-' + new Date().getTime();
//         window.session.setItem('userId', newUser);
//         return newUser;
//     }
// }

// const getDataKey = () => {
//     const userId = getUser();
//     return `foodparadise/cart/${userId}`;
// }

// // push to local storage: a temporary place for database
// const getDatabaseCart = () => {
//     const dataKey = getDataKey();
//     const data = localStorage.getItem(dataKey) || "{}";
//     return JSON.parse(data);
// }

// const addToDatabaseCart = (key, count) => {
//     const currentCart = getDatabaseCart();
//     currentCart[key] =  count;
//     localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
// }

// const removeFromDatabaseCart = key => {
//     const currentCart = getDatabaseCart();
//     delete currentCart[key];
//     localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
// }

// const processOrder = (cart) => {
//     localStorage.removeItem(getDataKey());
// }

// export {addToDatabaseCart, getDataKey, removeFromDatabaseCart, processOrder};


// // polyfill to support older browser
// const localStorage = window.localStorage || (() => {
//     let store = {}
//     return {
//         getItem(key) {
//             return store[key]
//         },
//         setItem(key, value) {
//             store[key] = value.toString()
//         },
//         clear() {
//             store = {}
//         }
//     };
// })()

// const sessionStorage = window.sessionStorage || (() => {
//     let store = {}
//     return {
//         getItem(key) {
//             return store[key]
//         },
//         setItem(key, value) {
//             store[key] = value.toString()
//         },
//         clear() {
//             store = {}
//         }
//     };
// })()

// // end of polyfill


// use local storage to manage cart data
// const addToDb = id =>{
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart);
//     }

//     // add quantity
//     const quantity = shoppingCart[id];
//     if(quantity){
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else{
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

// const deleteShoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb, 
//     removeFromDb,
//     deleteShoppingCart
// }

