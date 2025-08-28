import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Users, Leaf, Award } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/lovable-uploads/4a80cf41-df9b-49bf-8941-d3d98b2cdbee.png", 
    alt: "Gir cows by pristine water source"
  },
  {
    src: "/lovable-uploads/d0dd1ae6-2652-4127-9ed6-414c69907e59.png",
    alt: "Herd of Gir cows grazing in natural pastures"
  },
  {
    src: "/lovable-uploads/87d15d84-225e-4e02-9458-9c2efc867529.png",
    alt: "Farmer with large herd of Gir cows in golden grassland"
  }
];

const HeroSection = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    // Auto-play functionality
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <Carousel 
        setApi={setApi}
        className="absolute inset-0 w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-girej-black/60 via-girej-black/40 to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top Content */}
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Content */}
            <div className="text-center text-white space-y-4 animate-fade-in">
              {/* Logo and Brand */}
              <div className="mb-6">
                <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <img 
                    src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png" 
                    alt="GIREJ Logo" 
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-lg font-medium text-white">Bulk A2 Cow Ghee Supplier</span>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                India's Trusted <span className="text-golden-accent">Bulk A2</span>
                <br />
                <span className="text-golden-accent">Cow Ghee</span> Supplier
              </h1>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    
    {/* CTA Buttons Below Hero */}
    <div className="bg-gradient-warm py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-earth-green hover:bg-earth-green/90 text-white">
            👉 Request Bulk Quote Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white">
            Download Wholesale Price Sheet
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;