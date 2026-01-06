import React from 'react';
import { Link } from 'react-router-dom';
import { Medal, ArrowLeft, Award } from 'lucide-react';

const Militar = () => {
  const expertises = ["Reforma e Reintegração", "Defesa em PAD e Sindicâncias", "Justiça Militar", "Promoções e Transferências", "Revisão de Pensões"];

  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans pt-40 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Direito Militar</h1>
            <p className="text-secondary text-lg font-medium italic border-l-2 border-secondary pl-6">
              "Assessoria jurídica especializada para as Forças Armadas e Auxiliares. Defesa de carreira e processos disciplinares."
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
              Entendemos as particularidades da <strong>vida castrense</strong>. Oferecemos suporte jurídico completo para militares em processos de reforma, reintegração e revisão de pensões.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              Atuamos com rigor na defesa em Processos Administrativos Disciplinares (PAD) e Conselhos de Justificação, além da defesa criminal na Justiça Militar, garantindo o respeito às prerrogativas da farda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
              {expertises.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <Award className="text-secondary/60" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Militar;