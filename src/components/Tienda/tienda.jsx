import React from "react";
import Cartwidget from "../Cartwidget";
import "./navbar.css";
import { NavLink } from 'react-router-dom'

export const Tienda = () => {
    return (

<>
<div class="tienda">
            <div class="animate__animated animate__backInLeft">
                <h2 class="titulo">Compra|LO-MAS Colchones</h2>
            </div>

            <div>
                <select class="tienda" aria-label="Default select example">
                    <option selected>Selecciona la marca del colchon:</option>
                    <option value="1">Suavestar</option>
                    <option value="2">Cannon</option>
                    <option value="3">Piero</option>
                    <option value="4">Kavanagh</option>
                    <option value="5">Simmons</option>
                </select>
            </div>

            <div>
                <select class="tienda" aria-label="Default select example">
                    <option selected>Selecciona el modelo del colchon:</option>
                    <option value="1">Modelo1</option>
                    <option value="2">Modelo2</option>
                    <option value="3">Modelo3</option>
                    <option value="4">Modelo4</option>
                    <option value="5">Modelo5</option>
                </select>
            </div>

            <div class="tienda">
                <label for="inputmedida3" class="col-sm-2 col-form-label">Medida del colchon:</label>
                <div class="col-sm-10">
                    <input type="Medida" class="form-control" id="inputmedida3">
                </div>
            </div>

            <div>
                <select class="tienda" aria-label="Default select example">
                    <option selected>Selecciona el modelo de la base del colchon:</option>
                    <option value="1">Modelo1</option>
                    <option value="2">Modelo2</option>
                    <option value="3">Modelo3</option>
                    <option value="4">Modelo4</option>
                    <option value="5">Modelo5</option>
                </select>
            </div>

            <div class="tienda">
                <label for="inputmedidaBase3" class="col-sm-2 col-form-label">Medida de la base:</label>
                <div class="col-sm-10">
                    <input type="MedidaBase" class="form-control" id="inputmedidaBase3">
                </div>
            </div>

            <div class="tienda">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            </div>

            <div class="tienda">
                <button type="submit" class="btn btn-primary">Finalizar compra</button>
                <button type="reset" class="btn btn-second">Seguir comprando</button>
            </div>

        </div>
</>

)
}

export default Tienda;