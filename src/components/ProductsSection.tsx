import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Shield, Award, Truck, CheckCircle, FlaskConical, Microscope, Factory } from "lucide-react";
import { openWhatsAppForPrivateLabel } from "@/services/whatsappService";

const ProductsSection = () => {
  const productRange = [
    {
      title: "15 KG Bulk A2 Gir Cow Ghee",
      description: "Ideal for distributors & retailers",
      icon: Package,
      image: "/lovable-uploads/3e0fb42c-715a-49c1-adcd-60893d213855.png",
      color: "earth-green"
    },
    {
      title: "500 ml & 1 ltr Jars",
      description: "Customizable Private Label A2 Cow Ghee – Your Brand, Our Authentic Gir Cow Ghee",
      icon: Package,
      image: "/lovable-uploads/84106b90-8bb9-4d02-a947-3940ef4c1211.png",
      color: "trust-blue"
    }
  ];

  const certifications = [
    { label: "FSSAI Certified", icon: CheckCircle, highlight: true },
    { label: "Lab tested for pure A2 cow ghee", icon: FlaskConical, highlight: false },
    { label: "Lab tested for A2 ghee quality and purity", icon: Microscope, highlight: false },
    { label: "Hygienic Bilona method + modern pasteurization", icon: Factory, highlight: false }
  ];

  return (
    <section id="products" className="py-8 bg-background scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            Our range of A2 Cow Ghee products
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ethically sourced, FSSAI-certified, and trusted by 20+ leading brands for wholesale and export.
          </p>
        </div>

        {/* Product Range Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {productRange.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="p-6 lg:p-8 text-center hover:shadow-elevated transition-all duration-300 max-w-lg mx-auto group">
                {product.image ? (
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto mb-6 lg:mb-8 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <picture>
                      <source 
                        media="(max-width: 640px)" 
                        srcSet={`${product.image}?w=256&h=256&fit=crop&q=85 256w`}
                        sizes="256px"
                      />
                      <source 
                        media="(max-width: 1024px)" 
                        srcSet={`${product.image}?w=288&h=288&fit=crop&q=90 288w`}
                        sizes="288px"
                      />
                      <img 
                        src={`${product.image}?w=320&h=320&fit=crop&q=95`} 
                        alt={product.title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy" 
                        decoding="async" 
                        sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                        width="320"
                        height="320"
                      />
                    </picture>
                  </div>
                ) : (
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 lg:mb-8 bg-${product.color}/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 lg:h-10 lg:w-10 text-${product.color}`} />
                  </div>
                )}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 lg:mb-6">{product.title}</h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Bilona A2 Ghee Making Process */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-4 sm:mb-6">Bilona A2 Ghee Making</h3>
          <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
            <picture>
              <source 
                media="(max-width: 640px)" 
                srcSet="/lovable-uploads/cb2efa0d-f93a-496f-9912-5ad39986d624.png?w=384&h=288&fit=crop&q=85 384w"
                sizes="384px"
              />
              <source 
                media="(max-width: 1024px)" 
                srcSet="/lovable-uploads/cb2efa0d-f93a-496f-9912-5ad39986d624.png?w=512&h=384&fit=crop&q=90 512w"
                sizes="512px"
              />
              <img 
                src="/lovable-uploads/cb2efa0d-f93a-496f-9912-5ad39986d624.png?w=768&h=576&fit=crop&q=95" 
                alt="The Art of A2 Gir Cow Ghee - Traditional Bilona Process"
                className="w-full h-auto rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300"
                loading="lazy" 
                decoding="async" 
                sizes="(max-width: 640px) 384px, (max-width: 1024px) 512px, 768px"
                width="768"
                height="576"
              />
            </picture>
          </div>
        </div>

        {/* Certifications & Quality */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <Card className="p-4 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Certifications & Quality</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Certifications List */}
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`p-1.5 sm:p-2 rounded-full ${cert.highlight ? 'bg-earth-green/10' : 'bg-muted/10'}`}>
                        <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${cert.highlight ? 'text-earth-green' : 'text-muted-foreground'}`} />
                      </div>
                      <span className={`text-sm sm:text-base ${cert.highlight ? 'text-foreground font-semibold' : 'text-foreground'}`}>
                        {cert.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Test Report Image */}
              <div className="flex justify-center mt-6 lg:mt-0">
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet="/lovable-uploads/b4e4adfe-2ab2-4e43-9911-677db41f19ec.png?w=192&h=256&fit=crop&q=85 192w"
                    sizes="192px"
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet="/lovable-uploads/b4e4adfe-2ab2-4e43-9911-677db41f19ec.png?w=256&h=342&fit=crop&q=90 256w"
                    sizes="256px"
                  />
                  <img 
                    src="/lovable-uploads/b4e4adfe-2ab2-4e43-9911-677db41f19ec.png?w=320&h=427&fit=crop&q=95" 
                    alt="A2A2 Milk Typing Test - Genetic Testing Report"
                    className="max-w-48 sm:max-w-64 lg:max-w-80 h-auto rounded-xl shadow-soft hover:scale-105 transition-all duration-300"
                    loading="lazy" 
                    decoding="async" 
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                    width="320"
                    height="427"
                  />
                </picture>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-earth-green hover:bg-earth-green/90 text-white font-semibold py-4 px-6 lg:py-5 lg:px-8 text-base lg:text-lg min-h-[56px] touch-manipulation shadow-elevated hover:shadow-trust transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              👉 Request 15kg Tin Price
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold py-4 px-6 lg:py-5 lg:px-8 text-base lg:text-lg min-h-[56px] touch-manipulation border-2 shadow-soft hover:shadow-elevated transition-all duration-300"
              onClick={() => openWhatsAppForPrivateLabel()}
            >
              💬 Chat About Private Label
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Get instant pricing and samples within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;