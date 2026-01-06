import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, ArrowLeft, Briefcase } from 'lucide-react';

const Trabalhista = () => {
  const especialidades = [
    "Auditoria e Prevenção de Riscos",
    "Contratos Complexos e Remuneração",
    "Defesa em Reclamações Trabalhistas",
    "Acidentes e Doenças Ocupacionais",
    "Negociações Coletivas e Sindicais"
  ];

  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans selection:bg-secondary selection:text-primary pt-40 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Navegação de Volta com Animação */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Coluna de Identidade Visual */}
          <div className="lg:col-span-5">
            <div className="inline-block p-4 bg-surface border border-white/5 mb-8">
              <Gavel className="text-secondary" size={48} strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Direito Trabalhista</h1>
            <p className="text-secondary text-lg font-medium leading-relaxed italic border-l-2 border-secondary pl-6">
              "Assessoria estratégica nas relações de trabalho. Prevenção de passivos e defesa vigorosa em reclamações trabalhistas."
            </p>
          </div>

          {/* Coluna de Conteúdo Técnico */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Atuamos de forma preventiva e contenciosa na defesa dos interesses de <strong>empresas e empregados de alto nível</strong>. 
                Realizamos auditorias trabalhistas focadas na redução de riscos, elaboração de contratos complexos e pacotes de remuneração.
              </p>

              <p className="text-gray-400 text-xl leading-relaxed font-light">
                No contencioso, defendemos seus direitos em reclamações trabalhistas, casos de acidente de trabalho, assédio moral e 
                doenças ocupacionais, além de conduzir <strong>negociações coletivas estratégicas</strong> com sindicatos.
              </p>

              {/* Grid de Serviços Específicos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
                {especialidades.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Briefcase className="text-secondary/60" size={18} />
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

export default Trabalhista;