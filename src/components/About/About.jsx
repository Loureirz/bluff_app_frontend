import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">Sobre Mim</h2>
        <p className="about-text">
          Olá! Meu nome é <span className="highlight">Yuri Loureiro</span>, sou um <span className="highlight">Software Engineer</span> apaixonado por tecnologia e pelo potencial revolucionário do <span className="highlight">Bitcoin</span>.
        </p>
        <p className="about-text">
          Meu objetivo é divulgar conhecimento sobre o Bitcoin e explicar por que ele é uma <span className="highlight">revolução financeira</span> que poucos enxergam. Quero ajudar mais pessoas a entenderem sua importância para a liberdade e descentralização do dinheiro.
        </p>
      </div>
    </section>
  );
}

export default About;
