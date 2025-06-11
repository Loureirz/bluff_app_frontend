import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./App.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';
import Preloader from '../Preloader/preloader';
import Intro from '../Intro/Intro';
import ShowPrice from '../ShowPrice/ShowPrice';
import BitcoinPrice from '../BitcoinPrice/BitcoinPrice';
import UnderConstruction from '../Register/Register';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? <Preloader /> : (
    <>
      <div className="page">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
              <Intro />
              <ShowPrice />
              <About />
              </>
            } />
            <Route path="/preco" element={<BitcoinPrice />} />
            <Route path="/inscrever-se" element={<UnderConstruction />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
