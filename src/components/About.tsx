import { Target, Eye, Heart } from "lucide-react";
import storePhoto from "@/assets/store-photo.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Sobre nós</h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"></div>
          
          <div className="bg-card rounded-lg md:rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  Com sede em Campinas, somos uma empresa familiar desde a fundação do empreendimento, em 1982. Por isso o cuidado e eficiência desde o primeiro contato até a entrega do carimbo e demais produtos, sempre foram e ainda são nossas prioridades.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  ACM uma empresa certificada pelo Sebrae no Programa de Qualidade Total. Produzimos nossos carimbos com atenção aos mínimos detalhes durante a execução dos produtos.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                  É com essa visão que esperamos atender nossos clientes cada vez melhor e fidelizá-los. Atuamos no mercado de fabricação de carimbos e venda de insumos.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src={storePhoto} 
                  alt="Loja ACM Carimbos em Campinas"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
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
