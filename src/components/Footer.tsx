import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="West Coast Gym Equipment" 
              className="h-14 w-auto mb-6"
            />
            <p className="text-muted-foreground mb-6">
              Portland's premier destination for commercial and home gym equipment. 
              Quality gear, expert advice, unbeatable service.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-brand-orange hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-foreground">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About Us", "Contact", "Blog"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-brand-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-foreground">CATEGORIES</h4>
            <ul className="space-y-3">
              {["Power Racks", "Free Weights", "Cardio Equipment", "Machines", "Benches", "Accessories"].map((category) => (
                <li key={category}>
                  <a 
                    href="#products"
                    className="text-muted-foreground hover:text-brand-orange transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-foreground">CONTACT US</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Phone:</strong>
                <a href="tel:5035023842" className="block hover:text-brand-orange transition-colors">
                  503-502-3842
                </a>
              </li>
              <li>
                <strong className="text-foreground">Address:</strong>
                <p>4739 SE 25th Ave</p>
                <p>Portland, OR 97202</p>
              </li>
              <li>
                <strong className="text-foreground">Hours:</strong>
                <p>Mon - Sat: 9AM - 6PM</p>
                <p>Sunday: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} West Coast Gym Equipment. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-lg bg-brand-orange text-primary-foreground flex items-center justify-center hover:bg-brand-orange-light transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
