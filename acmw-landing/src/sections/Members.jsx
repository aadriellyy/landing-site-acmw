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
      title: "Dra. Maristela Terto de Holanda",
      description:
        "Graduada em Engenharia Elétrica pela UFRN, com mestrado pela UnB e doutorado pela UFRN. Professora da Universidade de Brasília desde 2009, com pós-doutorado em Análise de Dados Educacionais. Foi Visiting Associate Professor na Texas A&M University em 2023. Pesquisadora em Banco de Dados e Educação em Computação. É co-fundadora e coordenadora do projeto Meninas.comp, iniciado em 2010, com o objetivo de aumentar a presença feminina na área de computação.",
      image: Maristela,  
      refName: "Entre em Contato"
    },
    {
      title: "Dra. Maria Emília Walter",
      description:
        "Graduada em Matemática pela Universidade de Brasília (1980), mestrado em Matemática pela Universidade de Brasília (1986) e doutorado em Ciência da Computação pela Universidade Estadual de Campinas (1999). Tem experiência na área de Ciência da Computação, com ênfase em Bioinformática e Biologia Computacional. É co-fundadora e coordenadora do projeto Meninas.comp, iniciado em 2010, com o objetivo de aumentar a presença feminina na área de computação.",
      image: MariaEmilia,
      refName: "Saiba Mais"
    },
    {
      title: "Dra. Aletéia Araújo",
      description:
        "Graduada no curso de Bacharelado em Ciências da Computação pela Universidade Federal do Pará (1997), mestrado em Ciências da Computação e Matemática Computacional pela Universidade de São Paulo (1999), doutorado em Informática pela Pontifícia Universidade Católica do Rio de Janeiro (2008). Ano passado (2024) fez pós-doutorado na University of Melbourne na Austrália. Ela é cofundadora e coordenadora do projeto de extensão Meninas.comp da UnB desde 2010. Atualmente, é coordenadora do Programa Nacional da SBC – Meninas Digitais.",
      image: Aleteia,
      refName: "Saiba Mais"
    },
    {
      title: "Laryssa Ferreira",
      description:
        "Graduanda em Engenharia de Computação pela Universidade de Brasília (UnB). Foi selecionada por programas internacionais (Grace Hopper Celebration, Brazil at Silycon Valley, Huawei Seeds e The World Bank), além de coordenar iniciativas voluntárias de inclusão, como a Maratona Feminina de Programação e competições femininas de programação do Meninas.Comp. É apaixonada por liderar projetos, arte e aprender idiomas! ",
      image: Laryssa,
      refName: "Saiba Mais"
    },
    {
      title: "Adrielly Lima",
      description:
        "Graduanda em Ciência da Computação pela Universidade de Brasília (UnB). Estagiária no Tribunal Superior Eleitoral, desenvolvedora e coordenadora na Empresa Júnior de Computação da UnB, também faz parte de iniciativas voluntárias para apoiar mulheres na computação, sendo uma integrante brilhante da equipe Meninas.Comp colaborando na criação de Maratonas de Programação e matériais didáticos para as escolas públicas, além de monitora do curso meninas programadoras da USP. É apaixonada por computação, viagens, romances épicos e natureza!",
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