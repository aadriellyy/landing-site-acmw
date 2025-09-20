import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="header-right">
                    <div className="logo-container">
                        <img src={logo} alt="ACM-W" className="header-logo"/>

                    </div>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#mvv">Sobre</a></li>
                    <li><a href="/membros">Membros</a></li>
                    <li><a href="#events">Eventos</a></li>
                    <li><a href="mailto:maristela.holanda@gmail.com">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;