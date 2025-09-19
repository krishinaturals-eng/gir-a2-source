import tissLogo from "@/assets/logos/tiss-logo-new.jpeg";
import iimLogo from "@/assets/logos/iim-ahmedabad-logo.png";
import dbsLogo from "@/assets/logos/dbs-logo-new.jpeg";
import sapLogo from "@/assets/logos/sap-logo-new.jpeg";
import upayaLogo from "@/assets/logos/upaya-logo-new.jpeg";

const SupportedBySection = () => {
  const partners = [
    {
      name: "Tata Institute of Social Sciences",
      logo: tissLogo,
    },
    {
      name: "IIM Ahmedabad",
      logo: iimLogo,
    },
    {
      name: "DBS India",
      logo: dbsLogo,
    },
    {
      name: "SAP India",
      logo: sapLogo,
    },
    {
      name: "Upaya Social Ventures",
      logo: upayaLogo,
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-lg lg:text-xl font-semibold text-muted-foreground mb-6 lg:mb-8">
            Supported by Leading Organizations
          </h3>
          
          {/* Logo Strip */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 lg:p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 group"
              >
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet={`${partner.logo}?w=120&h=60&fit=contain&q=90 120w`}
                    sizes="120px"
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet={`${partner.logo}?w=160&h=80&fit=contain&q=95 160w`}
                    sizes="160px"
                  />
                  <img
                    src={`${partner.logo}?w=200&h=100&fit=contain&q=95`}
                    alt={partner.name}
                    className="max-h-12 sm:max-h-14 lg:max-h-16 xl:max-h-20 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy" 
                    decoding="async" 
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                    width="200"
                    height="100"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;