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
      number: "Sustainable",
      label: "Dairy Farming",
      description: "Promoting sustainable dairy farming practices",
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
    <section id="impact" className="py-12 sm:py-20 bg-gradient-warm scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-2">
            Social & Ecological Impact
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            Empowering Farmers & <span className="text-earth-green">Preserving Gir Cow Breed</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every litre of Girej A2 ghee creates shared value across our entire ecosystem.
          </p>
        </div>

        {/* Impact Metrics & Slideshow */}
        <div className="flex flex-col gap-6 sm:gap-8 mb-12 sm:mb-16 items-center">
          {/* Farmer Slideshow - Centered */}
          <div className="flex justify-center">
            <Card className="p-4 sm:p-6 text-center hover:shadow-soft transition-all duration-300 relative overflow-hidden max-w-sm sm:max-w-md mx-auto">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto rounded-lg overflow-hidden bg-earth-green/10">
                <img 
                  src={farmerImages[currentImageIndex]} 
                  alt="Farmer"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  decoding="async" sizes="(max-width: 640px) 12rem, 15rem"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="text-lg sm:text-xl font-semibold text-foreground mt-4 sm:mt-6">Farmers' training & outreach</div>
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

          {/* Impact Metrics - Restored Original Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-soft transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-[50px] sm:h-[50px] mx-auto mb-3 sm:mb-4 bg-${metric.color}/10 rounded-full flex items-center justify-center`}>
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 text-${metric.color}`} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">{metric.number}</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{metric.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Detailed Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16">

          <Card className="p-6 sm:p-8 bg-earth-green/5">
            <h3 className="text-lg sm:text-xl font-semibold text-earth-green mb-4 sm:mb-6">Building the Future</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              We are building a future where indigenous Gir Cows are preserved, farmers thrive, and B2B buyers get world-class, authentic A2 ghee.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">14+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">Gujarat</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Native Region</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">A2 Certified</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">Export</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Ready Quality</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero text-white rounded-2xl p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Partner in Our Impact</h3>
          <p className="text-sm sm:text-lg mb-3 sm:mb-4 text-white/90">
            Join us in creating sustainable value for farmers, preserving indigenous breeds, and delivering premium A2 ghee to global markets.
          </p>
          <Button 
            size="default" 
            className="bg-white text-girej-red hover:bg-white/90 font-semibold py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base"
          >
            👉 Become a Bulk Buyer Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;