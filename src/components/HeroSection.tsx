import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Users, Leaf, Award, Factory, Store, Heart, ChefHat, Globe, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import { openWhatsAppForQuote } from "@/services/whatsappService";
import OptimizedImage from "@/components/OptimizedImage";

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
    {/* Mobile Layout - Separate Slider and Text */}
    <section id="home" className="md:hidden relative overflow-hidden scroll-mt-20 pt-16">
      {/* Image Carousel - Top Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Carousel 
          setApi={setApi}
          className="w-full h-full"
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
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority={index === 0}
                    width={1920}
                    height={1080}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Indicators - Over Image */}
        {heroImages.length > 0 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
            <div className="flex justify-center space-x-1.5 sm:space-x-2 bg-black/40 backdrop-blur-md rounded-full px-1.5 py-1 sm:px-2 sm:py-1.5 shadow-lg">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`slider-indicator ${
                    currentIndex === index 
                      ? 'bg-white/90 shadow-lg scale-110' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  onClick={() => {
                    api?.scrollTo(index);
                    // Pause autoplay briefly when user interacts
                    api?.plugins()?.autoplay?.stop();
                    setTimeout(() => api?.plugins()?.autoplay?.play(), 3000);
                  }}
                  aria-label={`Go to slide ${index + 1} of ${heroImages.length}`}
                  aria-current={currentIndex === index ? 'true' : 'false'}
                >
                  <div className={`slider-indicator-dot ${
                    currentIndex === index ? 'bg-white' : 'bg-white/90'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Section - Below Images */}
      <div className="bg-gradient-to-b from-background to-earth-green/5 py-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Logo and Brand - Vertical Stack */}
          <div className="flex flex-col items-center justify-center space-y-3 ">
            <img 
              src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png" 
              alt="GIREJ Logo" 
              className="w-16 h-16 object-contain"
              width="64"
              height="64"
              loading="eager"
              decoding="async"
            />
            <div className="bg-earth-green/10 backdrop-blur-md rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-earth-green/20 shadow-lg text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                India's Trusted Bulk A2 Cow Ghee Supplier
              </h1>
            </div>
          </div>

          {/* Key Value Proposition */}
          <div className="text-center ">
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed ">
              Premium A2 Gir cow ghee for B2B buyers, wholesalers & exporters
            </p>
            
            {/* Trust Badges - Horizontal */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base xl:text-lg">
              <span className="bg-earth-green/15 text-earth-green px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-earth-green/30 whitespace-nowrap font-medium">
                ✓ 5000+ Farmers Network
              </span>
              <span className="bg-trust-blue/15 text-trust-blue px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-trust-blue/30 whitespace-nowrap font-medium">
                ✓ FSSAI Certified
              </span>
              <span className="bg-golden-accent/15 text-farmer-brown px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-golden-accent/30 whitespace-nowrap font-medium">
                ✓ Export Ready
              </span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <button 
              className="w-4 h-6 border border-earth-green/60 rounded-full flex justify-center cursor-pointer hover:border-earth-green/80 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-earth-green/50 min-h-[24px] min-w-[24px] touch-manipulation animate-bounce"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Scroll to next section"
            >
              <div className="w-0.5 h-1.5 bg-earth-green/70 rounded-full mt-1.5"></div>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Desktop Layout - Keep Original */}
    <section id="home" className="hidden md:flex relative min-h-[100vh] items-center justify-center overflow-hidden scroll-mt-20 md:scroll-mt-24 hero-mobile pt-[4.5rem]">
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
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority={index === 0}
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-girej-black/40 via-girej-black/60 to-girej-black/80 sm:bg-gradient-to-r sm:from-girej-black/60 sm:via-girej-black/50 sm:to-girej-black/40 md:from-girej-black/70 md:via-girej-black/40 md:to-girej-black/20"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 safe-area-top pt-16 sm:pt-20">
        {/* Main Hero Content - Top Centered */}
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 px-4 hero-content">
          {/* Logo and Brand - Side by Side */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            
            <div className="bg-white/15 backdrop-blur-md flex items-center justify-center rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border border-white/30 shadow-2xl animate-fade-in">
            <img 
              src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png" 
              alt="GIREJ Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-lg flex-shrink-0"
              width="96"
              height="96"
              loading="eager"
              decoding="async"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              India's Trusted Bulk A2 Cow Ghee Supplier
            </h1>
            </div>
          </div>

          {/* Key Value Proposition */}
          <div className="mt-2 sm:mt-3 md:mt-4">
            <p className="text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed px-4">
              Premium A2 Gir cow ghee for B2B buyers, wholesalers & exporters
            </p>
          
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Small */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce z-20">
        <button 
          className="w-5 h-8 border border-white/60 rounded-full flex justify-center cursor-pointer hover:border-white/80 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/50 min-h-[32px] min-w-[32px] touch-manipulation"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to next section"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
        </button>
      </div>

      {/* Carousel Indicators - Better positioned for mobile */}
      {heroImages.length > 0 && (
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20">
          <div className="flex justify-center space-x-1.5 sm:space-x-2 bg-black/40 backdrop-blur-md rounded-full px-1.5 py-1 sm:px-2 sm:py-1.5 shadow-lg">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`slider-indicator ${
                  currentIndex === index 
                    ? 'bg-white/90 shadow-lg scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => {
                  api?.scrollTo(index);
                  // Pause autoplay briefly when user interacts
                  api?.plugins()?.autoplay?.stop();
                  setTimeout(() => api?.plugins()?.autoplay?.play(), 3000);
                }}
                aria-label={`Go to slide ${index + 1} of ${heroImages.length}`}
                aria-current={currentIndex === index ? 'true' : 'false'}
              >
                <div className={`slider-indicator-dot ${
                  currentIndex === index ? 'bg-white' : 'bg-white/90'
                }`} />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
    
    {/* Trust Indicators - Fixed for light background */}
    <div className="bg-gradient-to-b from-transparent via-background/50 to-background py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-earth-green/10 backdrop-blur-md rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-earth-green/20 shadow-2xl transition-all duration-300 hover:bg-earth-green/15">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-earth-green flex-shrink-0" />
              <span className="text-earth-green font-semibold text-sm sm:text-base text-center sm:text-left">5000+ Farmers Network</span>
            </div>
          </div>
          <div className="bg-trust-blue/10 backdrop-blur-md rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-trust-blue/20 shadow-2xl transition-all duration-300 hover:bg-trust-blue/15">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Store className="w-5 h-5 sm:w-6 sm:h-6 text-trust-blue flex-shrink-0" />
              <span className="text-trust-blue font-semibold text-sm sm:text-base text-center sm:text-left">Supplying to 20+ Brands</span>
            </div>
          </div>
          <div className="bg-golden-accent/10 backdrop-blur-md rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-golden-accent/20 shadow-2xl transition-all duration-300 hover:bg-golden-accent/15 sm:col-span-1">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-farmer-brown flex-shrink-0" />
              <span className="text-farmer-brown font-semibold text-sm sm:text-base text-center sm:text-left">FSSAI Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* CTA Buttons Below Hero */}
    <div className="bg-gradient-to-b from-background to-earth-green/5 py-6 sm:py-8 md:py-10 safe-area-bottom -mt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Source Premium A2 Ghee?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Get instant pricing and samples within 24 hours
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-earth-green hover:bg-earth-green/90 text-white px-6 sm:px-8 md:px-10 touch-manipulation shadow-elevated hover:shadow-trust transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              👉 Request Bulk Quote Today
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="group border-2 border-earth-green text-earth-green hover:bg-earth-green hover:text-white px-6 sm:px-8 md:px-10 touch-manipulation shadow-soft hover:shadow-elevated transition-all duration-300 w-full sm:w-auto"
              onClick={() => openWhatsAppForQuote()}
            >
              💬 Chat on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* SEO Content Section */}
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
          Your Reliable Bulk A2 Ghee Supply Partner
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground mb-6 sm:mb-8">
          Powering India's Top Food & Wellness Brands with Consistent A2 Gir Ghee.
        </p>
        
        <div className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
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