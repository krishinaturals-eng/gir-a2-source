import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import upayaArticleThumb from "@/assets/upaya-article-thumb.jpg";
import yourstoryArticleThumb from "@/assets/yourstory-article-thumb.jpg";

const MediaSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [articles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section id="media" className="py-8 bg-gradient-warm scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-2">
            In Media
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            GIREJ <span className="text-earth-green">In The Spotlight</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey and impact have been recognized by leading media outlets and industry experts such as Guardian UK, Be Movement Singapore, Businessline, Business Standard, Times of India, Your Story etc.
          </p>
        </div>



        {/* Article Slideshow */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-earth-green mb-3">Featured Articles</h3>
            <Card className="relative overflow-hidden max-w-2xl mx-auto">
              <div className="relative h-64 sm:h-80">
                <img
                  src={articles[currentSlide].image}
                  alt={articles[currentSlide].title}
                  className="w-full h-full object-cover"
                  loading="lazy" decoding="async" sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                  aria-label="Previous article"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                  aria-label="Next article"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="text-sm bg-earth-green/80 px-3 py-1 rounded-full">
                      {articles[currentSlide].subtitle}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 leading-tight">
                    {articles[currentSlide].title}
                  </h4>
                  {articles[currentSlide].url !== "#" && (
                    <a
                      href={articles[currentSlide].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-earth-green hover:bg-earth-green/90 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Read Article <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg" 
            className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold py-4 px-8 text-lg"
          >
            🥛 Become a Bulk Buyer Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;