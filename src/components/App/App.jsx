import { useState, useEffect } from 'react';
import "./App.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';
import Preloader from '../Preloader/preloader';
import BitcoinPrice from '../BitcoinPrice/BitcoinPrice';

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
        <BitcoinPrice />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
