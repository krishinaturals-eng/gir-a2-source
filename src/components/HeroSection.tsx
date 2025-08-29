import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Users, Leaf, Award, Factory, Store, Heart, ChefHat, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
    <section id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 md:scroll-mt-24 pb-[env(safe-area-inset-bottom)]">
      {/* Background Carousel */}
      <Carousel 
        setApi={setApi}
        className="absolute inset-0 w-full h-full"
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                <picture className="w-full h-full">
                  <source 
                    media="(max-width: 640px)" 
                    srcSet={`${image.src}?w=640&h=1136&fit=crop&q=80 640w`}
                    sizes="640px"
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet={`${image.src}?w=1024&h=768&fit=crop&q=85 1024w`}
                    sizes="1024px"
                  />
                  <img
                    src={`${image.src}?w=1920&h=1080&fit=crop&q=90`}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-girej-black/70 via-girej-black/40 to-girej-black/20"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top Content */}
        <div className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Content */}
            <div className="text-center text-white space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in">
              {/* Logo and Brand */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-full px-3 py-3 sm:px-6 sm:py-4 border border-white/30 max-w-[90vw] sm:max-w-none shadow-2xl">
                  <picture className="flex-shrink-0">
                    <source 
                      media="(max-width: 640px)" 
                      srcSet="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=32&h=32&q=90 32w"
                      sizes="32px"
                    />
                    <img 
                      src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=48&h=48&q=90" 
                      alt="GIREJ Logo" 
                      className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                      width="48"
                      height="48"
                    />
                  </picture>
                  <span className="text-xs sm:text-lg md:text-xl font-semibold text-white text-center leading-tight">India's Trusted Bulk A2 Cow Ghee Supplier</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

      </div>

      {/* Metrics at bottom */}
      <div className="absolute bottom-20 md:bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <div className="bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-white/30 w-full max-w-xs sm:max-w-none shadow-2xl transition-all duration-300 hover:bg-white/20">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-xs sm:text-sm text-center leading-tight">Network of 5000+ Gir Cow Farmers</span>
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-white/30 w-full max-w-xs sm:max-w-none shadow-2xl transition-all duration-300 hover:bg-white/20">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-xs sm:text-sm text-center leading-tight">Supplying to 20+ Brands</span>
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer hover:border-white/70 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    
    {/* CTA Buttons Below Hero */}
    <div className="bg-gradient-warm py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="group bg-earth-green hover:bg-earth-green/90 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 touch-manipulation min-h-[48px] shadow-elevated hover:shadow-trust transition-all duration-300"
          >
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