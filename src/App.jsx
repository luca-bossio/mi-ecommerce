import './App.css';

import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemdetailContainer from './components/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>

      <BrowserRouter>
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
