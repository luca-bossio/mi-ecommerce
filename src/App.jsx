import './App.css';

import  Navbar  from "./components/Navbar/index"
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer texto="Inicio" />
      </>
  );
}

export default App;
