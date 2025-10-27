import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg" : "bg-secondary/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <img src={logo} alt="ACM Carimbos" className="h-10 sm:h-12 md:h-14 lg:h-16" />

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => scrollToSection('sobre')}
              className="hover:text-primary transition-colors duration-300 font-medium text-secondary-foreground"
            >
              SOBRE
            </button>
            <span className="text-secondary-foreground/40">|</span>
            <button
              onClick={() => scrollToSection('vitrine')}
              className="hover:text-primary transition-colors duration-300 font-medium text-secondary-foreground"
            >
              VITRINE
            </button>
            <span className="text-secondary-foreground/40">|</span>
            <button
              onClick={() => scrollToSection('produtos')}
              className="hover:text-primary transition-colors duration-300 font-medium text-secondary-foreground"
            >
              PRODUTOS
            </button>
            <span className="text-secondary-foreground/40">|</span>
            <button
              onClick={() => scrollToSection('contato')}
              className="hover:text-primary transition-colors duration-300 font-medium text-secondary-foreground"
            >
              CONTATO
            </button>
            <span className="text-secondary-foreground/40">|</span>
            <a
              href="https://wa.me/5519982482393"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300 font-medium text-secondary-foreground"
            >
              FALE CONOSCO
            </a>
            <a
              href="https://wa.me/5519982482393"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 lg:px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg inline-flex items-center gap-2 ml-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <Phone className="w-4 h-4" />
              (19) 98248-2393
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-secondary-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("vitrine")}
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Vitrine
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5519982482393"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Fale Conosco
              </a>
              <a
                href="https://wa.me/5519982482393"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <Phone className="w-5 h-5" />
                (19) 98248-2393
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
