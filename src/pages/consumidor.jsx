import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes'; // Ajuste aqui se a pasta for outra

const Consumidor = () => {
  return (
    <LayoutDetalhes 
      titulo="Consumidor"
      frase="Defesa técnica em conflitos de consumo. Combate a práticas abusivas e busca pela reparação integral de danos."
      textos={[
        "Protegemos seus direitos contra abusos do mercado. Nossa equipe é especializada em ações contra planos de saúde, instituições financeiras, companhias aéreas e construtoras.",
        "Buscamos a revisão de contratos desequilibrados, a exclusão de negativações indevidas e a justa indenização por falhas na prestação de serviços ou defeitos em produtos."
      ]}
      acoes={[
        "Planos de Saúde", 
        "Fraudes Bancárias", 
        "Direito Aéreo", 
        "Revisão Contratual", 
        "Danos Morais"
      ]}
    />
  );
};

export default Consumidor;