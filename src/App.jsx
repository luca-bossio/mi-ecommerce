import './App.css';
import React from 'react';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  ItemdetailContainer  from './components/ItemDetailContainer';
import ItemListContainer  from './components/ItemListContainer';
import Navbar from "./components/Navbar"
import CartProvider from './context/CartContext';
import { Home } from './components/Home/home';
import Marcas from './components/Marcas/marcas';
import Redes from './components/Redes/redes';
import Contacto from './components/Contacto/contacto'
import Footer from './components/Footer/footer';







function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Marcas' element={<Marcas/>} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Tienda' element={<Cart />} />
            <Route path='/Productos' element={<ItemListContainer />} />
            <Route path='/Redes' element={<Redes />} />
            <Route path='/detalle/:detalleId' element={<ItemdetailContainer />} />
          </Routes>
        </CartProvider>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
