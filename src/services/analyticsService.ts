interface FormSubmissionEvent {
  type: 'form_submission' | 'whatsapp_click' | 'cta_click';
  section: string;
  data?: any;
  timestamp: number;
}

class AnalyticsService {
  private events: FormSubmissionEvent[] = [];

  // Track form submission
  trackFormSubmission(section: string, data?: any) {
    const event: FormSubmissionEvent = {
      type: 'form_submission',
      section,
      data,
      timestamp: Date.now()
    };
    
    this.events.push(event);
    this.logEvent(event);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: section,
        value: 1
      });
    }
  }

  // Track WhatsApp clicks
  trackWhatsAppClick(section: string, data?: any) {
    const event: FormSubmissionEvent = {
      type: 'whatsapp_click',
      section,
      data,
      timestamp: Date.now()
    };
    
    this.events.push(event);
    this.logEvent(event);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: section,
        value: 1
      });
    }
  }

  // Track CTA clicks
  trackCTAClick(section: string, ctaType: string) {
    const event: FormSubmissionEvent = {
      type: 'cta_click',
      section,
      data: { ctaType },
      timestamp: Date.now()
    };
    
    this.events.push(event);
    this.logEvent(event);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: `${section}_${ctaType}`,
        value: 1
      });
    }
  }

  // Log event to console (for debugging)
  private logEvent(event: FormSubmissionEvent) {
    console.log('Analytics Event:', {
      type: event.type,
      section: event.section,
      timestamp: new Date(event.timestamp).toISOString(),
      data: event.data
    });
  }

  // Get all events (for debugging)
  getEvents(): FormSubmissionEvent[] {
    return [...this.events];
  }

  // Clear events (for privacy)
  clearEvents() {
    this.events = [];
  }

  // Export events as JSON (for backup)
  exportEvents(): string {
    return JSON.stringify(this.events, null, 2);
  }
}

// Create singleton instance
export const analyticsService = new AnalyticsService();

// Track page views
export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: page,
      page_location: window.location.href
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      value: depth
    });
  }
};
