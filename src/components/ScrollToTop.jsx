import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faz a página subir para o topo (coordenada 0,0) instantaneamente
    window.scrollTo(0, 0);
  }, [pathname]); // Roda sempre que o caminho da URL mudar

  return null;
};

export default ScrollToTop;