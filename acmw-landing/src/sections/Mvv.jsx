// Valores.jsx (componente principal)
import React from 'react';
import './Mvv.css';

const Mvv = () => {
  return (
    <section className="valores-section">
      <div className="valores-container">
        <h2 className="section-title">Conheça o que nos move</h2>
        
        <div className="cards-container">
          <div className="valor-card">
            <div className="card-icon">💪</div>
            <h3>VALORES</h3>
            <p>Promover a participação, valorização e liderança de mulheres e grupos minorizados na Computação</p>
          </div>
          
          <div className="valor-card">
            <div className="card-icon">🎯</div>
            <h3>MISSÃO</h3>
            <p>Diversidade e inclusão, colaboração, inovação, excelência, protagonismo feminino e impacto social na Computação.</p>
          </div>
          
          <div className="valor-card">
            <div className="card-icon">👁️</div>
            <h3>VISÃO</h3>
            <p>Ser referência nacional no incentivo à diversidade e inclusão na Computação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mvv;