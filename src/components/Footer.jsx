import React from 'react';
import logoHeader from '../assets/logo-header.png';

const Footer = () => {
  // Link direto do seu WhatsApp
  const whatsappLink = "https://wa.me/message/WOS4P7PPUHEYB1";
const ContactItem = ({ text }) => (
  <p className="flex items-center gap-3 font-sans">
    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> {text}
  </p>
);
  return (
    <footer id="contato" className="bg-primary border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
           
           {/* Coluna 1: Logo e Descrição */}
           <div className="md:w-1/3">
              <div className="h-16 w-auto mb-8 opacity-90">
                <img src={logoHeader} alt="Logo" className="h-full object-contain brightness-0 invert" />
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                Escritório boutique focado em resolver problemas complexos com discrição e excelência técnica.
              </p>
           </div>
           
           {/* Coluna 2: Contatos (Atualizados) */}
           <div className="md:w-1/3">
              <h4 className="text-white font-serif text-xl mb-8">Contato Direto</h4>
              <div className="space-y-4 text-gray-400 font-light">
                 {/* E-mail Atualizado */}
                 <ContactItem text="advmaraabreu@gmail.com" />
                 {/* Telefone Atualizado */}
                 <ContactItem text="(21) 96675-6441" />
                 <ContactItem text="@advmaraabreu" />
                 <ContactItem text="Rio de Janeiro - RJ" />
              </div>
           </div>

           {/* Coluna 3: Botão de Ação */}
           <div className="md:w-1/3 text-right">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-primary font-bold py-4 px-12 rounded-sm hover:bg-white transition-colors uppercase tracking-widest shadow-xl"
              >
                Iniciar Atendimento
              </a>
           </div>
        </div>
        
        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-xs tracking-wider">
           <p>© 2025 Mara Abreu Advocacia. Todos os direitos reservados.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-secondary transition-colors">Termos</a>
           </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;