import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Bulk Supply", href: "#partnership" },
    { name: "Impact", href: "#impact" },
    { name: "In Media", href: "#media" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 z-[60] ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft' 
        : 'bg-background/90 backdrop-blur-sm border-b border-border/20 shadow-soft'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <picture>
              <source 
                media="(max-width: 640px)" 
                srcSet="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=40&h=40&q=90 40w"
                sizes="40px"
              />
              <img 
                src="/lovable-uploads/261dc2c9-3f90-4de4-955b-daf93b4c18f4.png?w=56&h=56&q=90" 
                alt="GIREJ - A2 Cow Milk Products, Established 2014" 
                className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-200 hover:scale-105"
                width="56"
                height="56"
              />
            </picture>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-earth-green px-3 py-2 text-sm xl:text-base font-medium transition-all duration-200 hover:bg-earth-green/5 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="hero" 
              size="sm"
              className="min-h-[44px] px-4 xl:px-6 text-sm xl:text-base font-medium shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="min-h-[44px] min-w-[44px] p-2 touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in z-[70] relative">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/98 backdrop-blur-md border-t border-border rounded-b-xl shadow-elevated">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-earth-green hover:bg-earth-green/5 block px-4 py-4 text-base font-medium transition-all duration-200 rounded-lg min-h-[48px] touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full min-h-[48px] text-base font-semibold touch-manipulation shadow-soft"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;