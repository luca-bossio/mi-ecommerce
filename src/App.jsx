import './App.css';

import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer';

import Navbar from "./components/Navbar"

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
