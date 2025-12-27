import React from 'react';
import { Shield, Scale, Users } from 'lucide-react';

const Services = () => {
  const stats = [
    { number: "+10", label: "Anos de Experiência" },
    { number: "267.966", label: "Inscrição OAB/RJ" },
    { number: "100%", label: "Foco Empresarial" }
  ];

  return (
    <>
      <div className="bg-surface border-y border-white/5 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
             <div key={idx} className="group cursor-default">
                <p className="text-5xl font-serif font-medium text-white mb-2 group-hover:text-secondary transition-colors duration-500">{stat.number}</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
             </div>
          ))}
        </div>
      </div>

      <section id="atuacao" className="py-32 bg-[#161616]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10">
            <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Áreas de Atuação</h2>
               <p className="text-gray-500 text-lg font-light">Estratégias personalizadas. Não aplicamos fórmulas prontas, desenhamos a defesa ideal para o seu cenário.</p>
            </div>
            <div className="hidden md:block pb-2">
               <span className="text-secondary text-sm font-bold uppercase tracking-widest">Excelência Técnica</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              Icon={Shield} 
              title="Compliance" 
              text="Implementação de programas de integridade robustos. Proteja a reputação da sua marca contra escândalos e multas." 
            />
            <ServiceCard 
              Icon={Scale} 
              title="Criminal" 
              text="Defesa especializada em crimes de 'colarinho branco'. Atuação sigilosa em inquéritos policiais e processos judiciais." 
              isSpecial={true} 
            />
            <ServiceCard 
              Icon={Users} 
              title="Gestão de Crise" 
              text="Mediação de conflitos societários e estratégias para contenção de danos à imagem. Resolução fora dos tribunais." 
            />
          </div>
        </div>
      </section>
    </>
  );
};

// Componente interno

const ServiceCard = ({ Icon, title, text, isSpecial }) => {
  return (
    <div className={`group bg-surface p-12 hover:bg-[#1E1E1E] transition-all duration-500 cursor-pointer border border-transparent hover:border-white/5 ${isSpecial ? 'relative overflow-hidden' : ''}`}>
      {isSpecial && <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-secondary/10"></div>}
      
      {/* Renderiza o ícone como componente */}
      <Icon className="text-secondary mb-8 group-hover:scale-110 transition-transform duration-500" size={48} strokeWidth={1} />
      
      <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{text}</p>
      <span className="inline-block border-b border-secondary pb-1 text-secondary text-xs font-bold uppercase tracking-widest">Detalhes</span>
    </div>
  );
};

export default Services;