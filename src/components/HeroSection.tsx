import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Leaf, Award } from "lucide-react";
import heroImage from "@/assets/hero-dairy-farm.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gir cows in Gujarat dairy farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-green/80 via-earth-green/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm">
            🏆 India's Oldest A2 Dairy Brand
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            India's First
            <span className="block text-golden-accent">A2 Dairy Social Enterprise</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-warm-cream mb-8 max-w-3xl mx-auto">
            Partnering with 4000+ Gir cow farmers to deliver premium A2 ghee through ethical sourcing and Ahimsa milk production
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Users className="h-8 w-8 text-golden-accent mb-2 mx-auto" />
              <div className="text-2xl font-bold">4000+</div>
              <div className="text-sm opacity-90">Partner Farmers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Leaf className="h-8 w-8 text-golden-accent mb-2 mx-auto" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Ahimsa Sourcing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Award className="h-8 w-8 text-golden-accent mb-2 mx-auto" />
              <div className="text-2xl font-bold">A2 Certified</div>
              <div className="text-sm opacity-90">Premium Quality</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Request Bulk Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="trust" size="lg">
              Explore Supply Chain
            </Button>
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