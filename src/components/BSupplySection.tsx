import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Package, Heart, Globe, Scale, Package2, TrendingUp, IndianRupee } from "lucide-react";

const BSupplySection = () => {
  return (
    <section id="partnership" className="py-8 bg-background scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-4">
            B2B Supply
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            <span className="text-earth-green">Bulk A2 Ghee Supplier India</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto">
            Girej is a trusted bulk A2 ghee supplier in India, backed by 5,000+ Gir cow farmers to ensure authentic quality and reliable quantity.
          </p>
        </div>

        {/* Bulk Order Specifications */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Bulk Order Specifications</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive bulk supply solutions tailored for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* MOQ */}
            <Card className="p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-earth-green/10 rounded-full flex items-center justify-center">
                <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-earth-green" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Minimum Order</h4>
              <p className="text-lg sm:text-xl font-bold text-earth-green mb-1">50 kg</p>
              <p className="text-xs text-muted-foreground">Starting MOQ</p>
            </Card>

            {/* Packaging */}
            <Card className="p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-trust-blue/10 rounded-full flex items-center justify-center">
                <Package2 className="h-5 w-5 sm:h-6 sm:w-6 text-trust-blue" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Packaging</h4>
              <p className="text-xs sm:text-sm text-foreground mb-1">15 KG tins (16.5L)</p>
              <p className="text-xs text-muted-foreground">500ml & 1L jars</p>
            </Card>

            {/* Capacity */}
            <Card className="p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-golden-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-golden-accent" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Monthly Supply</h4>
              <p className="text-lg sm:text-xl font-bold text-golden-accent mb-1">5 tonnes</p>
              <p className="text-xs text-muted-foreground">Capacity/month</p>
            </Card>

            {/* Pricing */}
            <Card className="p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-girej-red/10 rounded-full flex items-center justify-center">
                <IndianRupee className="h-5 w-5 sm:h-6 sm:w-6 text-girej-red" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Pricing</h4>
              <p className="text-xs sm:text-sm text-foreground mb-1">Competitive rates</p>
              <p className="text-xs text-muted-foreground">Volume discounts</p>
            </Card>
          </div>

          {/* Detailed Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Packaging Formats</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">15 KG tins (16.5 litres)</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Bulk ghee supply for manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">500 ml & 1 ltr jars</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Private label & retail-ready packaging</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-earth-green/5">
              <h4 className="text-lg sm:text-xl font-semibold text-earth-green mb-4 sm:mb-6">Pricing Benefits</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">Competitive A2 ghee wholesale prices</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Volume-based discount structure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium">Long-term B2B contracts</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Consistent supply & stable costs</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg"
            >
              👉 Request 15kg Tin Price
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg"
            >
              Get Private Label Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BSupplySection;