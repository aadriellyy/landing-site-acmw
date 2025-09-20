import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Dados.css";

const AnimatedCard = ({ start, end, text, suffix, prefix }) => {
  // Hook que detecta quando o card entra na tela
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="card">
      <h2>
        {inView ? <CountUp prefix={prefix} start={start} end={end} duration={2} suffix={suffix} /> : "0%"}
      </h2>
      <p>{text}</p>
    </div>
  );
};

const Dados = () => {
  return (
    <section className="cards-section">
      <AnimatedCard start={20} end={1} text="Capítulo Acadêmico da ACM-W no Brasil" suffix={"º"} />
      <AnimatedCard end={25} text="Pessoas impactadas pela iniciativa" prefix={"+"} />
      <AnimatedCard end={11} text="Student Chapters na América Latina" />
    </section>
  );
};

export default Dados;
