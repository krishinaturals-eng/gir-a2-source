import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BSupplySection from "@/components/BSupplySection";
import ImpactSection from "@/components/ImpactSection";
import SupportedBySection from "@/components/SupportedBySection";
import MediaSection from "@/components/MediaSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-earth-green text-white px-4 py-2 rounded-md z-[100] font-medium transition-all duration-200"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BSupplySection />
        <ImpactSection />
        <MediaSection />
        <FAQSection />
        <ContactSection />
        <SupportedBySection />
      </main>
      
      {/* Footer */}
      <footer className="bg-farmer-brown text-white py-8 sm:py-10 lg:py-12 safe-area-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-golden-accent mb-3 sm:mb-4">GIREJ</h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                India's first A2 dairy social enterprise, committed to ethical sourcing and farmer welfare.
              </p>
              <div className="text-xs sm:text-sm md:text-base text-white/60">
                © 2024 GIREJ. All rights reserved.
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2 text-white/80 text-sm sm:text-base md:text-lg">
                <div><a href="#about" className="hover:text-golden-accent transition-colors min-h-[44px] flex items-center">About Us</a></div>
                <div><a href="#impact" className="hover:text-golden-accent transition-colors min-h-[44px] flex items-center">Our Impact</a></div>
                <div><a href="#products" className="hover:text-golden-accent transition-colors min-h-[44px] flex items-center">Products</a></div>
                <div><a href="#faq" className="hover:text-golden-accent transition-colors min-h-[44px] flex items-center">FAQ</a></div>
                <div><a href="#contact" className="hover:text-golden-accent transition-colors min-h-[44px] flex items-center">Contact</a></div>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-2 text-white/80 text-sm sm:text-base md:text-lg">
                <div className="break-words">krishi.naturals@gmail.com</div>
                <div>+91 9004850052</div>
                <div className="break-words">Makarpura GIDC, Vadodara, Gujarat 390010</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
