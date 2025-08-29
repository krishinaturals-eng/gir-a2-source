import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Dna, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const ImpactSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const farmerImages = [
    "/lovable-uploads/19cb4bff-cb95-4fbe-8a15-0c9b28550504.png",
    "/lovable-uploads/df4ce672-7dae-4dd7-93c1-375d6d939de1.png", 
    "/lovable-uploads/4bbb6c61-fc1f-42b4-b773-f66bb2151cd6.png"
  ];

  const impactMetrics = [
    {
      icon: Users,
      number: "5,000+",
      label: "Farmers",
      color: "earth-green"
    },
    {
      icon: Dna,
      number: "Indigenous",
      label: "Breed",
      color: "trust-blue"
    },
    {
      icon: Heart,
      number: "Healthy",
      label: "A2 Ghee",
      color: "girej-red"
    },
    {
      icon: Leaf,
      number: "Sustainable",
      label: "Farming",
      color: "golden-accent"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % farmerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [farmerImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % farmerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + farmerImages.length) % farmerImages.length);
  };

  return (
    <section id="impact" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Social & Ecological Impact
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Empowering Farmers & <span className="text-earth-green">Preserving Gir Cow Breed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every litre of Girej A2 ghee creates shared value across our entire ecosystem.
          </p>
        </div>

        {/* Impact Metrics & Slideshow */}
        <div className="flex flex-col gap-8 mb-16 items-center">
          {/* Farmer Slideshow - Centered */}
          <div className="flex justify-center">
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 relative overflow-hidden">
              <div className="relative w-32 h-24 rounded-lg overflow-hidden bg-earth-green/10">
                <img 
                  src={farmerImages[currentImageIndex]} 
                  alt="Farmer"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm font-semibold text-foreground mt-3">Our Farmers</div>
            </Card>
          </div>
          
          <div className="flex justify-center mt-2 gap-1">
            {farmerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-earth-green' : 'bg-earth-green/30'
                }`}
              />
            ))}
          </div>

          {/* Impact Metrics - Larger Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300">
                  <div className={`w-[50px] h-[50px] mx-auto mb-4 bg-${metric.color}/10 rounded-full flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 text-${metric.color}`} />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-2">{metric.number}</div>
                  <div className="text-sm font-semibold text-foreground">{metric.label}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Detailed Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">

          <Card className="p-8 bg-earth-green/5">
            <h3 className="text-xl font-semibold text-earth-green mb-6">Building the Future</h3>
            <p className="text-muted-foreground mb-6">
              We are building a future where indigenous Gir Cows are preserved, farmers thrive, and B2B buyers get world-class, authentic A2 ghee.
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