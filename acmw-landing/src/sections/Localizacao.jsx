import React from "react";
import "./Localizacao.css";
import ImageCarousel from "../components/ImageCarousel";

const Localizacao = () => {
    return (
        <section className="localizacao">
            <div className="localizacao-container">
                <div className="localizacao-content">
                    <div className="localizacao-text">
                        <h2 className="title">Nossa Localização</h2>
                        <p>Nossa sede esta localizada em Brasília-DF, na Universidade de Brasília, no Campus Darcy Ribeiro. O Campus Universitário 
                        Darcy Ribeiro, na Asa Norte, é o maior e mais tradicional da Universidade de Brasília</p>
                        <div className="localizacao-buttons">
                            <button className="btn-location-primary">
                                <a href="https://maps.app.goo.gl/F6GC53iQYrQ4cFMLA">Acesse a Localização</a>
                            </button>
                        </div>
                    </div>
                    <div className="App">
                        <ImageCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localizacao;