import React from "react";
import Cartwidget from "../Cartwidget"
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import Logo from '../imagenes/logo-lomascolchoneria.png'


export const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink to="/" className="navbar-brand" >
          <img src={   Logo  } alt="Logo de la colchoneria" width="40%" height="auto"  className="Logo"  />
            </NavLink>    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav lista ">
              <NavLink className="nav-link active menu" aria-current="page" to="/">Inicio</NavLink>
              <NavLink className="nav-link active menu" to="/Marcas">Marcas </NavLink>
              <NavLink className="nav-link active menu" to="/Contacto">Contacto</NavLink>
              <NavLink className="nav-link active menu" to="/Redes">Redes</NavLink>
              <NavLink className="nav-link active menu" to="/cart">Tienda <Cartwidget /> </NavLink>
              <NavLink className="nav-link active menu" to="/Productos">Productos  </NavLink>
            </div>
          </div>
        </div>
      </nav>
 




  );
}

export default Navbar;
