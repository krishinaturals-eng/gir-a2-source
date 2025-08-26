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
  },
  {
    src: "/lovable-uploads/0e10d37e-8615-4391-8c76-2ff02271bd4b.png",
    alt: "Traditional farmers with GIREJ heritage"
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
                <div className="absolute inset-0 bg-gradient-to-r from-earth-green/80 via-earth-green/60 to-transparent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
          <div className="animate-fade-in text-center">
            <Badge variant="secondary" className="mb-4 text-sm bg-white/90 text-black">
              🏆 India's Oldest A2 Dairy Brand - Est. 2014
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">India's First</span>
              <span className="block text-red-800 bg-white/95 px-4 py-2 rounded-lg inline-block mt-2">A2 Dairy Social Enterprise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto font-medium">
              Partnering with 4000+ Gir cow farmers to deliver premium A2 ghee through ethical sourcing and Ahimsa milk production
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-black">
                <Users className="h-8 w-8 text-red-800 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-red-800">4000+</div>
                <div className="text-sm text-black/80">Partner Farmers</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-black">
                <Leaf className="h-8 w-8 text-red-800 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-red-800">100%</div>
                <div className="text-sm text-black/80">Ahimsa Sourcing</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-black">
                <Award className="h-8 w-8 text-red-800 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-red-800">A2 Certified</div>
                <div className="text-sm text-black/80">Premium Quality</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group bg-red-800 hover:bg-red-900 text-white">
                Request Bulk Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/95 text-red-800 border-red-800 hover:bg-red-800 hover:text-white">
                Explore Supply Chain
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;