import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Zap, Thermometer, FlaskConical, Package } from "lucide-react";

const SupplyChainSection = () => {
  const processSteps = [
    {
      icon: Truck,
      title: "Mobile Procurement Units",
      description: "Direct milk collection from farmer groups",
      color: "trust-blue"
    },
    {
      icon: Zap,
      title: "State-of-Art Pasteurization (HTLT)",
      description: "Hybrid solar-electric technology",
      color: "golden-accent"
    },
    {
      icon: Thermometer,
      title: "Cold Chain",
      description: "Solar-powered steam cooling",
      color: "earth-green"
    },
    {
      icon: FlaskConical,
      title: "Lab Testing & Traceability",
      description: "Milko scan + batch-wise A2 protein certification",
      color: "girej-red"
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Bulk-friendly, export-standard hygienic packaging",
      color: "farmer-brown"
    }
  ];

  return (
    <section id="supply-chain" className="py-12 sm:py-16 lg:py-20 bg-gradient-warm mobile-tight-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4">
            Supply Chain
          </Badge>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            A2 Ghee Supply Chain - <span className="text-earth-green">Farm to Packaging Transparency</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our farm-to-packaging model guarantees purity, traceability & efficiency throughout the entire process.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-4 sm:p-6 text-center hover:shadow-soft transition-all duration-300 h-full mobile-card-spacing">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-${step.color}/10 rounded-full flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 text-${step.color}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                </Card>
                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-earth-green rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <Card className="p-4 sm:p-6 lg:p-8 text-center mobile-card-spacing">
            <h3 className="text-lg sm:text-xl font-semibold text-earth-green mb-3 sm:mb-4">Solar Technology</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Eco-friendly processing with renewable energy adoption, reducing carbon footprint while maintaining quality.
            </p>
          </Card>
          
          <Card className="p-4 sm:p-6 lg:p-8 text-center mobile-card-spacing">
            <h3 className="text-lg sm:text-xl font-semibold text-trust-blue mb-3 sm:mb-4">Quality Assurance</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Daily lab testing for A2 beta-casein protein with batch-wise certification and complete traceability.
            </p>
          </Card>
          
          <Card className="p-4 sm:p-6 lg:p-8 text-center mobile-card-spacing">
            <h3 className="text-lg sm:text-xl font-semibold text-girej-red mb-3 sm:mb-4">Export Standards</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              International packaging standards with complete documentation for global B2B supply chain requirements.
            </p>
          </Card>
        </div>

        {/* Facility Stats */}
        <div className="bg-earth-green/5 rounded-2xl p-4 sm:p-6 lg:p-8 text-center mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-earth-green mb-4 sm:mb-6">Processing Capacity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">5,000+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Litres Daily Capacity</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">Vadodara</div>
              <div className="text-sm sm:text-base text-muted-foreground">Gujarat Plant Location</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Quality Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation shadow-elevated hover:shadow-trust transition-all duration-300 mobile-full-width sm:w-auto"
          >
            👉 Download Supply Chain Transparency Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;