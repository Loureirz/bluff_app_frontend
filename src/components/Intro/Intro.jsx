import "./Intro.css";

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-container">
        <h1 className="intro-title">Ouse dar o Bluff. Desafie o sistema com Bitcoin.</h1>
        <p className="intro-text">
          O <span className="highlight">₿luff</span> é um projeto dedicado a expandir a consciência sobre o <span className="highlight">Bitcoin</span> como uma alternativa real ao sistema financeiro tradicional.
        </p>
        <p className="intro-text">
          Nosso objetivo é compartilhar conhecimento e incentivar a <span className="highlight">soberania individual</span>, promovendo uma cultura de <span className="highlight">liberdade econômica</span> e descentralização.
        </p>
      </div>
    </section>
  );
}

export default Intro;
