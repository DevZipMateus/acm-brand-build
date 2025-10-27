import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-10 sm:pt-14 md:pt-16 pb-5 sm:pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <img src={logo} alt="ACM Carimbos" className="h-10 sm:h-12 md:h-14 lg:h-16 mb-2 sm:mb-3 md:mb-4" />
              <p className="text-xs sm:text-sm md:text-base text-secondary-foreground/80 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                Desde 1982 oferecendo carimbos personalizados de alta qualidade. Empresa familiar certificada pelo Sebrae no Programa de Qualidade Total.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-primary font-semibold italic">
                Marca, Personaliza e Identifica
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Navegação</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("produtos")}
                    className="text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="https://wa.me/5519982482393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">(19) 98248-2393</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:carimbo@acmcarimbos.com.br"
                    className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm break-all">carimbo@acmcarimbos.com.br</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Rua+Dr+Quirino,+1044+Centro+Campinas+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-xs sm:text-sm">
                      Rua Dr Quirino, 1044<br />
                      Centro - Campinas/SP<br />
                      <span className="font-semibold">Convênio com estacionamento:</span><br />
                      Rua Dr Quirino, 986
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/acmcarimbos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">@acmcarimbos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 sm:pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4">
              <p className="text-secondary-foreground/60 text-xs md:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} ACM Servs e Com de Carimbos Ltda. Todos os direitos reservados.
              </p>
              <p className="text-secondary-foreground/60 text-xs md:text-sm text-center sm:text-right">
                CNPJ: 08.968.365/0001-16
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
