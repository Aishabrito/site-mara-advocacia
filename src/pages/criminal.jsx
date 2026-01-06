import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes';

const Criminal = () => {
  return (
    <LayoutDetalhes 
      titulo="Direito Criminal"
      frase="Defesa especializada em crimes de 'colarinho branco'. Atuação sigilosa em inquéritos policiais e processos judiciais."
      textos={[
        "Oferecemos defesa técnica artesanal em Direito Penal Econômico e Empresarial. Atuamos de forma estratégica em casos de crimes tributários, lavagem de dinheiro, crimes contra o sistema financeiro e fraudes corporativas.",
        "O acompanhamento é integral: desde a fase investigativa até a defesa em todas as instâncias judiciais e Tribunais Superiores, sempre priorizando o sigilo absoluto e a preservação da liberdade e imagem do cliente."
      ]}
      acoes={[
        "Crimes Tributários e Financeiros",
        "Lavagem de Dinheiro",
        "Acompanhamento em Inquéritos",
        "Tribunais Superiores",
        "Preservação de Sigilo"
      ]}
    />
  );
};

export default Criminal;