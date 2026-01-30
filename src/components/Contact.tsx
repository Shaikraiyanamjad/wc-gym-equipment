import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(503) 502-3842",
    href: "tel:5035023842",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "4739 SE 25th Ave, Portland, OR 97202",
    href: "https://maps.google.com/?q=4739+SE+25th+Ave,+Portland,+OR+97202",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@wcgymequipment.com",
    href: "mailto:info@wcgymequipment.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Sat: 9AM - 6PM",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-4 tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-4">
            CONTACT <span className="text-brand-orange">US</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions about our equipment? Need a custom quote? 
            We're here to help you build your perfect gym.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-heading mb-6 text-foreground">
              SEND US A MESSAGE
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="John Doe"
                    className="bg-secondary border-border focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-secondary border-border focus:border-brand-orange"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="(503) 555-0123"
                  className="bg-secondary border-border focus:border-brand-orange"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your gym equipment needs..."
                  rows={5}
                  className="bg-secondary border-border focus:border-brand-orange resize-none"
                />
              </div>
              <Button variant="cta" size="xl" className="w-full gap-2">
                SEND MESSAGE
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, title, content, href }) => (
                <div 
                  key={title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-brand-orange/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h4 className="font-heading text-lg text-foreground mb-1">{title}</h4>
                  {href ? (
                    <a 
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-brand-orange transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.8!2d-122.6393!3d45.4923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzMyLjMiTiAxMjLCsDM4JzIxLjUiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="West Coast Gym Equipment Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
