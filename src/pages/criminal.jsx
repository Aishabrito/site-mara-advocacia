import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft, ShieldCheck } from 'lucide-react';

const Criminal = () => {
  const pilaresDefesa = [
    "Crimes Tributários e Financeiros",
    "Lavagem de Dinheiro",
    "Acompanhamento em Inquéritos e PICs",
    "Atuação em Tribunais Superiores",
    "Preservação de Imagem e Sigilo"
  ];

  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans selection:bg-secondary selection:text-primary pt-40 pb-20">
      <div className="container mx-auto px-6">
        
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="inline-block p-4 bg-surface border border-white/5 mb-8">
              <Scale className="text-secondary" size={48} strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Direito Criminal</h1>
            <p className="text-secondary text-lg font-medium leading-relaxed italic border-l-2 border-secondary pl-6">
              "Defesa especializada em crimes de 'colarinho branco'. Atuação sigilosa em inquéritos policiais e processos judiciais."
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-8">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Oferecemos defesa técnica artesanal em <strong>Direito Penal Econômico e Empresarial</strong>. 
                Atuamos de forma estratégica em casos de crimes tributários, lavagem de dinheiro, 
                crimes contra o sistema financeiro e fraudes corporativas.
              </p>

              <p className="text-gray-400 text-xl leading-relaxed font-light">
                O acompanhamento é integral: desde a fase investigativa até a defesa em todas as instâncias judiciais e 
                <strong> Tribunais Superiores</strong>, sempre priorizando o sigilo absoluto e a preservação da 
                liberdade e imagem do cliente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
                {pilaresDefesa.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ShieldCheck className="text-secondary/60" size={18} />
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

export default Criminal;