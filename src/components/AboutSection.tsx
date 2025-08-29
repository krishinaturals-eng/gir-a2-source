import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-warm scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-2">
            About Girej
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            About Girej – <span className="text-earth-green">A2 Cow Ghee Manufacturer & Social Enterprise</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6">
            Girej is a premium A2 cow ghee manufacturer in India, proudly built by Krishi Naturals (est. 2013).
          </p>
          <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto">
            <strong>Our mission is simple yet powerful:</strong><br />
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
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">India's Trusted A2 Gir Cow Ghee Manufacturer</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
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
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Network of 5,000+ Gir Cow Farmers</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
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
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Ethical & Transparent Supply Chain</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We directly source pure A2 cow milk from our farmer network and process it in our FSSAI-certified, hygienic manufacturing facility. Every batch undergoes lab testing for purity, A2 protein verification, and compliance with export standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg"
          >
            Partner with Us – Build Your Brand with Girej
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;