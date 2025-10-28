import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Demonstração de Vitrine
          </h1>
          <div className="w-full">
            <iframe 
              src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
              style={{ width: '100%', height: '800px', border: 'none' }}
              title="Vitrine ACM Carimbos"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Vitrine;
