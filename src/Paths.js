import React from 'react';
import Home from './Menu/Menu';
import {Routes, Route} from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import About from './pages/About';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Location from './pages/Location';

function Paths() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/menu/*' element={<Menu />}></Route>
      <Route path='/about/*' element={<About />}></Route>
      <Route path='/location/*' element={<Location />}></Route>
      <Route path='/contact/*' element={<ContactUs />}></Route>
      <Route path='/cart/*' element={<Cart />}></Route>
      <Route path= '*' element={<Error />}></Route>
    </Routes>
    </>
  )
}

export default Paths

