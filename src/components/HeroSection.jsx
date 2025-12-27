import React from 'react';
import logoHero from '../assets/logo-hero.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden bg-primary">
      
      {/* --- FUNDO (LIMPO) --- */}
      {/* Reduzi a opacidade de bg-secondary/5 para bg-secondary/2 (quase invisível) e removi o borrão escuro de baixo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/2 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* LADO ESQUERDO: TEXTO */}
        <div className="md:w-1/2 text-left space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Advocacia de Elite</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Segurança Jurídica <br/>
            <span className="italic text-secondary">Absoluta.</span>
          </h1>
          
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg pl-6 border-l border-secondary/50">
            Especialista em blindagem patrimonial, Compliance e Defesa Criminal Estratégica. A proteção que o seu negócio exige.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            {/* Reduzi a sombra do hover de 30px para 15px (mais discreto) */}
            <a href="#contato" className="bg-secondary text-primary font-bold py-4 px-10 rounded-sm hover:bg-white transition-all duration-300 text-center uppercase tracking-widest hover:shadow-[0_0_15px_rgba(197,160,89,0.4)]">
              Agendar Reunião
            </a>
            <a href="#atuacao" className="group flex items-center justify-center gap-2 text-white font-bold py-4 px-10 rounded-sm hover:text-secondary transition-all duration-300 uppercase tracking-widest">
              Conhecer Áreas <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* LADO DIREITO: IMAGEM */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Reduzi a altura do gradiente preto na base da imagem (de h-40 para h-24) */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-20 h-24 bottom-0 top-auto"></div>
          
          <img 
            src={logoHero} 
            alt="Balança Dourada" 
            // Removi 'drop-shadow-2xl' para tirar a sombra pesada em volta da imagem
            className="relative z-10 w-full max-w-[550px] h-auto object-contain hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;