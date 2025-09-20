import React from "react";
import "./Hero.css";
import heroImage from "../assets/logo-hero.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Mais vozes, mais impacto, 
                            e mais futuro na Computação.</h1>
                        <div className="hero-buttons">
                            <button className="btn-primary">
                                <a href="https://women.acm.org/">Saiba Mais</a>
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="imagem-principal" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;