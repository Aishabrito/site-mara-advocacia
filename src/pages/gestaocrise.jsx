import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, Zap } from 'lucide-react';

const GestaoCrise = () => {
  const acoesEstrategicas = [
    "Mediação de Disputas Societárias",
    "Comunicação com Autoridades e Imprensa",
    "Negociações Extrajudiciais Sensíveis",
    "Contenção de Danos à Reputação",
    "Proteção de Patrimônio Institucional"
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
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 text-balance">Gestão de Crise</h1>
            <p className="text-secondary text-lg font-medium leading-relaxed italic border-l-2 border-secondary pl-6">
              "Mediação de conflitos societários e estratégias para contenção de danos à imagem. Resolução fora dos tribunais."
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-8">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Em momentos críticos, a rapidez e a <strong>estratégia jurídica</strong> definem a sobrevivência da reputação. 
                Atuamos na gestão legal de crises, coordenando a comunicação com stakeholders, imprensa e autoridades.
              </p>

              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Realizamos a mediação de disputas societárias complexas e negociações extrajudiciais sensíveis, 
                buscando soluções que evitem o desgaste de processos longos e protejam o patrimônio e o nome da instituição.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
                {acoesEstrategicas.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="text-secondary/60" size={18} />
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

export default GestaoCrise;