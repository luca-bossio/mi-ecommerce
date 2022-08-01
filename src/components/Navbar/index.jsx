import React from "react";
import Cartwidget from "../Cartwidget"
import "./navbar.css"
import ItemListContainer from "../ItemListContainer"
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className="grid-area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" >
            <h1>LO-MAS colchones</h1>
            </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav lista ">
              <NavLink className="nav-link active menu" aria-current="page" to={'/'}>Inicio</NavLink>
              <NavLink className="nav-link active menu" to={'/categoria/Marcas'}>Marcas </NavLink>
              <NavLink className="nav-link active menu" to={'/categoria/Contacto'}>Contacto</NavLink>
              <NavLink className="nav-link active menu" to={'/categoria/Redes'}>Redes</NavLink>
              <NavLink className="nav-link active menu" to={'/cart'}>Tienda <Cartwidget /> </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>




  );
}

export default Navbar;
