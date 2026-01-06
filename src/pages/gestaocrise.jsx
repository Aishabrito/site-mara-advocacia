import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes';

const GestaoCrise = () => {
  return (
    <LayoutDetalhes 
      titulo="Gestão de Crise"
      frase="Mediação de conflitos societários e estratégias para contenção de danos à imagem. Resolução fora dos tribunais."
      textos={[
        "Em momentos críticos, a rapidez e a estratégia jurídica definem a sobrevivência da reputação. Atuamos na gestão legal de crises, coordenando a comunicação com stakeholders, imprensa e autoridades.",
        "Realizamos a mediação de disputas societárias complexas e negociações extrajudiciais sensíveis, buscando soluções que evitem o desgaste de processos longos e protejam o patrimônio da instituição."
      ]}
      acoes={[
        "Mediação Societária",
        "Comunicação com Autoridades",
        "Negociações Extrajudiciais",
        "Contenção de Danos",
        "Proteção de Patrimônio"
      ]}
    />
  );
};

export default GestaoCrise;