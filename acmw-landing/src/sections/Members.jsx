import React from "react";
import "./Members.css";
import Maristela from "../assets/maristela.png";
import Aleteia from "../assets/aleteia.png";
import MariaEmilia from "../assets/emilia.png";
import Adrielly from "../assets/adrielly.png";
import Laryssa from "../assets/laryssa.png";

export default function ProgramsSection() {
  const members = [
    {
      title: "Maristela Terto de Holanda",
      description:
        "Organizadora Geral.\nProfessora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Maristela,  
      refName: "Entre em Contato"
    },
    {
      title: "Maria Emília Walter",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: MariaEmilia,
      refName: "Saiba Mais"
    },
    {
      title: "Aletéia Araújo",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Aleteia,
      refName: "Saiba Mais"
    },
    {
      title: "Carla Maria Chaves e Cavalcante Koike",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Laryssa,
      refName: "Saiba Mais"
    },
    {
      title: "Carla Maria Chaves e Cavalcante Koike",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Adrielly,
      refName: "Saiba Mais"
    },
  ];

  return (
    <section className="members" id="members">
      <h2 className="members-title">Conheça a Organização</h2>
      <p className="members-subtitle">
        Conheça a equipe responsável pela organização do evento.
      </p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="member-card-content">
              <h3>{member.title}</h3>
              <p style={{whiteSpace: 'pre-line'}}>{member.description}</p>
            </div>
            <div className="member-image-section">
              <img src={member.image} alt={member.title} />
              <button className="btn">
                <a href="https://cic.unb.br/">{member.refName}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}