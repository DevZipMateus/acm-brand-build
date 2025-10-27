import { Stamp, Calculator, Calendar, Package } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Stamp,
      title: "Carimbos personalizados",
      description: "Carimbos de todos os tipos e medidas, confeccionados com precisão e qualidade superior para atender suas necessidades específicas.",
    },
    {
      icon: Package,
      title: "Estojos auto entintados",
      description: "Práticos e modernos, nossos estojos auto entintados garantem impressões limpas e uniformes sem necessidade de almofadas externas.",
    },
    {
      icon: Calculator,
      title: "Numeradores e contadores",
      description: "Equipamentos robustos e precisos para controle sequencial de documentos e processos administrativos.",
    },
    {
      icon: Calendar,
      title: "Datadores profissionais",
      description: "Datadores de alta qualidade para marcação precisa de datas em documentos oficiais e comerciais.",
    },
  ];

  const supplies = [
    "Tintas especiais de alta durabilidade",
    "Almofadas de reposição",
    "Refis para carimbos auto entintados",
    "Placas de identificação",
    "Chancelas personalizadas",
  ];

  return (
    <section id="produtos" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Nossos produtos</h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"></div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg md:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3">{product.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-lg md:rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center">Insumos e complementos</h3>
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {supplies.map((supply, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm md:text-base text-foreground">{supply}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-border text-center">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-6">
                Todos os nossos produtos são confeccionados com atenção aos mínimos detalhes, garantindo qualidade e durabilidade excepcionais.
              </p>
              <a
                href="https://wa.me/5519982482393"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg text-xs sm:text-sm md:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
