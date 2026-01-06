import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

/**
 * Componente de Layout Base (Abstração de UI).
 * Centraliza a estrutura visual das áreas de atuação para garantir consistência de design,
 * facilitar a manutenção e evitar a repetição de código (Princípio DRY).
 */
const LayoutDetalhes = ({ titulo, frase, textos, acoes }) => {
  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans selection:bg-secondary selection:text-primary pt-40 pb-20">
      <div className="container mx-auto px-6">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight text-balance mb-8">
              {titulo}
            </h1>
            <p className="text-secondary text-lg font-medium leading-relaxed italic border-l-2 border-secondary pl-6">
              "{frase}"
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-8">
              {textos.map((paragrafo, idx) => (
                <p key={idx} className="text-gray-400 text-xl leading-relaxed font-light">
                  {paragrafo}
                </p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
                {acoes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group/item">
                    <Zap className="text-secondary/60 group-hover/item:text-secondary transition-colors" size={18} />
                    <span className="text-sm text-gray-300 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LayoutDetalhes;