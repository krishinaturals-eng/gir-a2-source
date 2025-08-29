import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MediaSection = () => {
  return (
    <section id="media" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            In Media
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            GIREJ <span className="text-earth-green">In The Spotlight</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey and impact have been recognized by leading media outlets and industry experts such as Guardian UK, Be Movement Singapore, Businessline, Business Standard, Times of India, Your Story etc.
          </p>
        </div>



        {/* Media Coverage */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/5b8140f7-2bb5-40d0-85e6-d8d55960abd4.png" 
              alt="TISS grad's start-up to help preserve native cow breeds - Media Coverage"
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-earth-green mb-4">Featured Articles</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.upayasv.org/blog/2019/9/11/improving-dairy-farmers-incomes-with-sustainable-farming-methods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-trust-blue hover:text-trust-blue/80 underline transition-colors"
                >
                  Improving Dairy Farmers' Incomes with Sustainable Farming Methods - Upaya SV
                </a>
                <a 
                  href="https://yourstory.com/2015/01/krishi-naturals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-trust-blue hover:text-trust-blue/80 underline transition-colors"
                >
                  Krishi Naturals Story - YourStory
                </a>
              </div>
            </div>
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