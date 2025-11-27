import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { openWhatsAppForQuote } from "@/services/whatsappService";

const AboutSection = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-6 sm:py-8 lg:py-12 bg-gradient-to-b from-background to-earth-green/5 scroll-mt-20 md:scroll-mt-24 transition-all duration-1000 mobile-tight-spacing ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <Badge variant="secondary" className="mb-2">
            About Girej
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            About Girej – <span className="text-earth-green">A2 Cow Ghee Manufacturer & Social Enterprise</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-6">
            Girej is a premium A2 cow ghee manufacturer in India, proudly built by Krishi Naturals (est. 2013).
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            <strong>Our mission is simple yet powerful:</strong><br className="hidden sm:block" />
            To make indigenous cow rearing a sustainable livelihood for small & marginal farmers, while delivering world-class A2 Gir cow ghee to B2B buyers, wholesalers, food manufacturers, retailers, Ayurvedic brands, and exporters.
          </p>
        </div>

        {/* Story Content */}
        <div className="mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-earth-green/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-earth-green" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">India's Trusted A2 Gir Cow Ghee Manufacturer</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Established in 2014, Girej is among the oldest A2 ghee manufacturers in India, pioneering an ecosystem for indigenous Gir cow rearing, scientific breeding, and genetic quality improvement in Gujarat.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-trust-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">Network of 5,000+ Gir Cow Farmers</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  We have trained and organized 5,000+ Gir cow farmers in Gujarat, ensuring consistent quality and reliable bulk supply of authentic A2 Bilona ghee for domestic and export markets.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-golden-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-farmer-brown" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">Ethical & Transparent Supply Chain</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  We directly source pure A2 cow milk from our farmer network and process it in our FSSAI-certified, hygienic manufacturing facility. Every batch undergoes lab testing for purity, A2 protein verification, and compliance with export standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold touch-manipulation shadow-elevated hover:shadow-trust transition-all duration-300 mobile-full-width"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner with Us
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold border-2 touch-manipulation shadow-soft hover:shadow-elevated transition-all duration-300 mobile-full-width"
              onClick={() => openWhatsAppForQuote()}
            >
              💬 Chat Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;