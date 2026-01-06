import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Globais
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

// Páginas de Detalhes
import Compliance from './pages/compliance';
import Criminal from './pages/criminal';
import GestaoCrise from './pages/gestaocrise';
import Trabalhista from './pages/trabalhista';
import Consumidor from './pages/consumidor';
import Militar from './pages/militar';
import Imoveis from './pages/imoveis';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router> <ScrollToTop /> 
      <div className="min-h-screen bg-primary text-gray-200 font-sans selection:bg-secondary selection:text-primary">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          } />

          {/* Rotas das Áreas de Atuação */}
          <Route path="/atuacao/compliance" element={<Compliance />} />
          <Route path="/atuacao/criminal" element={<Criminal />} />
          <Route path="/atuacao/gestao-de-crise" element={<GestaoCrise />} />
          <Route path="/atuacao/trabalhista" element={<Trabalhista />} />
          <Route path="/atuacao/consumidor" element={<Consumidor />} />
          <Route path="/atuacao/militar" element={<Militar />} />
          <Route path="/atuacao/administracao-de-imoveis" element={<Imoveis />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;