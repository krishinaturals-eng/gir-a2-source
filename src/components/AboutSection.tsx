import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Handshake, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Girej
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            About Girej – <span className="text-earth-green">A2 Cow Ghee Manufacturer & Social Enterprise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Girej is a premium A2 cow ghee manufacturer in India, proudly built by Krishi Naturals (est. 2013).
          </p>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            <strong>Our mission is simple yet powerful:</strong><br />
            👉 To make indigenous cow rearing a sustainable livelihood for small & marginal farmers, while delivering world-class A2 Gir cow ghee to B2B buyers, wholesalers, food manufacturers, retailers, Ayurvedic brands, and exporters.
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
                <h3 className="text-xl font-semibold text-foreground mb-2">🥇 India's Trusted A2 Gir Cow Ghee Manufacturer</h3>
                <p className="text-muted-foreground">
                  Established in 2014, Girej is among the oldest A2 ghee manufacturers in India, pioneering an ecosystem for indigenous Gir cow rearing, scientific breeding, and genetic quality improvement in Gujarat.
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
                <h3 className="text-xl font-semibold text-foreground mb-2">👨‍🌾 Network of 5,000+ Gir Cow Farmers</h3>
                <p className="text-muted-foreground">
                  We have trained and organized 5,000+ Gir cow farmers in Gujarat, ensuring consistent quality and reliable bulk supply of authentic A2 Bilona ghee for domestic and export markets.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-farmer-brown" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">✅ Ethical & Transparent Supply Chain</h3>
                <p className="text-muted-foreground">
                  We directly source pure A2 cow milk from our farmer network and process it in our FSSAI-certified, hygienic manufacturing facility. Every batch undergoes lab testing for purity, A2 protein verification, and compliance with export standards.
                </p>
              </div>
            </div>
          </div>

          {/* B2B Partnership */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-foreground mb-6">🤝 Proven B2B Partner for Bulk Supply</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-earth-green/10 rounded-full flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-earth-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Trusted B2B Solutions</h4>
                  <p className="text-sm text-muted-foreground">Decade of Excellence • 20+ Leading Brands</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>✓ Over a decade of supplying 20+ leading A2 ghee brands</div>
                <div>✓ Competitive wholesale A2 ghee prices</div>
                <div>✓ Private label options and export-ready packaging</div>
                <div>✓ Tailored bulk solutions for wholesalers, food manufacturers, Ayurvedic companies, and exporters</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-earth-green/5 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-xl font-semibold text-earth-green mb-4">Krishi Naturals Mission</h3>
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