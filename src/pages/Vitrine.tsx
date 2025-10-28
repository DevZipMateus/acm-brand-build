import { useEffect } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  useEffect(() => {
    // Remove scroll from body when on Vitrine page
    document.body.style.overflow = "hidden";
    
    // Restore scroll when leaving the page
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Header fixo com 80px de altura */}
      <div className="h-20 w-full">
        <Header />
      </div>
      
      {/* Iframe ocupando o espaço restante: 100vh - 80px (header) - 63px (badge) */}
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
        className="w-full h-[calc(100vh-143px)] border-none"
        title="Vitrine ACM Carimbos"
      />
      
      {/* Espaço para o badge inferior com 63px de altura */}
      <div className="h-[63px] w-full" />
      
      <WhatsAppButton />
    </div>
  );
};

export default Vitrine;
