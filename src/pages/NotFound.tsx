import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="mb-4 sm:mb-6 text-6xl sm:text-7xl md:text-8xl font-bold text-primary">404</h1>
        <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-foreground">Página não encontrada</p>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
