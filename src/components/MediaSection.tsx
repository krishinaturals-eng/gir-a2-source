import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, Video, Award, Calendar } from "lucide-react";

const MediaSection = () => {
  const mediaHighlights = [
    {
      icon: Newspaper,
      title: "Featured in Economic Times",
      description: "GIREJ's impact on farmer welfare and A2 dairy innovation",
      date: "March 2024",
      color: "trust-blue"
    },
    {
      icon: Video,
      title: "Documentary Feature",
      description: "Traditional Bilona method meets modern technology",
      date: "February 2024",
      color: "earth-green"
    },
    {
      icon: Award,
      title: "Best Dairy Social Enterprise",
      description: "Gujarat State Award for sustainable farming practices",
      date: "January 2024",
      color: "golden-accent"
    },
    {
      icon: Calendar,
      title: "Industry Conference",
      description: "Speaker at National Dairy Development Summit",
      date: "December 2023",
      color: "girej-red"
    }
  ];

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
            Our journey and impact have been recognized by leading media outlets and industry experts.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mediaHighlights.map((media, index) => {
            const IconComponent = media.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                <div className={`w-12 h-12 mb-4 bg-${media.color}/10 rounded-full flex items-center justify-center`}>
                  <IconComponent className={`h-6 w-6 text-${media.color}`} />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{media.date}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{media.title}</h3>
                <p className="text-sm text-muted-foreground">{media.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Press Releases */}
        <div className="bg-earth-green/5 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-xl font-semibold text-earth-green mb-4">Press & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-muted-foreground">Media Features</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-muted-foreground">Industry Awards</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">10+</div>
              <div className="text-muted-foreground">Speaking Engagements</div>
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
            📰 View Full Media Kit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;