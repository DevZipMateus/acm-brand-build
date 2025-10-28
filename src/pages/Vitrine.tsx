import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Vitrine = () => {
  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - ACM Carimbos</title>
        <meta name="description" content="Confira nossa demonstração de vitrine de produtos ACM Carimbos" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=acmcarimbos" 
            style={{ width: '100%', height: '800px', border: 'none' }}
            title="Vitrine de Produtos ACM Carimbos"
          />
        </main>
      </div>
    </>
  );
};

export default Vitrine;
