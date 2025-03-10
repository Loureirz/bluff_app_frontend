import { useState } from 'react';
import "./App.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';

function App() {

  return (
    <>
      <div className="page">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
