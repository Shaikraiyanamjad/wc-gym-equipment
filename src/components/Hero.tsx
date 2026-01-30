import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional gym equipment showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 section-padding">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-6 tracking-wider">
              PORTLAND'S #1 GYM EQUIPMENT SUPPLIER
            </span>
          </div>

          <h1 className="animate-slide-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-none mb-6">
            BUILD YOUR
            <span className="block text-brand-orange">DREAM GYM</span>
          </h1>

          <p className="animate-slide-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 text-white">
            Premium commercial & home gym equipment. From power racks to cardio machines, 
            we have everything you need to achieve your fitness goals.
          </p>

          <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="hero" asChild>
              <a href="#products">
                SHOP NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#contact">GET A QUOTE</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="animate-slide-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Truck className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Free Delivery</p>
                <p className="text-sm text-muted-foreground">On orders over $500</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Warranty</p>
                <p className="text-sm text-muted-foreground">2-year coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Top Quality</p>
                <p className="text-sm text-muted-foreground">Commercial grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
