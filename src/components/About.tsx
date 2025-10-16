import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Sobre nós</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-8 sm:mb-12"></div>
          
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
              Com sede em Campinas, somos uma empresa familiar desde a fundação do empreendimento, em 1982. Por isso o cuidado e eficiência desde o primeiro contato até a entrega do carimbo e demais produtos, sempre foram e ainda são nossas prioridades.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
              ACM uma empresa certificada pelo Sebrae no Programa de Qualidade Total. Produzimos nossos carimbos com atenção aos mínimos detalhes durante a execução dos produtos.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              É com essa visão que esperamos atender nossos clientes cada vez melhor e fidelizá-los. Atuamos no mercado de fabricação de carimbos e venda de insumos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Missão</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Oferecer carimbos personalizados e de alta qualidade que atendam às necessidades criativas, profissionais e organizacionais dos nossos clientes, com agilidade, excelência e atenção aos detalhes.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Visão</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Ser referência nacional em soluções de carimbos personalizados, reconhecida pela inovação, confiabilidade e compromisso com a satisfação do cliente.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Valores</h3>
              <ul className="text-sm sm:text-base text-muted-foreground text-left space-y-2">
                <li>• Qualidade e precisão</li>
                <li>• Agilidade e compromisso</li>
                <li>• Personalização única</li>
                <li>• Sustentabilidade</li>
                <li>• Ética e respeito</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
