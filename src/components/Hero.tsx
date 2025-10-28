import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBackground from "@/assets/hero-bg.png";
import deliveryIcon from "@/assets/delivery-icon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/85" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 md:mb-8 lg:mb-10 animate-fade-in">
            <img 
              src={logo} 
              alt="ACM Carimbos - Marca, Personaliza e Identifica"
              className="h-20 sm:h-28 md:h-36 lg:h-44 xl:h-48 mx-auto"
            />
          </div>

          {/* Address and Parking Banner */}
          <div className="max-w-3xl mx-auto mb-6 md:mb-8 space-y-3 md:space-y-4 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 md:p-5">
              <div className="flex items-center justify-center gap-2 md:gap-3 text-secondary flex-wrap">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Rua Dr Quirino, 1044 Centro Campinas-SP</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 md:p-5">
              <div className="flex items-center justify-center gap-2 md:gap-3 text-secondary mb-1 md:mb-2 flex-wrap">
                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-secondary flex-shrink-0">
                  <span className="font-bold text-xs sm:text-sm md:text-base">E</span>
                </div>
                <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">TEMOS CONVÊNIO COM ESTACIONAMENTO</span>
              </div>
              <p className="text-center text-secondary text-xs sm:text-sm md:text-base">Rua Dr Quirino, 986</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 md:p-5">
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <img 
                  src={deliveryIcon} 
                  alt="Entrega Moto Boy"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain flex-shrink-0"
                />
                <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-secondary">ENTREGA MOTO BOY</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto px-4 leading-relaxed animate-fade-in">
            Empresa familiar de Campinas com mais de 40 anos de experiência, certificada pelo Sebrae no Programa de Qualidade Total
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2 sm:px-4 animate-fade-in max-w-2xl mx-auto">
            <a
              href="https://wa.me/5519982482393"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 min-h-[48px]"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <Phone className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <span className="whitespace-nowrap">(19) 98248-2393</span>
            </a>
            <a
              href="#produtos"
              className="bg-white/10 text-secondary-foreground border-2 border-white/60 px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-lg hover:bg-white hover:text-secondary transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg inline-flex items-center justify-center min-h-[48px]"
            >
              Nossos produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
