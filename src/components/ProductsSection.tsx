import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Package, Truck, Award } from "lucide-react";

const ProductsSection = () => {
  const productFeatures = [
    {
      icon: Award,
      title: "A2 Protein Certified",
      description: "Laboratory tested and certified A2 beta-casein protein"
    },
    {
      icon: Package,
      title: "Bulk Supply Ready",
      description: "50kg to 500kg packaging options for B2B customers"
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "Temperature-controlled logistics network"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Third-party tested and certified processes"
    }
  ];

  const specifications = [
    { label: "A2 Protein Content", value: "100% Pure", highlight: true },
    { label: "Moisture Content", value: "< 0.5%", highlight: false },
    { label: "Free Fatty Acid", value: "< 2.5%", highlight: false },
    { label: "Shelf Life", value: "18 months", highlight: true },
    { label: "Packaging Options", value: "50kg - 500kg", highlight: false },
    { label: "Production Capacity", value: "500 MT/month", highlight: true }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium <span className="text-earth-green">A2 Ghee</span> for Bulk Supply
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our flagship A2 ghee is crafted from pure Gir cow milk using traditional bilona method, perfect for brands seeking premium bulk ingredients.
          </p>
        </div>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image & Info */}
          <Card className="p-8 shadow-elevated">
            <div className="bg-golden-accent/10 rounded-lg p-6 mb-6 text-center">
              <Package className="h-20 w-20 text-golden-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">A2 Bilona Ghee</h3>
              <p className="text-muted-foreground">Traditional churned from pure Gir cow curd</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-earth-green" />
                <span className="text-foreground">100% Pure A2 Protein</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-earth-green" />
                <span className="text-foreground">Traditional Bilona Method</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-earth-green" />
                <span className="text-foreground">Ahimsa Sourced Milk</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-earth-green" />
                <span className="text-foreground">Third-Party Lab Tested</span>
              </div>
            </div>
          </Card>

          {/* Product Specifications */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Product Specifications</h3>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    spec.highlight ? 'bg-earth-green/10' : 'bg-muted/50'
                  }`}
                >
                  <span className="font-medium text-foreground">{spec.label}</span>
                  <span className={`font-semibold ${spec.highlight ? 'text-earth-green' : 'text-muted-foreground'}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Badge variant="outline">FSSAI Certified</Badge>
                <Badge variant="outline">ISO 22000</Badge>
                <Badge variant="outline">A2 Lab Tested</Badge>
                <Badge variant="outline">Organic Certified</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Product Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-12 h-12 bg-earth-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-earth-green" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Bulk Supply CTA */}
        <div className="bg-earth-green/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready for Bulk Supply</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need 50kg or 500kg, our flexible packaging and delivery options ensure your business gets the premium A2 ghee it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Request Product Samples
            </Button>
            <Button variant="trust" size="lg">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;