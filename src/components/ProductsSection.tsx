import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Shield, Award, Truck } from "lucide-react";

const ProductsSection = () => {
  const productRange = [
    {
      title: "15 KG Bulk A2 Gir Cow Ghee",
      description: "Ideal for distributors & retailers",
      icon: Package,
      image: "/lovable-uploads/3e0fb42c-715a-49c1-adcd-60893d213855.png",
      color: "earth-green"
    },
    {
      title: "500 ml & 1 ltr Jars",
      description: "Customizable Private Label A2 Cow Ghee – Your Brand, Our Authentic Gir Cow Ghee",
      icon: Package,
      image: "/lovable-uploads/84106b90-8bb9-4d02-a947-3940ef4c1211.png",
      color: "trust-blue"
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Our range of A2 Cow Ghee products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ethically sourced, FSSAI-certified, and trusted by 20+ leading brands for wholesale and export.
          </p>
        </div>

        {/* Product Range Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {productRange.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-soft transition-all duration-300">
                {product.image ? (
                  <div className="w-60 h-60 mx-auto mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 mx-auto mb-6 bg-${product.color}/10 rounded-full flex items-center justify-center`}>
                    <IconComponent className={`h-8 w-8 text-${product.color}`} />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-4">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </Card>
            );
          })}
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