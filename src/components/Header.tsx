import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5519982482393"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Fale conosco
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
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-center shadow-md"
              >
                Fale conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
