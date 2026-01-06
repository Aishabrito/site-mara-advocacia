import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Compliance = () => {
  // Lista de tópicos 
  const topicos = [
    "Códigos de Conduta e Políticas Internas",
    "Due Diligence de Terceiros",
    "Canais de Denúncia Efetivos",
    "Adequação à LGPD",
    "Treinamentos Corporativos"
  ];

  return (
    <main className="min-h-screen bg-primary text-gray-200 font-sans selection:bg-secondary selection:text-primary pt-40 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Navegação de Volta */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-secondary hover:brightness-125 transition-all mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar para o Início</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Coluna da Esquerda: Título*/}
          <div className="lg:col-span-5">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Compliance</h1>
            <p className="text-secondary text-lg font-medium leading-relaxed italic border-l-2 border-secondary pl-6">
              "Implementação de programas de integridade robustos. Proteja a reputação da sua marca contra escândalos e multas."
            </p>
          </div>

          {/* Coluna da Direita: Texto de Detalhes */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Nossa atuação em Compliance vai além da conformidade normativa; criamos uma cultura de integridade. 
                Desenvolvemos Códigos de Conduta e Políticas Internas personalizados, realizamos 
                <strong> Due Diligence</strong> de terceiros e implementamos canais de denúncia efetivos.
              </p>

              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Atuamos também na adequação à <strong>LGPD (Lei Geral de Proteção de Dados)</strong> e treinamentos corporativos, 
                mitigando riscos de corrupção, fraudes e passivos regulatórios que podem comprometer a continuidade do seu negócio.
              </p>

              {/* Lista de Atividades */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-white/10">
                {topicos.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary/60" size={18} />
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

export default Compliance;