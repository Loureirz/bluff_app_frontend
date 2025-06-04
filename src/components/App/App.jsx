import { useState, useEffect } from 'react';
import "./App.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';
import Preloader from '../Preloader/preloader';
import Intro from '../Intro/Intro';
import BitcoinPrice from '../BitcoinPrice/BitcoinPrice';
import BitcoinPriceCards from '../BitcoinPriceCards/BitcoinPriceCards';

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
        <Header />
        <Intro />
        <BitcoinPriceCards />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
