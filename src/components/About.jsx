import React from 'react';
import { Clock, Shield } from 'lucide-react';
import fotoMara from '../assets/foto-mara.jpeg';

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
             <div className="relative p-4 border border-white/10 rounded-sm bg-surface">
                <div className="w-full h-[650px] bg-accent overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
                    <img src={fotoMara} alt="Mara Abreu" className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-[2s]" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 border-r-2 border-b-2 border-secondary"></div>
             </div>
          </div>
          
          <div className="lg:w-1/2 text-left">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Visão de <span className="text-secondary italic">Negócios</span> <br />
              no Direito.
            </h2>
            <div className="space-y-8 text-gray-400 leading-relaxed text-lg font-light">
              <p>Minha atuação rompe com a advocacia tradicional. Com formação tripla em <strong className="text-white font-normal">Direito, Gestão e Criminologia</strong>, eu ofereço uma visão 360º dos riscos que envolvem o seu patrimônio.</p>
              <p>Não vendo apenas processos; vendo a tranquilidade de saber que sua empresa está blindada contra passivos ocultos e crimes corporativos.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6">
               <InfoCard icon={Clock} title="Agilidade" text="Respostas rápidas para momentos críticos." />
               <InfoCard icon={Shield} title="Prevenção" text="Foco total em evitar o litígio." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const InfoCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="bg-surface p-6 border-l-2 border-secondary hover:bg-white/5 transition-colors">
      {/* O componente Icon é renderizado aqui */}
      <Icon className="text-secondary mb-3" size={24}/>
      
      <h4 className="text-white font-serif text-xl mb-1">{title}</h4>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default About;