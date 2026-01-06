import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes';

const Militar = () => {
  return (
    <LayoutDetalhes 
      titulo="Direito Militar"
      frase="Assessoria jurídica especializada para as Forças Armadas e Auxiliares. Defesa de carreira e processos disciplinares."
      textos={[
        "Entendemos as particularidades da vida castrense. Oferecemos suporte jurídico completo para militares em processos de reforma, reintegração e revisão de pensões.",
        "Atuamos com rigor na defesa em Processos Administrativos Disciplinares (PAD) e Conselhos de Justificação, além da defesa criminal na Justiça Militar, garantindo o respeito às prerrogativas da farda."
      ]}
      acoes={[
        "Reforma e Reintegração",
        "Defesa em PAD e Sindicâncias",
        "Justiça Militar",
        "Promoções e Transferências",
        "Revisão de Pensões"
      ]}
    />
  );
};

export default Militar;