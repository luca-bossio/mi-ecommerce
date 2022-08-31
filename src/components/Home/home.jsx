import React from "react";
import Cartwidget from "../Cartwidget";
import "../Css/main.css";
import { NavLink } from 'react-router-dom';
import  ImagenPublicidad1  from '../imagenes/imagen_publicidad1.jpg'
import  ImagenPublicidad2  from '../imagenes/imagen-publicidad2.jpg'
import  ImagenPublicidad3  from '../imagenes/imagen-publicidad3.jpg'


export const Home = () => {
    return (

<>
<div class="main">

    <div class="animate__animated animate__backInLeft">
      <h1 class="titulo">Inicio|LO-MAS Colchones</h1>
      <h2 class="tituloPrincipal">Bienvenidos a LO-MAS COLCHONES</h2>
        <p class="texto">LO-MAS Colchones es una colchoneria que trabaja en la venta de colchones y afines desde hace 20
          años.</p>
        <p class="texto">Y este año nos animamos a la venta online.</p>
        <p class="texto">Tenemos una amplia variedad de marcas de alta calidad y todas las medidas.</p>
    </div>

    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active imagen">
            <img src={ ImagenPublicidad1 } class="d-block w-100" alt="Imagen de publicidad"/>
          </div>
          <div class="carousel-item  imagen">
            <img src={ ImagenPublicidad2 } class="d-block w-100" alt="Imagen de publicidad"/>
          </div>
          <div class="carousel-item imagen">
            <img src={ ImagenPublicidad3 } class="d-block w-100" alt="Imagen de publicidad"/>
          </div>
        </div>
      </div>
    </div>


  </div>

</>
)
}