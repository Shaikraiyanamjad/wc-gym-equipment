import { CheckCircle, Users, Dumbbell, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Dumbbell, value: "1000+", label: "Products Sold" },
  { icon: Clock, value: "15+", label: "Years Experience" },
];

const features = [
  "Commercial-grade equipment for lasting durability",
  "Expert consultation for gym design & setup",
  "Competitive pricing with financing options",
  "Professional delivery & installation available",
  "Extensive warranty coverage on all products",
  "Serving Portland & the greater Oregon area",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-4 tracking-wider">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4">
              PORTLAND'S TRUSTED
              <span className="block text-brand-orange">GYM EXPERTS</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              West Coast Gym Equipment has been Portland's premier source for quality 
              fitness equipment for over 15 years. Whether you're building a home gym 
              or outfitting a commercial facility, we provide the expertise and equipment 
              you need to succeed.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <span className="text-foreground/90 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div 
                  key={label}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center hover:border-brand-orange/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 mb-4 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading text-brand-orange mb-1">
                    {value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-heading mb-2 sm:mb-3 text-primary-foreground">
                NEED HELP CHOOSING?
              </h3>
              <p className="text-primary-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Our fitness equipment experts are here to help you find the perfect gear for your goals.
              </p>
              <a 
                href="tel:5035023842"
                className="inline-block bg-background text-foreground font-heading tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-background/90 transition-colors text-sm sm:text-lg"
              >
                CALL (503) 502-3842
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
