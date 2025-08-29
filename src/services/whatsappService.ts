interface WhatsAppData {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  volume?: string;
  location?: string;
  requirements?: string;
}

export const openWhatsAppWithFormData = (data: WhatsAppData) => {
  const phoneNumber = '919004850052';
  
  // Create a formatted message
  const message = `Hi! I'm interested in GIREJ A2 Ghee supply.

Name: ${data.firstName || ''} ${data.lastName || ''}
Company: ${data.company || ''}
Email: ${data.email || ''}
Phone: ${data.phone || ''}
Monthly Volume: ${data.volume || ''} kg
Delivery Location: ${data.location || ''}
Requirements: ${data.requirements || ''}

Please provide me with pricing and samples.`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
};

export const openWhatsAppForQuote = () => {
  const phoneNumber = '919004850052';
  const message = `Hi! I would like to get a quote for GIREJ A2 Ghee supply. Please provide pricing for bulk orders.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

export const openWhatsAppForPrivateLabel = () => {
  const phoneNumber = '919004850052';
  const message = `Hi! I'm interested in private label A2 ghee packaging options. Please provide details about customization and minimum order quantities.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
