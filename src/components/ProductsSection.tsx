import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Shield, Award, Truck } from "lucide-react";

const ProductsSection = () => {
  const productRange = [
    {
      title: "15 KG Tin (Wholesale Focus)",
      description: "Ideal for distributors & retailers",
      icon: Package,
      color: "earth-green"
    },
    {
      title: "500ml & 1L Jars",
      description: "Retail-ready packaging, private label available",
      icon: Package,
      color: "trust-blue"
    },
    {
      title: "Bulk Supply (1000L tankers)",
      description: "For food manufacturers, export & institutional buyers",
      icon: Truck,
      color: "girej-red"
    }
  ];

  const certifications = [
    { label: "FSSAI Certified", highlight: true },
    { label: "Lab tested daily for A2 beta-casein protein", highlight: false },
    { label: "Hygienic Bilona method + modern pasteurization", highlight: false },
    { label: "Organic & ISO compliance (export-ready)", highlight: true }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Product Range
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Bulk A2 Gir Cow Ghee – <span className="text-earth-green">15kg Tins, Jars & Bulk Supply</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Girej's wholesale range: A2 Gir cow ghee in 15kg tins, 1L jars, and bulk insulated tankers. Perfect for distributors, retailers, and food manufacturers.
          </p>
        </div>

        {/* Product Range Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {productRange.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-soft transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 bg-${product.color}/10 rounded-full flex items-center justify-center`}>
                  <IconComponent className={`h-8 w-8 text-${product.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Quality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image/Info */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Premium A2 Gir Cow Ghee</h3>
            <div className="aspect-video bg-earth-green/5 rounded-lg mb-6 flex items-center justify-center">
              <Package className="h-16 w-16 text-earth-green/50" />
            </div>
            <p className="text-muted-foreground mb-4">
              Our signature A2 ghee is crafted from the milk of indigenous Gir cows, using traditional Bilona method combined with modern quality assurance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-earth-green" />
                <span className="text-sm text-foreground">100% Pure A2 Ghee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-earth-green" />
                <span className="text-sm text-foreground">Traditional Bilona Method</span>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Certifications & Quality</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${cert.highlight ? 'bg-earth-green' : 'bg-muted-foreground'}`}></div>
                  <span className={`${cert.highlight ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-earth-green/5 rounded-lg">
              <p className="text-sm text-earth-green font-medium">
                ✔ Daily lab testing ensures consistent A2 protein levels
                <br />
                ✔ Export-ready with organic & ISO certifications
                <br />
                ✔ Batch-wise traceability for complete transparency
              </p>
            </div>
          </Card>
        </div>

        {/* Bulk Supply Focus */}
        <div className="bg-earth-green/5 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-xl font-semibold text-earth-green mb-4">Bulk Supply Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-foreground">50kg</div>
              <div className="text-muted-foreground">Minimum Order Quantity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">15kg</div>
              <div className="text-muted-foreground">Standard Tin Size</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">1000L</div>
              <div className="text-muted-foreground">Bulk Tanker Capacity</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-4 px-8 text-lg"
            >
              👉 Request 15kg Tin Price
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold py-4 px-8 text-lg"
            >
              Get Private Label Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;