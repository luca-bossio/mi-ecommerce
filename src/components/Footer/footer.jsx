import React from "react";
import Cartwidget from "../Cartwidget";
import "../Footer/footer.css";
import 'react-router-dom'

export const Footer = () => {
    return (

<>

<footer id="pie">
<p> Contactanos por nuestras redes o por nuestro telefono!</p>
<ul>
  <li> <a target="_blank" href="https://www.instagram.com/lomas_colchoneria/">Instagram</a> </li>
  <li> <a target="_blank" href="https://www.facebook.com/Lo-Mas-Colchoneria-1372863349456536/">Facebook</a>
  </li>
  <li> Telefono: +54 9 1130284573</li>

</ul>
</footer>

</>
    )
}
export default Footer;