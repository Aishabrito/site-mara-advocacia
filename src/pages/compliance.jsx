import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes'; //molde componentizado

const Compliance = () => {
  return (
    <LayoutDetalhes 
      titulo="Compliance"
      frase="Implementação de programas de integridade robustos. Proteja a reputação da sua marca contra escândalos e multas."
      textos={[
        "Nossa atuação em Compliance vai além da conformidade normativa; criamos uma cultura de integridade. Desenvolvemos Códigos de Conduta e Políticas Internas personalizados, realizamos Due Diligence de terceiros e implementamos canais de denúncia efetivos.",
        "Atuamos também na adequação à LGPD (Lei Geral de Proteção de Dados) e treinamentos corporativos, mitigando riscos de corrupção, fraudes e passivos regulatórios que podem comprometer a continuidade do seu negócio."
      ]}
      acoes={[
        "Códigos de Conduta",
        "Due Diligence de Terceiros",
        "Canais de Denúncia",
        "Adequação à LGPD",
        "Treinamentos Corporativos"
      ]}
    />
  );
};

export default Compliance;