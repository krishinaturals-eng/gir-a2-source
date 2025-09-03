import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Users, Leaf, Award, Factory, Store, Heart, ChefHat, Globe, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import { openWhatsAppForQuote } from "@/services/whatsappService";

const heroImages = [
  {
    src: "/lovable-uploads/f85b5514-c884-4aae-97ae-3b1138e67833.png", 
    alt: "Two healthy Gir cows standing in lush green pasture"
  },
  {
    src: "/lovable-uploads/8bb63648-1089-47d6-8dd1-38bc493e436c.png",
    alt: "Farmer with large herd of Gir cows grazing in open grassland"
  },
  {
    src: "/lovable-uploads/7731ca24-8033-4d29-856d-c934004f0984.png",
    alt: "Mixed herd of brown and white Gir cows feeding in natural pasture"
  }
];

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref: carouselRef } = useSwipeGesture({
    onSwipeLeft: () => api?.scrollNext(),
    onSwipeRight: () => api?.scrollPrev(),
    threshold: 50,
    preventDefault: false
  });

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
                    media="(max-width: 480px)" 
                    srcSet={`${image.src}?w=480&h=800&fit=crop&q=85 480w`}
                    sizes="480px"
                  />
                  <source 
                    media="(max-width: 768px)" 
                    srcSet={`${image.src}?w=768&h=1024&fit=crop&q=85 768w`}
                    sizes="768px"
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet={`${image.src}?w=1024&h=768&fit=crop&q=85 1024w`}
                    sizes="1024px"
                  />
                  <source 
                    media="(max-width: 1440px)" 
                    srcSet={`${image.src}?w=1440&h=900&fit=crop&q=90 1440w`}
                    sizes="1440px"
                  />
                  <img
                    src={`${image.src}?w=1920&h=1080&fit=crop&q=90`}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-girej-black/60 via-girej-black/50 to-girej-black/40 md:from-girej-black/70 md:via-girej-black/40 md:to-girej-black/20"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top Logo and Headline */}
        <div className="pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 sm:space-x-4 bg-white/15 backdrop-blur-md rounded-xl px-3 py-3 sm:px-6 sm:py-4 border border-white/30 shadow-2xl animate-fade-in">
              <picture className="flex-shrink-0">
                <source 
                  media="(max-width: 480px)" 
                  srcSet="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=40&h=40&q=90 40w"
                  sizes="40px"
                />
                <source 
                  media="(max-width: 768px)" 
                  srcSet="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=48&h=48&q=90 48w"
                  sizes="48px"
                />
                <img 
                  src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=56&h=56&q=90" 
                  alt="GIREJ Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  width="56"
                  height="56"
                />
              </picture>
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight">
                India's Trusted Bulk A2 Cow Ghee Supplier
              </h1>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

      </div>

      {/* Metrics at bottom */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 z-20 px-4 w-full max-w-5xl">
        <div className="flex justify-center gap-4 sm:gap-6">
          <div className="bg-white/15 backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-white/30 shadow-2xl transition-all duration-300 hover:bg-white/20">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-xs sm:text-sm text-center leading-tight">Network of 5000+ Gir Cow Farmers</span>
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-white/30 shadow-2xl transition-all duration-300 hover:bg-white/20">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-xs sm:text-sm text-center leading-tight">Supplying to 20+ Brands</span>
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        {heroImages.length > 0 && (
          <div className="flex justify-center space-x-2 mt-3 sm:mt-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 min-h-[20px] min-w-[20px] flex items-center justify-center touch-manipulation ${
                currentIndex === index ? 'bg-white w-3 sm:w-4' : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer hover:border-white/70 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    
    {/* CTA Buttons Below Hero */}
    <div className="bg-gradient-warm py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-earth-green hover:bg-earth-green/90 text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 touch-manipulation min-h-[56px] shadow-elevated hover:shadow-trust transition-all duration-300 font-semibold w-full sm:w-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            👉 Request Bulk Quote Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="group border-2 border-earth-green text-earth-green hover:bg-earth-green hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 touch-manipulation min-h-[56px] shadow-soft hover:shadow-elevated transition-all duration-300 font-semibold w-full sm:w-auto"
            onClick={() => openWhatsAppForQuote()}
          >
            💬 Chat on WhatsApp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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