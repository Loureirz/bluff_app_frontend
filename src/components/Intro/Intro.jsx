import "./Intro.css";
import freedom from "../../images/freedom.png"

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-top">
    <div className="intro-left">
      <div className="intro-texts">
        <h1 className="intro-title">Ouse dar o <span className="intro-highlight">Bluff</span>.</h1>
        <h2 className="intro-subtitle">Desafie o sistema com <span className="intro-highlight">Bitcoin</span>.</h2>
      </div>
    </div>
    <div className="intro-right">
      <img
        src={freedom}
        alt="Ilustração Bitcoin"
        className="intro-image"
      />
    </div>
  </div>

      <div className="intro-bottom">
        <p className="intro-text">
          O <span className="intro-highlight">Bluff</span> é mais do que um projeto — é uma
          declaração de resistência ao modelo financeiro centralizado que domina o mundo. Nascido
          da convicção de que o <span className="intro-highlight">Bitcoin</span> representa uma
          ruptura radical com o sistema atual, o bluff busca despertar a consciência sobre o valor
          da soberania monetária em tempos de manipulação econômica.
        </p>

        <p className="intro-text">
          Acreditamos que entender o <span className="intro-highlight">Bitcoin</span> vai além da
          tecnologia: é uma jornada intelectual, ética e filosófica rumo à{" "}
          <span className="intro-highlight">liberdade individual</span>. Nosso objetivo é construir
          uma base sólida de conhecimento, estimular o pensamento crítico e oferecer ferramentas
          para que cada pessoa possa assumir o controle do seu dinheiro — e, consequentemente, da
          sua vida.
        </p>

        <p className="intro-text">
          Por meio de conteúdo educativo, reflexões provocativas e uma linguagem acessível, o
          Bluff convida você a olhar para além da superfície, questionar o status quo e explorar um
          novo paradigma de <span className="intro-highlight">autonomia financeira</span> e
          descentralização real. Aqui, provocamos, educamos e inspiramos. Porque ousar entender é o
          primeiro passo para ousar mudar.
        </p>

        <p className="intro-text">
          Junte-se a nós nessa jornada — e descubra como o{" "}
          <span className="intro-highlight">Bluff</span> pode ser o seu primeiro passo rumo à
          liberdade.
        </p>
      </div>
    </section>
  );
}

export default Intro;
