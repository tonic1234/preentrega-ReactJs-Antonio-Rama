import React from "react";
import ItemListContainer from "./ItemListContainer";

function Header() {
    return (
        <header>
            <img src="/img/logo.svg"/>
            <ItemListContainer greeting = "Hola usuario"/>
        </header>

    )
}
export default Header

