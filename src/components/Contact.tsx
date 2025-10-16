import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Fale conosco</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Entre em contato conosco para solicitar orçamentos, tirar dúvidas ou conhecer melhor nossos produtos e serviços.
              </p>

              <div className="space-y-6">
                <a
                  href="https://wa.me/5519982482393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone / WhatsApp</p>
                    <p className="text-muted-foreground">(19) 98248-2393</p>
                  </div>
                </a>

                <a
                  href="mailto:adm@acmcarimbos.com.br"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <p className="text-muted-foreground">adm@acmcarimbos.com.br</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p className="text-muted-foreground">Rua Dr Quirino, 1044 - Centro</p>
                    <p className="text-muted-foreground">Campinas - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horário de atendimento</p>
                    <p className="text-muted-foreground">Segunda a sexta-feira</p>
                    <p className="text-muted-foreground">9h às 17h30</p>
                  </div>
                </div>

                <a
                  href="https://instagram.com/acmcarimbos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Instagram</p>
                    <p className="text-muted-foreground">@acmcarimbos</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5519982482393"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
