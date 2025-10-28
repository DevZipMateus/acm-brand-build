import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <Header />
      <main className="pt-20 h-full">
        <iframe 
          src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
          className="w-full h-[calc(100vh-5rem)] border-none"
          title="Vitrine ACM Carimbos"
        />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Vitrine;
