import "./About.css";
import bit from "../../images/bitcoinnote.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <img className="about-image" src={bit} alt="Bitcoin note" />
          <div className="about-text-container">
            <h2 className="about-title">Sobre o Bluff</h2>
            <p className="about-text">
              O <span className="highlight">Bluff</span> é um projeto educacional que nasce com a missão de ser uma <span className="highlight">escola de ensino sobre Bitcoin</span> e soberania digital.
            </p>
            <p className="about-text">
              Acreditamos que o <span className="highlight">conhecimento financeiro descentralizado</span> é uma das principais ferramentas de liberdade do século XXI. Por isso, queremos tornar o aprendizado sobre Bitcoin acessível, prático e impactante — sem jargões e sem enrolação.
            </p>
            <p className="about-text">
              Este é só o começo. Nosso objetivo é criar uma comunidade de pessoas que não apenas compreendam o Bitcoin, mas saibam usá-lo com consciência, estratégia e propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
