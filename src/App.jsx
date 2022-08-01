import './App.css';

import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/index"

import ItemdetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar >
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </>
  );
}

export default App;
