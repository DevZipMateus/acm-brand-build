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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Confira mais avaliações de nossos clientes
            </p>
            <a
              href="https://www.google.com/search?q=ACM+Carimbos+Campinas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Ver todas as avaliações
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
