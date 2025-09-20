import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import upayaArticleThumb from "@/assets/upaya-article-thumb.jpg";
import yourstoryArticleThumb from "@/assets/yourstory-article-thumb.jpg";

const MediaSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const articles = [
    {
      id: 1,
      title: "TISS grad's start-up to help preserve native cow breeds",
      subtitle: "Times Group",
      image: "/lovable-uploads/5b8140f7-2bb5-40d0-85e6-d8d55960abd4.png",
      url: "#"
    },
    {
      id: 2,
      title: "Improving Dairy Farmers' Incomes with Sustainable Farming Methods",
      subtitle: "Upaya SV",
      image: upayaArticleThumb,
      url: "https://www.upayasv.org/blog/2019/9/11/improving-dairy-farmers-incomes-with-sustainable-farming-methods"
    },
    {
      id: 3,
      title: "Krishi Naturals Story",
      subtitle: "YourStory",
      image: yourstoryArticleThumb,
      url: "https://yourstory.com/2015/01/krishi-naturals"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [articles.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
    pauseAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume after 3 seconds
  };

  const { ref: carouselRef } = useSwipeGesture({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 50,
    preventDefault: false
  });

  return (
    <section id="media" className="py-6 sm:py-8 lg:py-12 bg-gradient-warm scroll-mt-20 md:scroll-mt-24 mobile-tight-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <Badge variant="secondary" className="mb-2">
            In Media
          </Badge>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            GIREJ <span className="text-earth-green">In The Spotlight</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey and impact have been recognized by leading media outlets and industry experts such as Guardian UK, Be Movement Singapore, Businessline, Business Standard, Times of India, Your Story etc.
          </p>
        </div>



        {/* Article Slideshow */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-earth-green mb-4 sm:mb-6">Featured Articles</h3>
            <Card className="relative overflow-hidden max-w-3xl mx-auto group mobile-card-spacing">
              <div ref={carouselRef as React.RefObject<HTMLDivElement>} className="relative h-64 sm:h-80 lg:h-96 xl:h-[32rem] select-none">
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet={`${articles[currentSlide].image}?w=640&h=320&fit=crop&q=85 640w`}
                    sizes="640px"
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet={`${articles[currentSlide].image}?w=768&h=384&fit=crop&q=90 768w`}
                    sizes="768px"
                  />
                  <img
                    src={`${articles[currentSlide].image}?w=1024&h=512&fit=crop&q=95`}
                    alt={articles[currentSlide].title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" 
                    decoding="async" 
                    sizes="(max-width: 640px) 640px, (max-width: 1024px) 768px, 1024px"
                    width="1024"
                    height="512"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Navigation buttons - positioned outside content area on mobile */}
                <button
                  onClick={prevSlide}
                  className="absolute -left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-200 min-h-[48px] min-w-[48px] touch-manipulation shadow-lg border border-white/20"
                  aria-label="Previous article"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-800" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-200 min-h-[48px] min-w-[48px] touch-manipulation shadow-lg border border-white/20"
                  aria-label="Next article"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-800" />
                </button>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <div className="mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm lg:text-base bg-earth-green/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium">
                      {articles[currentSlide].subtitle}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                    {articles[currentSlide].title}
                  </h4>
                  {articles[currentSlide].url !== "#" && (
                    <a
                      href={articles[currentSlide].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-earth-green hover:bg-earth-green/90 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl transition-all duration-300 font-semibold min-h-[44px] sm:min-h-[48px] touch-manipulation shadow-elevated hover:shadow-trust text-sm sm:text-base mobile-full-width justify-center sm:w-auto"
                    >
                      Read Article <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Slide indicators - positioned above content with better touch targets */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30">
                <div className="flex gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
                  {articles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation ${
                        index === currentSlide ? 'bg-white/90' : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1} of ${articles.length}`}
                      aria-current={index === currentSlide ? 'true' : 'false'}
                    >
                      <div className={`rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-white/80'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg" 
            className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-8 text-sm sm:text-base lg:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation border-2 shadow-soft hover:shadow-elevated transition-all duration-300 mobile-full-width sm:w-auto"
          >
            🥛 Become a Bulk Buyer Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;