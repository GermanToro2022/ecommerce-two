import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Mi marca</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Categoria 1</a>
                    </li>
                    <a className="nav__link" href="#">Categoria 2</a>
                </ul>
                <li>
                    <a className="nav__link" href="#">Carrito</a>
                </li>
            </nav>
        </div>
    );
}

export default NavBar;