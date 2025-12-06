import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Soluções", href: "/#solucoes" },
    { name: "Como Funciona", href: "/#como-funciona" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.hash === href.replace("/", "");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/90 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="flex flex-col gap-[3px]">
                <div className="w-5 h-[3px] bg-primary rounded-full" />
                <div className="w-4 h-[3px] bg-primary rounded-full" />
                <div className="w-3 h-[3px] bg-primary rounded-full" />
              </div>
            </div>
            <span className="text-foreground-light font-sora font-semibold text-xl tracking-tight">
              Banken
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-foreground-light"
                    : "text-foreground-light/50 hover:text-foreground-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contato">
              <Button variant="hero" size="default" className="rounded-full">
                Simular
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-foreground-light/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground-light/70 hover:text-foreground-light text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" className="w-full mt-4 rounded-full">
                  Simular Antecipação
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
