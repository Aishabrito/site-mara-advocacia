import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';

const Consumidor = () => {
  const focos = ["Planos de Saúde", "Fraudes Bancárias", "Direito Aéreo", "Revisão Contratual", "Danos Morais"];

  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans pt-40 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Consumidor</h1>
            <p className="text-secondary text-lg font-medium italic border-l-2 border-secondary pl-6">
              "Defesa técnica em conflitos de consumo. Combate a práticas abusivas e busca pela reparação integral de danos."
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
              Protegemos seus direitos contra abusos do mercado. Nossa equipe é especializada em ações contra <strong>planos de saúde</strong>, instituições financeiras, companhias aéreas e construtoras.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              Buscamos a revisão de contratos desequilibrados, a exclusão de negativações indevidas e a justa indenização por falhas na prestação de serviços ou defeitos em produtos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
              {focos.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <ShieldCheck className="text-secondary/60" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Consumidor;