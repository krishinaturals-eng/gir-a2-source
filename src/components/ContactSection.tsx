import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { submitFormToGoogleSheets } from "@/services/formService";
import { openWhatsAppWithFormData } from "@/services/whatsappService";
import { analyticsService } from "@/services/analyticsService";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    volume: '',
    location: '',
    requirements: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.volume.trim()) newErrors.volume = 'Volume requirement is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Submit form to Google Sheets
      const result = await submitFormToGoogleSheets(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Track successful form submission
        analyticsService.trackFormSubmission('contact_form', {
          volume: formData.volume,
          location: formData.location
        });
        
        // Clear form data on success
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          volume: '',
          location: '',
          requirements: ''
        });
        
        // Scroll to success message
        setTimeout(() => {
          const successElement = document.querySelector('[data-success-message]');
          if (successElement) {
            successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-12 bg-background scroll-mt-20 md:scroll-mt-24 mobile-tight-spacing safe-area-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <Badge variant="secondary" className="mb-2">
            Get In Touch
          </Badge>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4">
            Start Your <span className="text-earth-green">Partnership Journey</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to source premium A2 ghee for your business? Get a custom quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="p-4 sm:p-6 lg:p-8 shadow-elevated mobile-card-spacing">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Request Bulk Quote</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div 
                data-success-message
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-bounce-in"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">Thank you for your inquiry!</p>
                  <p className="text-green-700 text-sm">We'll get back to you within 24 hours with a custom quote.</p>
                  <p className="text-green-600 text-xs mt-1">Your inquiry has been saved to our system.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-bounce-in">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Something went wrong</p>
                  <p className="text-red-700 text-sm">Please try again or contact us directly at +91 9004850052</p>
                  <p className="text-red-600 text-xs mt-1">You can also email us at krishi.naturals@gmail.com</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name" 
                    className={`min-h-[48px] text-base ${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <p id="firstName-error" className="text-red-500 text-sm mt-1" role="alert">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name" 
                    className={`min-h-[48px] text-base ${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input 
                  id="company" 
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your company name" 
                  className={`min-h-[48px] text-base ${errors.company ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@company.com" 
                    className={`min-h-[48px] text-base ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 XXXXX XXXXX" 
                    className={`min-h-[48px] text-base ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="volume">Monthly Volume Required (kg) *</Label>
                  <Input 
                    id="volume" 
                    value={formData.volume}
                    onChange={(e) => handleInputChange('volume', e.target.value)}
                    placeholder="e.g., 1000" 
                    className={`min-h-[48px] text-base ${errors.volume ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.volume && <p className="text-red-500 text-sm mt-1">{errors.volume}</p>}
                </div>
                <div>
                  <Label htmlFor="location">Delivery Location</Label>
                  <Input 
                    id="location" 
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, State" 
                    className="min-h-[48px] text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="requirements">Specific Requirements</Label>
                <Textarea 
                  id="requirements" 
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  placeholder="Please describe your packaging preferences, quality requirements, or any other specific needs..."
                  rows={4}
                  className="min-h-[120px] text-base resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  type="submit"
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full min-h-[56px] text-lg font-semibold touch-manipulation shadow-elevated hover:shadow-trust transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    openWhatsAppWithFormData(formData);
                    analyticsService.trackWhatsAppClick('contact_form', {
                      hasFormData: Object.values(formData).some(val => val.trim() !== '')
                    });
                  }}
                  className="w-full min-h-[56px] text-lg font-semibold touch-manipulation border-2 border-earth-green text-earth-green hover:bg-earth-green hover:text-white transition-all duration-300"
                >
                  💬 Chat on WhatsApp
                </Button>
              </div>
              

            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="p-6 lg:p-8 shadow-soft">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-earth-green/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-earth-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base lg:text-lg">Email</div>
                    <div className="text-muted-foreground text-base">krishi.naturals@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-earth-green/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-earth-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base lg:text-lg">Phone</div>
                    <div className="text-muted-foreground text-base">+91 9004850052</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-earth-green/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-earth-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base lg:text-lg">Address</div>
                    <div className="text-muted-foreground text-base">Makarpura GIDC, Vadodara, Gujarat 390010</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-earth-green/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-earth-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base lg:text-lg">Business Hours</div>
                    <div className="text-muted-foreground text-base">Mon-Sat: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 lg:p-8 shadow-soft">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-earth-green rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Competitive bulk pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-earth-green rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Flexible payment terms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-earth-green rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Custom packaging options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-earth-green rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-earth-green rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-base">Quality guarantee</span>
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