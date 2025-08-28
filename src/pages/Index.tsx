import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BSupplySection from "@/components/BSupplySection";
import ImpactSection from "@/components/ImpactSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BSupplySection />
      <ImpactSection />
      <MediaSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-farmer-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-golden-accent mb-4">GIREJ</h3>
              <p className="text-white/80 mb-4">
                India's first A2 dairy social enterprise, committed to ethical sourcing and farmer welfare.
              </p>
              <div className="text-sm text-white/60">
                © 2024 GIREJ. All rights reserved.
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-white/80">
                <div><a href="#about" className="hover:text-golden-accent transition-colors">About Us</a></div>
                <div><a href="#impact" className="hover:text-golden-accent transition-colors">Our Impact</a></div>
                <div><a href="#products" className="hover:text-golden-accent transition-colors">Products</a></div>
                <div><a href="#contact" className="hover:text-golden-accent transition-colors">Contact</a></div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80">
                <div>business@girej.com</div>
                <div>+91 98765 43210</div>
                <div>Gujarat, India</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
