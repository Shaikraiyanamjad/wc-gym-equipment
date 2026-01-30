import { useState } from "react";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="West Coast Gym Equipment" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-brand-orange transition-colors duration-300 font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:5035023842" 
              className="hidden lg:flex items-center gap-2 text-muted-foreground hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">503-502-3842</span>
            </a>
            
            <Button variant="cart" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border animate-fade-in">
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-brand-orange transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:5035023842" 
                className="flex items-center gap-2 text-brand-orange py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(503) 502-3842</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
