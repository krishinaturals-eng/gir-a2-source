interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  volume: string;
  location: string;
  requirements: string;
}

interface FormResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Updated Google Apps Script URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxzv-2F7p8lyoQqNizCm1s-EBtL84HQgY7kX4W8GYisFhWzLeaLjO55GMgvbSw-bAto/exec';

export const submitFormToGoogleSheets = async (formData: FormData): Promise<FormResponse> => {
  try {
    // Add rate limiting check
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    const now = Date.now();
    
    if (lastSubmission && (now - parseInt(lastSubmission)) < 30000) {
      return {
        success: false,
        message: 'Please wait 30 seconds before submitting another form.'
      };
    }

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'company', 'email', 'phone', 'volume'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]?.trim());
    
    if (missingFields.length > 0) {
      return {
        success: false,
        message: `Please fill in all required fields: ${missingFields.join(', ')}`
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return {
        success: false,
        message: 'Please enter a valid phone number'
      };
    }

    // Prepare data for Google Sheets
    const submissionData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      company: formData.company.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: cleanPhone,
      volume: formData.volume.trim(),
      location: formData.location?.trim() || '',
      requirements: formData.requirements?.trim() || ''
    };

    // Use JSONP approach to avoid CORS issues
    return await submitViaJSONP(submissionData);

    if (result.success) {
      // Store submission timestamp for rate limiting
      localStorage.setItem('lastFormSubmission', now.toString());
      
      // Send email notification (optional - you can add this later)
      // await sendEmailNotification(submissionData);
      
      return {
        success: true,
        message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.'
      };
    } else {
      return {
        success: false,
        message: result.error || 'Failed to submit form. Please try again.'
      };
    }

  } catch (error) {
    console.error('Form submission error:', error);
    
    // Fallback: Try alternative submission method
    try {
      const fallbackResult = await submitFormFallback(formData);
      return fallbackResult;
    } catch (fallbackError) {
      return {
        success: false,
        message: 'Unable to submit form at the moment. Please contact us directly at +91 9004850052 or krishi.naturals@gmail.com'
      };
    }
  }
};

// JSONP approach to avoid CORS issues
const submitViaJSONP = async (submissionData: any): Promise<FormResponse> => {
  return new Promise((resolve, reject) => {
    try {
      // Create a unique callback name
      const callbackName = 'girejCallback_' + Date.now();
      
      // Create the script URL with data as URL parameters
      const params = new URLSearchParams();
      params.append('callback', callbackName);
      params.append('firstName', submissionData.firstName);
      params.append('lastName', submissionData.lastName);
      params.append('company', submissionData.company);
      params.append('email', submissionData.email);
      params.append('phone', submissionData.phone);
      params.append('volume', submissionData.volume);
      params.append('location', submissionData.location);
      params.append('requirements', submissionData.requirements);
      
      const scriptUrl = `${GOOGLE_SHEETS_URL}?${params.toString()}`;
      
      // Create script element
      const script = document.createElement('script');
      script.src = scriptUrl;
      
      // Set up callback function
      (window as any)[callbackName] = (result: any) => {
        // Clean up
        document.head.removeChild(script);
        delete (window as any)[callbackName];
        
        if (result && result.success) {
          resolve({
            success: true,
            message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.'
          });
        } else {
          resolve({
            success: false,
            message: result?.error || 'Failed to submit form. Please try again.'
          });
        }
      };
      
      // Handle script load error
      script.onerror = () => {
        document.head.removeChild(script);
        delete (window as any)[callbackName];
        reject(new Error('Failed to load script'));
      };
      
      // Add script to page
      document.head.appendChild(script);
      
      // Timeout after 10 seconds
      setTimeout(() => {
        if ((window as any)[callbackName]) {
          document.head.removeChild(script);
          delete (window as any)[callbackName];
          reject(new Error('Request timeout'));
        }
      }, 10000);
      
    } catch (error) {
      reject(error);
    }
  });
};

// Fallback submission method (email-based)
const submitFormFallback = async (formData: FormData): Promise<FormResponse> => {
  try {
    // Create email body
    const emailBody = `
New GIREJ Website Inquiry

Name: ${formData.firstName} ${formData.lastName}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Monthly Volume: ${formData.volume} kg
Delivery Location: ${formData.location || 'Not specified'}
Requirements: ${formData.requirements || 'Not specified'}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    // Open email client with pre-filled data
    const emailUrl = `mailto:krishi.naturals@gmail.com?subject=New GIREJ Website Inquiry - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(emailUrl, '_blank');
    
    return {
      success: true,
      message: 'Form submitted via email. Please check your email client.'
    };
  } catch (error) {
    throw error;
  }
};

// Optional: Email notification service (for future use)
export const sendEmailNotification = async (formData: FormData) => {
  // This can be implemented later with a proper email service
  // For now, we'll just log the data
  console.log('Email notification would be sent for:', formData);
};
