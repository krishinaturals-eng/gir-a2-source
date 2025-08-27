import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Girej
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Girej – <span className="text-earth-green">A2 Cow Ghee Manufacturer & Social Enterprise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Girej is a brand by Krishi Naturals, a social enterprise founded in 2013 with one mission: To make indigenous cow rearing a sustainable livelihood for marginal farmers while delivering world-class A2 ghee to B2B buyers.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-earth-green/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-earth-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">14+ Years of Experience</h3>
                <p className="text-muted-foreground">
                  14+ years invested in farmer training, genetic quality improvement, and sustainable dairy practices in Gujarat.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-trust-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">5,000 Farmers Impacted</h3>
                <p className="text-muted-foreground">
                  5,000 farmers impacted with minimum monthly income goals of ₹15,000, ensuring sustainable livelihoods.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-farmer-brown" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">State-of-Art Facility</h3>
                <p className="text-muted-foreground">
                  State-of-art plant in Vadodara, Gujarat with daily capacity of 5,000+ litres for bulk B2B supply.
                </p>
              </div>
            </div>
          </div>

          {/* Unique Model */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Unique Model</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-earth-green/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-earth-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Triple Impact Model</h4>
                  <p className="text-sm text-muted-foreground">Farmers • Cows • B2B Buyers</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>✓ Farmers earn premium prices for their milk</div>
                <div>✓ Indigenous Gir cows are genetically improved & preserved</div>
                <div>✓ B2B buyers receive consistent, certified, export-quality A2 ghee</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-earth-green/5 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-2xl font-semibold text-earth-green mb-4">Krishi Naturals Mission</h3>
          <p className="text-lg text-foreground max-w-4xl mx-auto">
            To revolutionize India's dairy industry by creating sustainable livelihoods for marginal farmers while preserving indigenous breeds and delivering premium A2 ghee to global B2B markets.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-4 px-8 text-lg"
          >
            👉 Partner with Us – Build Your Brand with Girej
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;