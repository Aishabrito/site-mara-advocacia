import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Key } from 'lucide-react';

const Imoveis = () => {
  const servicos = ["Gestão de Locações", "Análise Cadastral Rigorosa", "Cobrança e Despejo", "Regularização de Escrituras", "Blindagem Contratual"];

  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans pt-40 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="inline-block p-4 bg-surface border border-white/5 mb-8">
              <Building2 className="text-secondary" size={48} strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Gestão de Imóveis</h1>
            <p className="text-secondary text-lg font-medium italic border-l-2 border-secondary pl-6">
              "Gestão patrimonial com segurança jurídica. Administração de locações e proteção do seu ativo imobiliário."
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
              Transformamos a gestão de imóveis em um processo seguro e rentável. Cuidamos de toda a parte burocrática: desde a análise de fichas e elaboração de <strong>contratos blindados</strong>.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              Atuamos na cobrança de aluguéis, ações de despejo e na regularização de escrituras e registros, garantindo que seu patrimônio esteja sempre protegido e valorizado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
              {servicos.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <Key className="text-secondary/60" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Imoveis;