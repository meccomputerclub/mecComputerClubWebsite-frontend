// Facebook Pixel utility functions
interface FacebookPixelData {
  content_category?: string;
  content_name?: string;
  value?: number;
  currency?: string;
  content_type?: string;
  billing_cycle?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    fbq: (action: string, event: string, data?: FacebookPixelData) => void;
  }
}

// Check if Facebook Pixel is properly configured
export const isPixelConfigured = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.fbq === 'function' && 
         process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID !== 'your_pixel_id_here' &&
         process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID !== undefined;
};

export const trackEvent = (eventName: string, data?: FacebookPixelData) => {
  if (isPixelConfigured()) {
    window.fbq('track', eventName, data);
  } else {
    console.warn('Facebook Pixel not configured. Please set NEXT_PUBLIC_FACEBOOK_PIXEL_ID in .env.local');
  }
};

// Enhanced tracking with server-side backup
export const trackEventWithServerSide = async (eventName: string, data?: FacebookPixelData, userInfo?: {
  email?: string;
  phone?: string;
}) => {
  // Client-side tracking
  trackEvent(eventName, data);
  
  // Server-side tracking for enhanced reliability
  try {
    const response = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData: data,
        userAgent: navigator.userAgent,
        ipAddress: '', // Will be detected server-side
        ...(userInfo?.email && { userEmail: userInfo.email }),
        ...(userInfo?.phone && { userPhone: userInfo.phone }),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.warn('Server-side tracking failed:', errorData);
    }
  } catch (error) {
    console.warn('Server-side tracking failed:', error);
  }
};

export const trackInitiateCheckout = (planData: {
  planName: string;
  price: number;
  currency: string;
  category: string;
  billingCycle?: string;
}) => {
  const eventData = {
    content_category: planData.category,
    content_name: planData.planName,
    value: planData.price,
    currency: planData.currency,
    content_type: 'hosting_plan',
    ...(planData.billingCycle && { billing_cycle: planData.billingCycle })
  };
  
  // Use enhanced tracking for critical conversion events
  trackEventWithServerSide('InitiateCheckout', eventData);
};

export const trackAddToCart = (planData: {
  planName: string;
  price: number;
  currency: string;
  category: string;
}) => {
  trackEvent('AddToCart', {
    content_category: planData.category,
    content_name: planData.planName,
    value: planData.price,
    currency: planData.currency,
    content_type: 'hosting_plan'
  });
};

export const trackViewContent = (planData: {
  planName: string;
  price: number;
  currency: string;
  category: string;
}) => {
  trackEvent('ViewContent', {
    content_category: planData.category,
    content_name: planData.planName,
    value: planData.price,
    currency: planData.currency,
    content_type: 'hosting_plan'
  });
};

export const trackLead = (formData: {
  formName: string;
  value?: number;
  currency?: string;
}) => {
  trackEventWithServerSide('Lead', {
    content_name: formData.formName,
    ...(formData.value && { value: formData.value }),
    ...(formData.currency && { currency: formData.currency })
  });
};
