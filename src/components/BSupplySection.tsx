import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Package, Heart, Globe, Scale, Package2, TrendingUp, DollarSign } from "lucide-react";

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
    <section id="partnership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            B2B Supply
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            A2 Ghee <span className="text-earth-green">B2B Supplier India</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            At Girej, we specialize in B2B partnerships. Our A2 ghee is supplied in bulk to various industries worldwide.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Girej is a trusted bulk A2 ghee supplier and manufacturer in India, delivering authentic Gir cow A2 ghee to buyers across India. Backed by our exclusive network of 5,000+ Gir cow farmers, we ensure consistent quantity with uncompromised quality.
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

        {/* Bulk Order Specifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Bulk Order Specifications</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive bulk supply solutions tailored for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* MOQ */}
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-earth-green/10 rounded-full flex items-center justify-center">
                <Scale className="h-8 w-8 text-earth-green" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Minimum Order</h4>
              <p className="text-2xl font-bold text-earth-green mb-1">50 kg</p>
              <p className="text-sm text-muted-foreground">Starting MOQ</p>
            </Card>

            {/* Packaging */}
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust-blue/10 rounded-full flex items-center justify-center">
                <Package2 className="h-8 w-8 text-trust-blue" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Packaging</h4>
              <p className="text-sm text-foreground mb-1">15 KG tins (16.5L)</p>
              <p className="text-sm text-muted-foreground">500ml & 1L jars</p>
            </Card>

            {/* Capacity */}
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-golden-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-golden-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Monthly Supply</h4>
              <p className="text-2xl font-bold text-golden-accent mb-1">5 tonnes</p>
              <p className="text-sm text-muted-foreground">Capacity/month</p>
            </Card>

            {/* Pricing */}
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-girej-red/10 rounded-full flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-girej-red" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Pricing</h4>
              <p className="text-sm text-foreground mb-1">Competitive rates</p>
              <p className="text-sm text-muted-foreground">Volume discounts</p>
            </Card>
          </div>

          {/* Detailed Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-6">Packaging Formats</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-foreground font-medium">15 KG tins (16.5 litres)</p>
                    <p className="text-sm text-muted-foreground">Bulk ghee supply for manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-foreground font-medium">500 ml & 1 ltr jars</p>
                    <p className="text-sm text-muted-foreground">Private label & retail-ready packaging</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-earth-green/5">
              <h4 className="text-xl font-semibold text-earth-green mb-6">Pricing Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-foreground font-medium">Competitive A2 ghee wholesale prices</p>
                    <p className="text-sm text-muted-foreground">Volume-based discount structure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-foreground font-medium">Long-term B2B contracts</p>
                    <p className="text-sm text-muted-foreground">Consistent supply & stable costs</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Export Ready */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
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