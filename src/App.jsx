import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Compliance from './pages/compliance';
import Criminal from './pages/criminal';
import GestaoCrise from './pages/gestaocrise';
import Trabalhista from './pages/trabalhista';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-primary text-gray-200 font-sans selection:bg-secondary selection:text-primary">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          {/* Rota Principal (Home) */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          } />

          {/* Rotas das Páginas Individuais */}
          <Route path="/atuacao/compliance" element={<Compliance />} />
          <Route path="/atuacao/criminal" element={<Criminal />} />
          <Route path="/atuacao/gestao-de-crise" element={<GestaoCrise />} />
          <Route path="/atuacao/trabalhista" element={<Trabalhista />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;