import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes';

const Imoveis = () => {
  return (
    <LayoutDetalhes 
      titulo="Gestão de Imóveis"
      frase="Gestão patrimonial com segurança jurídica. Administração de locações e proteção do seu ativo imobiliário."
      textos={[
        "Transformamos a gestão de imóveis em um processo seguro e rentável. Cuidamos de toda a parte burocrática: desde a análise de fichas e elaboração de contratos blindados.",
        "Atuamos na cobrança de aluguéis, ações de despejo e na regularização de escrituras e registros, garantindo que seu patrimônio esteja sempre protegido e valorizado."
      ]}
      acoes={[
        "Gestão de Locações",
        "Análise Cadastral Rigorosa",
        "Cobrança e Despejo",
        "Regularização de Escrituras",
        "Blindagem Contratual"
      ]}
    />
  );
};

export default Imoveis;