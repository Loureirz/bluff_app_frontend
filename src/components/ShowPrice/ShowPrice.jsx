import "../ShowPrice/showprice.css"
import { useNavigate } from 'react-router-dom';

function ShowPrice() {

    const navigate = useNavigate();

    const irParaPreco = () => {
        navigate('/preco');
    }

    return(
        <section id="price" className="showprice">
            <div className="showprice__container">
                <h2 className="showprice__title">Você ainda acredita no dinheiro de papel?</h2>
                <p className="showprice__text">
                    O Bitcoin não é só um número — é um blefe contra um sistema falido. 
                    Acompanhe o preço e veja por si mesmo.
                </p>
                <button onClick={irParaPreco} className="showprice__button">
                    Ver preço agora →
                </button>
    </div>
        </section>
    );
}

export default ShowPrice;