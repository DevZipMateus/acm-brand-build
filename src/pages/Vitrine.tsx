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
    <div className="fixed inset-0 bg-background">
      <Header />
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
        className="w-full h-[calc(100vh-5rem)] mt-20 border-none"
        title="Vitrine ACM Carimbos"
      />
      <WhatsAppButton />
    </div>
  );
};

export default Vitrine;
