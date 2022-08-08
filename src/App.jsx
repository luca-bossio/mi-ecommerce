import './App.css';
import React from 'react';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  ItemdetailContainer  from './components/ItemDetailContainer';
import ItemListContainer  from './components/ItemListContainer';
import Navbar from "./components/Navbar"
import CartProvider from './context/CartContext';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:productoId' element={<ItemdetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
