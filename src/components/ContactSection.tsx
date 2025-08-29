import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Start Your <span className="text-earth-green">Partnership Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to source premium A2 ghee for your business? Get a custom quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-elevated">
            <h3 className="text-xl font-semibold text-foreground mb-6">Request Bulk Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="volume">Monthly Volume Required (kg) *</Label>
                  <Input id="volume" placeholder="e.g., 1000" />
                </div>
                <div>
                  <Label htmlFor="location">Delivery Location</Label>
                  <Input id="location" placeholder="City, State" />
                </div>
              </div>

              <div>
                <Label htmlFor="requirements">Specific Requirements</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Please describe your packaging preferences, quality requirements, or any other specific needs..."
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Submit Quote Request
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-earth-green mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">krishi.naturals@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-earth-green mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-earth-green mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div className="text-muted-foreground">Gujarat, India</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-earth-green mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Partnership Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                  <span className="text-muted-foreground">Competitive bulk pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                  <span className="text-muted-foreground">Flexible payment terms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                  <span className="text-muted-foreground">Custom packaging options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                  <span className="text-muted-foreground">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                  <span className="text-muted-foreground">Quality guarantee</span>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;