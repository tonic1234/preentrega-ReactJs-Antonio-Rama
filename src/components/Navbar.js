import React from "react";
import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <nav>
           <a href="#">Inicio</a>
           <a href="#">Tienda</a>
           <a href="#">Hombres</a>
           <a href="#">Mujeres</a> 
           <CartWidget items= {5} />          
        </nav>
    )
}
export default Navbar