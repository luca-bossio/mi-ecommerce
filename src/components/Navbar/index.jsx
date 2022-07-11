import React from "react";
import "./navbar.css"


export const Navbar = () => {
    return (
        <div className="grid-area">
        <nav class="navbar navbar-expand-lg ">
    <div class="container">
    <a class="navbar-brand" href="#">
        <h1>LO-MAS colchones</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav lista ">
          <a class="nav-link active menu" aria-current="page" >Inicio</a>
          <a class="nav-link active menu" >Marcas </a>
          <a class="nav-link active menu" >Tienda</a>
          <a class="nav-link active menu" >Contacto</a>
          <a class="nav-link active menu" >Redes</a>
        </div>
      </div>
    </div>
  </nav>
  </div>

        


    );
}

export default Navbar;
