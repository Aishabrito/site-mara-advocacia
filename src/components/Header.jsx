import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logoHeader from '../assets/logo-header.png';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = ['Início', 'Sobre', 'Atuação', 'Método', 'Contato'];

  // Link direto do seu WhatsApp
  const whatsappLink = "https://wa.me/message/WOS4P7PPUHEYB1";

  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-24 flex justify-between items-center">
        
        {/* Logo */}
        <div className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity">
          <img src={logoHeader} alt="Mara Abreu Logo" className="h-full w-auto object-contain brightness-0 invert" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`} 
              className="font-sans hover:text-secondary hover:scale-105 transition-all duration-300 py-2 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Botão WhatsApp Desktop */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 border border-secondary/30 text-secondary px-6 py-3 rounded-sm text-xs font-bold hover:bg-secondary hover:text-primary transition-all uppercase tracking-wider duration-500"
        >
          <Phone size={14} /> Consultoria
        </a>

        {/* Botão Menu Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      {isMenuOpen && (
        <nav className="md:hidden bg-surface border-t border-white/10 p-8 flex flex-col space-y-6 absolute w-full h-screen z-50">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-secondary italic"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;