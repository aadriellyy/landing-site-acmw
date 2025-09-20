// Eventos.jsx
import React from 'react';
import './Eventos.css';
import lorena from '../assets/lorena.png';

const Eventos = () => {
  return (
    <section className="eventos-section" id="events">
      <div className="eventos-container">
        <h2 className="section-title">Próximos eventos</h2>
        
        <div className="eventos-cards-container">
          <div className="eventos-card">
            <div className="eventos-card-text">
                <h3>Abertura do ACM-W UnB</h3>
                <p>
                    💙 14h – Cerimônia de Abertura <br></br>
                    🎤 14h30 – Palestra “Mulheres na Cibersegurança” com 
                    Lorena Borges, analista do STF e especialista em segurança cibernética <br></br>
                    ☕ 15h – Integração e Coffee Break 
                </p> 
                <br></br><br></br>
                <button className="btn-primary-eventos">
                                <a href="https://www.instagram.com/p/DOyb6LnDlqX/?utm_source=ig_web_copy_link&igsh=NHA1Mm9hcmRqdmlr">Saiba Mais</a>
                </button>
            </div>
            <img src={lorena} alt="Lorena" className="card-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventos;
