import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Thaís Santos",
      rating: 5,
      text: "Ótimo atendimento, produto de qualidade e rapidez! Fiz meu pedido em um dia, e em menos de 24 horas, eu recebi!",
      initials: "TS",
    },
    {
      name: "Carmen Stevanatto",
      rating: 5,
      text: "A Miriam, é muito atenciosa e simpática. Foi uma ótima experiência. Eu precisava do carimbo para o mesmo dia e ficou pronto em três horas. Tem estacionamento grátis. Ganharam uma freguesa.",
      initials: "CS",
    },
    {
      name: "Wagner Silva",
      rating: 5,
      text: "Excelente atendimento e qualidade nos produtos. Recomendo!",
      initials: "WS",
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 md:mb-4">O que nossos clientes dizem</h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-lg md:rounded-xl shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-primary/20">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs sm:text-sm md:text-base">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-xs sm:text-sm md:text-base">{testimonial.name}</p>
                    <div className="flex gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-6">
              Confira mais avaliações de nossos clientes
            </p>
            <a
              href="https://www.google.com/search?q=ACM+Carimbos+Campinas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-xs sm:text-sm md:text-base"
            >
              Ver todas as avaliações
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
