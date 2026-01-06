import React from 'react';
import LayoutDetalhes from '../components/LayoutDetalhes';

const Trabalhista = () => {
  return (
    <LayoutDetalhes 
      titulo="Direito Trabalhista"
      frase="Assessoria estratégica nas relações de trabalho. Prevenção de passivos e defesa vigorosa em reclamações trabalhistas."
      textos={[
        "Atuamos de forma preventiva e contenciosa na defesa dos interesses de empresas e empregados de alto nível. Realizamos auditorias trabalhistas focadas na redução de riscos e elaboração de contratos complexos.",
        "No contencioso, defendemos seus direitos em reclamações trabalhistas, casos de acidente de trabalho, assédio moral e doenças ocupacionais, além de conduzir negociações coletivas estratégicas."
      ]}
      acoes={[
        "Auditoria e Prevenção",
        "Contratos e Remuneração",
        "Defesa em Reclamatórias",
        "Acidentes e Doenças",
        "Negociações Sindicais"
      ]}
    />
  );
};

export default Trabalhista;