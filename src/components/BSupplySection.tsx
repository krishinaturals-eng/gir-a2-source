import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Package, Heart, Globe } from "lucide-react";

const BSupplySection = () => {
  const clientTypes = [
    {
      icon: Factory,
      title: "Food Manufacturers",
      description: "snacks, confectionery, bakery, FMCG",
      color: "earth-green"
    },
    {
      icon: Package,
      title: "Retail & Private Labels",
      description: "white-label A2 ghee for premium brands",
      color: "trust-blue"
    },
    {
      icon: Heart,
      title: "Ayurvedic & Health Products",
      description: "certified ghee for wellness products",
      color: "girej-red"
    },
    {
      icon: Globe,
      title: "Export Clients",
      description: "UAE, USA, Canada, UK, Singapore",
      color: "golden-accent"
    }
  ];

  return (
    <section id="b2b-supply" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            B2B Supply
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            A2 Ghee <span className="text-earth-green">B2B Supplier India</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Girej, we specialize in B2B partnerships. Our A2 ghee is supplied in bulk to various industries worldwide.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${client.color}/10 rounded-full flex items-center justify-center`}>
                  <IconComponent className={`h-8 w-8 text-${client.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{client.title}</h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </Card>
            );
          })}
        </div>

        {/* MOQ & Packaging */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">MOQ & Packaging</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                <span className="text-foreground">Starting at <strong>50kg bulk orders</strong></span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                <span className="text-foreground">Packaging: <strong>15kg tins, 1L jars, 1000L bulk tankers</strong></span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                <span className="text-foreground">Pricing: <strong>Competitive wholesale A2 ghee prices with bulk discounts</strong></span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-earth-green/5">
            <h3 className="text-xl font-semibold text-earth-green mb-6">Export Ready</h3>
            <p className="text-muted-foreground mb-6">
              We serve international markets with complete export documentation, organic certifications, and cold-chain logistics.
            </p>
            <div className="flex flex-wrap gap-2">
              {["UAE", "USA", "Canada", "UK", "Singapore"].map((country) => (
                <Badge key={country} variant="outline" className="border-earth-green text-earth-green">
                  {country}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-4 px-8 text-lg"
            >
              👉 Request B2B Partnership Kit
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold py-4 px-8 text-lg"
            >
              Get Export Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BSupplySection;