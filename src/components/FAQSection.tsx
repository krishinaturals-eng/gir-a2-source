import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const FAQSection = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const faqs = [
    {
      question: "Who are the top suppliers or brands offering bulk A2 cow ghee in India?",
      answer: "There are many suppliers offering bulk A2 cow ghee and private-label services, but it's important to choose brands that work directly with farmers and operate in regions known for authentic indigenous cows. States like Gujarat and Rajasthan have strong populations of Gir, Tharparkar, and Rathi cows, increasing the likelihood of sourcing pure A2 desi cow ghee."
    },
    {
      question: "How can I verify the authenticity of A2 ghee in bulk orders? What certifications should I check before buying?",
      answer: "Since A2 ghee is pure fat, it cannot be verified through an A2 protein test alone. Instead, check:\n\n• The supplier's sourcing model (direct farm linkages)\n• The region they work in\n• The number of indigenous cows/farmers they are connected with\n• Their manufacturing process (Bilona vs. cream-based)\n\nFor purity, rely on FSSAI-approved tests, such as:\n\n• Nutritional analysis\n• Adulteration and contamination checks\n• Fat profile and quality parameters\n\nThese ensure the ghee meets authentic A2 and purity standards."
    },
    {
      question: "What is the fair wholesale price of A2 or A2 Bilona ghee in bulk?",
      answer: "Prices vary by region and brand, but a fair wholesale rate typically ranges between ₹900 to ₹1,400 per litre for authentic A2 or A2 Bilona ghee."
    },
    {
      question: "Is the ghee made using the Bilona process or a cream-based method? Which cow breeds are used, and why is A2 ghee more expensive?",
      answer: "Girej A2 Ghee is produced using the traditional Bilona method from pure Gir cows of Gujarat. We work directly with 5,000+ Gir cow farmers.\n\nIt takes 25–30 litres of A2 milk to produce 1 litre of Gir cow ghee, which is why authentic A2 ghee is naturally more expensive than regular or cream-based ghee."
    },
    {
      question: "Can I get samples before placing a bulk A2 ghee order?",
      answer: "Yes, we provide sample jars for evaluation before confirming a bulk order."
    },
    {
      question: "Do suppliers offer custom or private-label packaging for bulk A2 ghee?",
      answer: "Yes, we offer custom private-label and white-label packaging tailored to your brand requirements."
    },
    {
      question: "What is the shelf life of bulk A2 ghee?",
      answer: "When stored in a dry, cool environment in food-grade steel or glass containers, A2 cow ghee can easily remain fresh for up to one year."
    },
    {
      question: "What is the average delivery time for bulk A2 ghee orders?",
      answer: "Bulk A2 ghee orders typically take 7 to 10 days, depending on order size and packaging requirements."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className={`py-6 sm:py-8 lg:py-12 bg-gradient-to-b from-background to-earth-green/5 scroll-mt-20 md:scroll-mt-24 transition-all duration-1000 mobile-tight-spacing ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <Badge variant="secondary" className="mb-3 sm:mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Bulk A2 Ghee Supply – Girej
          </p>
        </div>

        <Card className="p-4 sm:p-6 lg:p-8 shadow-elevated bg-card/50 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50 last:border-b-0 px-2 sm:px-4 hover:bg-earth-green/5 transition-colors rounded-lg"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold text-foreground hover:text-earth-green transition-colors py-4 sm:py-5 hover:no-underline [&[data-state=open]]:text-earth-green">
                  <span className="flex-1 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pb-4 sm:pb-5 pt-0">
                  <div className="whitespace-pre-line space-y-3">
                    {faq.answer.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.trim().startsWith('•') || paragraph.includes('\n•')) {
                        const lines = paragraph.split('\n');
                        return (
                          <div key={pIndex} className="space-y-2">
                            {lines.map((line, lineIndex) => {
                              if (line.trim().startsWith('•')) {
                                return (
                                  <div key={lineIndex} className="flex items-start space-x-3">
                                    <span className="text-earth-green font-bold mt-1 flex-shrink-0">•</span>
                                    <span>{line.replace('•', '').trim()}</span>
                                  </div>
                                );
                              }
                              return line.trim() ? <p key={lineIndex}>{line.trim()}</p> : null;
                            })}
                          </div>
                        );
                      }
                      return paragraph.trim() ? <p key={pIndex}>{paragraph.trim()}</p> : null;
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-earth-green hover:bg-earth-green/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-elevated hover:shadow-trust min-h-[48px] sm:min-h-[56px] text-base sm:text-lg"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/919004850052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-earth-green text-earth-green hover:bg-earth-green hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-soft hover:shadow-elevated min-h-[48px] sm:min-h-[56px] text-base sm:text-lg"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

