import React,{useState} from 'react';
import logo from './logo.svg';
import Header from './Components/Layout/Header';
import Login from './Components/Login/Login';
import { Routes, Route} from 'react-router-dom';
import Seat from './Components/Login/Seat';
import Cart from './Components/Cart/Cart';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './Components/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
 
  return (
    <CartProvider>

    <Routes>
      <Route path = '/' element={<Login/>}></Route>
      <Route path='/seat' element={<Seat/>}> </Route>
      {/* <Route path='/cart' element= {cartIsShown && <Cart/> } ></Route> */}
      <Route path = '/header' element={<Header />}></Route>
      {/* <Route path='/meals' element={<Meals />}></Route> */}
      
     </Routes>
     </CartProvider>
   
  );
}

export default App;
