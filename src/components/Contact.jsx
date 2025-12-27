import React from 'react';

const Contact = () => {
  return (
    <section id="metodo" className="py-24 bg-[#E5E5E5] text-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Metodologia</span>
           <h2 className="text-4xl md:text-5xl font-serif mb-6">Como atuamos no seu caso</h2>
           <p className="text-gray-600">Transparência radical. Você acompanha cada passo da estratégia desenhada para a sua proteção.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
              { title: "Diagnóstico", desc: "Análise profunda dos riscos e vulnerabilidades." },
              { title: "Estratégia", desc: "Desenho da tese jurídica e plano de ação." },
              { title: "Execução", desc: "Atuação combativa e técnica imediata." },
              { title: "Monitoramento", desc: "Acompanhamento contínuo e relatórios." }
           ].map((step, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                 <span className="text-6xl font-serif text-secondary/20 font-bold mb-4 block">{index + 1}</span>
                 <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                 <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;