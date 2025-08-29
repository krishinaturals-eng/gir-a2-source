import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Users, Leaf, Award, Factory, Store, Heart, ChefHat, Globe } from "lucide-react";
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
    <section id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 md:scroll-mt-24 pb-[env(safe-area-inset-bottom)]">
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
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="100vw"
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
        <div className="pt-20 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Content */}
            <div className="text-center text-white space-y-3 sm:space-y-4 animate-fade-in">
              {/* Logo and Brand */}
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-3 sm:px-6 border border-white/20">
                  <img 
                    src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png" 
                    alt="GIREJ Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <span className="text-sm sm:text-lg font-medium text-white text-center">India's Trusted Bulk A2 Cow Ghee Supplier</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

      </div>

      {/* Metrics at bottom */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 px-3 mb-[env(safe-area-inset-bottom)]">
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-3 border border-white/20 w-full max-w-xs sm:max-w-none">
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-white font-medium text-xs sm:text-sm text-center">Network of 5000+ Gir Cow Farmers</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-3 border border-white/20 w-full max-w-xs sm:max-w-none">
            <div className="flex items-center justify-center space-x-2">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-white font-medium text-xs sm:text-sm text-center">Supplying to 20+ Brands</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    
    {/* CTA Buttons Below Hero */}
    <div className="bg-gradient-warm py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Button size="lg" className="group bg-earth-green hover:bg-earth-green/90 text-white text-sm sm:text-base px-6 sm:px-8">
            👉 Request Bulk Quote Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>

    {/* SEO Content Section */}
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
          Your Reliable Bulk A2 Ghee Supply Partner
        </h1>
        
        <h2 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-6 sm:mb-8">
          Powering India's Top Food & Wellness Brands with Consistent A2 Gir Ghee.
        </h2>
        
        <div className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
          <p className="mb-4 sm:mb-6">
            When your business requires a dependable, large-scale supply of pure A2 cow ghee, Girej delivers. 
            We've built a robust B2B supply chain to ensure seamless and on-time delivery for high-volume orders.
          </p>
          
          <p className="font-medium text-foreground mb-3 sm:mb-4">We serve:</p>
          
          <ul className="grid grid-cols-1 gap-3 sm:gap-4 text-left max-w-2xl mx-auto">
            <li className="flex items-center space-x-3">
              <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-earth-green flex-shrink-0" />
              <span className="text-sm sm:text-base">Food & Beverage Manufacturers</span>
            </li>
            <li className="flex items-center space-x-3">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-earth-green flex-shrink-0" />
              <span className="text-sm sm:text-base">Private Label & Retail Brands</span>
            </li>
            <li className="flex items-center space-x-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-earth-green flex-shrink-0" />
              <span className="text-sm sm:text-base">Ayurvedic Product Companies</span>
            </li>
            <li className="flex items-center space-x-3">
              <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-earth-green flex-shrink-0" />
              <span className="text-sm sm:text-base">Bakeries & Confectionery Businesses</span>
            </li>
            <li className="flex items-center space-x-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-earth-green flex-shrink-0" />
              <span className="text-sm sm:text-base">Global Exporters & Importers</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;