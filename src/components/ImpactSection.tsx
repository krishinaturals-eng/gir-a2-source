import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, GraduationCap, Sprout } from "lucide-react";

const ImpactSection = () => {
  const impactMetrics = [
    {
      icon: MapPin,
      number: "4000+",
      label: "Partner Farmers",
      description: "Across 50+ villages in Gujarat",
      color: "text-earth-green"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Income Increase",
      description: "Average farmer income improvement",
      color: "text-trust-blue"
    },
    {
      icon: GraduationCap,
      number: "2500+",
      label: "Farmers Trained",
      description: "In scientific breeding & care",
      color: "text-golden-accent"
    },
    {
      icon: Sprout,
      number: "100%",
      label: "Organic Practices",
      description: "Chemical-free farming methods",
      color: "text-earth-green"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Social Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Lives Through <span className="text-earth-green">Ethical Dairy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our social enterprise model creates sustainable livelihoods for thousands of farmers while preserving traditional Gir cow breeding practices.
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${metric.color.split('-')[1]}-100 to-${metric.color.split('-')[1]}-50 rounded-full flex items-center justify-center`}>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.number}</div>
              <div className="text-lg font-semibold text-earth-green mb-2">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </Card>
          ))}
        </div>

        {/* Farmer Stories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Farmer Network Map</h3>
            <div className="bg-earth-green/5 rounded-lg p-6 text-center">
              <MapPin className="h-16 w-16 text-earth-green mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-earth-green mb-2">Gujarat Operations</h4>
              <p className="text-muted-foreground mb-4">
                Our extensive network spans across Gujarat's prime dairy regions, with farmer partners in Saurashtra, Kutch, and Central Gujarat.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-foreground">50+</div>
                  <div className="text-muted-foreground">Villages Covered</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">15</div>
                  <div className="text-muted-foreground">Collection Centers</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Sustainability Practices</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-green rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Scientific Breeding Programs</h4>
                  <p className="text-sm text-muted-foreground">Preserving pure Gir genetics through artificial insemination and selective breeding</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-trust-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Organic Feed Supply</h4>
                  <p className="text-sm text-muted-foreground">Chemical-free fodder and nutritional supplements for optimal cow health</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-golden-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Veterinary Support</h4>
                  <p className="text-sm text-muted-foreground">24/7 veterinary care and regular health check-ups for all partner farms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-green rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Training & Education</h4>
                  <p className="text-sm text-muted-foreground">Regular workshops on modern dairy practices and financial literacy</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Impact Journey</h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Partner with us to create positive change in rural Gujarat while accessing premium A2 dairy products for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹2.5Cr+</div>
              <div className="text-sm opacity-90">Additional farmer income generated</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">15,000+</div>
              <div className="text-sm opacity-90">Gir cows under care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;