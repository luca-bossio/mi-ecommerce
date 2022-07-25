import React from "react";
import Cartwidget from "../Cartwidget"
import "./navbar.css"


export const Navbar = () => {
  return (
    <div className="grid-area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h1>LO-MAS colchones</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav lista ">
              <a className="nav-link active menu" aria-current="page" >Inicio</a>
              <a className="nav-link active menu" >Marcas </a>
              <a className="nav-link active menu" >Contacto</a>
              <a className="nav-link active menu" >Redes</a>
              <a className="nav-link active menu" >Tienda <Cartwidget /> </a>
            </div>
          </div>
        </div>
      </nav>
    </div>




  );
}

export default Navbar;
