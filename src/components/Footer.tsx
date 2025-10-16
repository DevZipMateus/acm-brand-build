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
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <img src={logo} alt="ACM Carimbos" className="h-16 mb-4" />
              <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
                Desde 1982 oferecendo carimbos personalizados de alta qualidade. Empresa familiar certificada pelo Sebrae no Programa de Qualidade Total.
              </p>
              <p className="text-primary font-semibold italic">
                Marca, Personaliza e Identifica
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("produtos")}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/5519982482393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">(19) 98248-2393</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:adm@acmcarimbos.com.br"
                    className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">adm@acmcarimbos.com.br</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-secondary-foreground/80">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span className="text-sm">
                    Rua Dr Quirino, 1044<br />
                    Centro - Campinas/SP
                  </span>
                </li>
                <li>
                  <a
                    href="https://instagram.com/acmcarimbos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">@acmcarimbos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} ACM Servs e Com de Carimbos Ltda. Todos os direitos reservados.
              </p>
              <p className="text-secondary-foreground/60 text-sm text-center md:text-right">
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
