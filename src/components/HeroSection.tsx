import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Users, Leaf, Award } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/lovable-uploads/78a3afa7-0713-447d-a722-53ceea996608.png",
    alt: "Gir cows grazing in natural pastures"
  },
  {
    src: "/lovable-uploads/4a80cf41-df9b-49bf-8941-d3d98b2cdbee.png", 
    alt: "Gir cows by pristine water source"
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
      <div className="absolute inset-0 z-10 flex flex-col justify-between">
        {/* Top Content */}
        <div className="flex-1 flex items-start justify-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 inline-block border border-white/20">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <img src="/lovable-uploads/8b50af87-9586-4a92-9f9b-3e6f55ec85f8.png" alt="GIREJ Logo" className="h-12 w-auto" />
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-girej-red">
                    India's oldest A2 Dairy Brand
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="pb-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base md:text-lg text-white mb-4 max-w-2xl mx-auto font-medium text-center">
              Working directly with 4000+ Gir Cow farmers to deliver premium A2 Ghee across India
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                <Users className="h-4 w-4 text-girej-red mb-1 mx-auto" />
                <div className="text-sm font-bold text-white">4000+</div>
                <div className="text-xs text-white/80">Partner Farmers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                <Leaf className="h-4 w-4 text-girej-red mb-1 mx-auto" />
                <div className="text-sm font-bold text-white">100%</div>
                <div className="text-xs text-white/80">Ahimsa Sourcing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
                <Award className="h-4 w-4 text-girej-red mb-1 mx-auto" />
                <div className="text-sm font-bold text-white">A2 Certified</div>
                <div className="text-xs text-white/80">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    
    {/* CTA Buttons Below Hero */}
    <div className="bg-girej-cream py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-girej-red hover:bg-girej-dark-red text-white">
            Request Bulk Quote
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-girej-red text-girej-red hover:bg-girej-red hover:text-white">
            Explore Supply Chain
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;