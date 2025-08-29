import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Dna, Leaf } from "lucide-react";

const ImpactSection = () => {
  const impactMetrics = [
    {
      icon: Users,
      number: "5,000+",
      label: "Farmers Empowered",
      description: "Sustainable monthly income (₹15,000+)",
      color: "earth-green"
    },
    {
      icon: Dna,
      number: "Indigenous",
      label: "Cow Breed Preservation",
      description: "Genetic quality improvement & preservation",
      color: "trust-blue"
    },
    {
      icon: Heart,
      number: "Healthy",
      label: "A2 Ghee for Consumers",
      description: "Pure, healthy, easily digestible",
      color: "girej-red"
    },
    {
      icon: Leaf,
      number: "Eco-Friendly",
      label: "Processing",
      description: "Renewable energy adoption",
      color: "golden-accent"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Social & Ecological Impact
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Farmer Empowerment & <span className="text-earth-green">Breed Preservation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every litre of Girej A2 ghee creates shared value across our entire ecosystem.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${metric.color}/10 rounded-full flex items-center justify-center`}>
                  <IconComponent className={`h-8 w-8 text-${metric.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Detailed Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-earth-green mb-6">Shared Value Creation</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-earth-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">For Farmers</h4>
                  <p className="text-sm text-muted-foreground">Sustainable monthly income (₹15,000+) through premium milk pricing and direct partnerships.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-trust-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Dna className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">For Cows</h4>
                  <p className="text-sm text-muted-foreground">Genetic quality improvement & breed preservation of indigenous Gir cows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-girej-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">For Consumers</h4>
                  <p className="text-sm text-muted-foreground">Pure, healthy, easily digestible A2 Gir cow ghee with complete traceability.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-golden-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">For the Planet</h4>
                  <p className="text-sm text-muted-foreground">Eco-friendly processing with renewable energy adoption and sustainable practices.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-earth-green/5">
            <h3 className="text-xl font-semibold text-earth-green mb-6">Building the Future</h3>
            <p className="text-muted-foreground mb-6">
              We are building a future where indigenous cows are preserved, farmers thrive, and B2B buyers get world-class, authentic A2 ghee.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">14+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Gujarat</div>
                <div className="text-sm text-muted-foreground">Native Region</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">A2 Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Export</div>
                <div className="text-sm text-muted-foreground">Ready Quality</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Partner in Our Impact</h3>
          <p className="text-xl mb-6 text-white/90">
            Join us in creating sustainable value for farmers, preserving indigenous breeds, and delivering premium A2 ghee to global markets.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-girej-red hover:bg-white/90 font-semibold py-4 px-8 text-lg"
          >
            👉 Become a Bulk Buyer Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;