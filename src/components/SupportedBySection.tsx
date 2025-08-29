import tissLogo from "@/assets/logos/tiss-logo.png";
import iimLogo from "@/assets/logos/iim-ahmedabad-logo.png";
import dbsLogo from "@/assets/logos/dbs-logo.png";
import sapLogo from "@/assets/logos/sap-logo.png";
import upayaLogo from "@/assets/logos/upaya-logo.png";

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
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Supported by Leading Organizations
          </h3>
          
          {/* Logo Strip */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;