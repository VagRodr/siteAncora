// Exemplo no App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Servicespage/Services';
import Salvatagem from './pages/Salvatagem/Salvatagem';
import SocialLinks from './components/SocialLinks/SocialLinks';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/salvatagem" element={<Salvatagem />} />
        </Routes>
      </main>
      <Footer />
      <SocialLinks />

    </>
  );
}

export default App;
