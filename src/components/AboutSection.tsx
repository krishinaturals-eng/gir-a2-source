import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            India's Pioneer in <span className="text-earth-green">A2 Dairy Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded as India's first A2 dairy social enterprise, GIREJ has been transforming lives through ethical dairy sourcing and premium A2 ghee production since our inception.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-earth-green/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-earth-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">First-Mover Advantage</h3>
                <p className="text-muted-foreground">
                  As India's oldest A2 dairy brand, we pioneered the ethical sourcing movement, establishing direct relationships with Gir cow farmers across Gujarat.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-trust-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ahimsa Philosophy</h3>
                <p className="text-muted-foreground">
                  Our commitment to Ahimsa (non-violence) ensures calf-first feeding, natural breeding practices, and humane treatment of all animals in our supply chain.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-farmer-brown" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Social Enterprise Mission</h3>
                <p className="text-muted-foreground">
                  Beyond profit, we focus on farmer welfare, providing premium pricing, training, and support to create sustainable livelihoods in rural Gujarat.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Leadership Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-earth-green/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-earth-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Dairy Industry Veterans</h4>
                  <p className="text-sm text-muted-foreground">25+ years combined experience</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Our leadership team combines deep agricultural expertise with modern supply chain management, ensuring both traditional values and contemporary business excellence.
              </div>
            </div>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-earth-green/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-earth-green mb-4">Our Mission</h3>
          <p className="text-lg text-foreground max-w-4xl mx-auto">
            To revolutionize India's dairy industry through ethical A2 milk sourcing, empowering farmers with sustainable livelihoods while delivering premium quality products that honor our ancient traditions and modern health consciousness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;