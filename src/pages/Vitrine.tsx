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
    <div className="fixed inset-0 bg-background flex flex-col">
      <Header />
      <div className="flex-1 relative overflow-hidden">
        <iframe 
          src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
          className="absolute inset-0 w-full h-full border-none"
          title="Vitrine ACM Carimbos"
          allow="payment"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
        />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Vitrine;
