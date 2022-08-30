import React from "react";
import "../Css/main.css";
import 'react-router-dom'

export const Contacto = () => {
    return (

<>
<div className="main">
            <div className="animate__animated animate__backInLeft">
                <h1 className="titulo">Contacto|LO-MAS Colchones</h1>
            </div>

            <h2 className="subtitulo" classNameName="animate__animated animate__headShake">REGISTRATE</h2>

            <form>
                <div className="formulario">
                    <label for="inputNombre3" className="col-sm-2 col-form-label">Nombre y Apellido:</label>
                    <div className="col-sm-10">
                        <input type="Nombre" className="form-control" id="inputNombre3"></input>
                    </div>
                </div>
                <div className="formulario">
                    <label for="inputdoc3" className="col-sm-2 col-form-label">DNI:</label>
                    <div className="col-sm-10">
                        <input type="documento" className="form-control" id="inputdoc3"></input>
                    </div>
                    </div>
                    <div className="formulario">
                        <label for="inputemail3" className="col-sm-2 col-form-label">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputemail3"></input>
                        </div>
                    </div>
                    <div className="formulario">
                        <label for="inputcontraseñal3" className="col-sm-2 col-form-label">Contraseña:</label>
                        <div className="col-sm-10">
                            <input type="contraseña" className="form-control" id="inputcontraseña3"></input>
                        </div>
                    </div>
                    <div className="formulario">
                        <label for="inputtelefono3" className="col-sm-2 col-form-label">Telefono:</label>
                        <div className="col-sm-10">
                            <input type="telefono" className="form-control" id="inputtelefono3"></input>
                        </div>
                    </div>
                    <div className="formulario">
                        <label for="inputcalle3" className="col-sm-2 col-form-label">Calle:</label>
                        <div className="col-sm-10">
                            <input type="calle" className="form-control" id="inputecalle3"></input>
                        </div>
                    </div>
                    <div className="formulario">
                        <label for="inputaltura3" className="col-sm-2 col-form-label">Altura:</label>
                        <div className="col-sm-10">
                            <input type="altura" className="form-control" id="inputaltura3"></input>
                        </div>
                    </div>
                    <div className="formulario">
                        <label for="inputcodigo3" className="col-sm-2 col-form-label">Codigo postal:</label>
                        <div className="col-sm-10">
                            <input type="codigoPostal" className="form-control" id="inputcodigo3"></input>
                        </div>
                    </div>

                    <div className="aclaraciones">
                        <textarea className="form-control" placeholder="Leave a comment here"
                            id="floatingTextarea"></textarea>
                    </div>

                    <div className="aclaraciones">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                        <label className="form-check-label" for="flexCheckChecked">
                            Acepto terminos y condiciones
                        </label>
                    </div>
                    <div className="aclaraciones">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                        <label className="form-check-label" for="flexCheckChecked">
                            Notificaciones
                        </label>
                    </div>

                    <div className="formulario">
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </div>
            </form>
    </div>
</>

)
}

export default Contacto;