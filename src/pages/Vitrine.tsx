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
    <>
      <div className="h-screen bg-background overflow-hidden flex flex-col">
        <Header />
        <div className="flex-1 w-full max-w-full overflow-hidden">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
            className="w-full h-full max-w-full border-none"
            title="Vitrine ACM Carimbos"
            allow="payment"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-popups-to-escape-sandbox"
          />
        </div>
        <div className="h-16 shrink-0" />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Vitrine;
