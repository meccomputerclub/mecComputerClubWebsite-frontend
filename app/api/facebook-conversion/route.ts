import { NextRequest, NextResponse } from 'next/server';

interface ConversionEvent {
  event_name: string;
  event_time: number;
  user_data: {
    client_ip_address?: string;
    client_user_agent?: string;
    em?: string; // hashed email
    ph?: string; // hashed phone
  };
  custom_data?: Record<string, unknown>;
  event_source_url?: string;
  action_source: string;
}

interface FacebookConversionResponse {
  events_received: number;
  messages: string[];
  fbtrace_id: string;
}

// Facebook Conversions API endpoint with enhanced error handling
export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const ACCESS_TOKEN = process.env.FACEBOOK_CONVERSION_TOKEN;

    if (!PIXEL_ID || PIXEL_ID === 'your_pixel_id_here') {
      return NextResponse.json(
        { 
          error: 'Facebook Pixel ID not configured',
          message: 'Please set NEXT_PUBLIC_FACEBOOK_PIXEL_ID in .env.local'
        },
        { status: 400 }
      );
    }

    if (!ACCESS_TOKEN || ACCESS_TOKEN === 'your_conversion_token_here') {
      return NextResponse.json(
        { 
          error: 'Facebook Conversion Token not configured',
          message: 'Please set FACEBOOK_CONVERSION_TOKEN in .env.local'
        },
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { eventName, eventData, userAgent, ipAddress, userEmail, userPhone } = body;

    if (!eventName) {
      return NextResponse.json(
        { error: 'Event name is required' },
        { status: 400 }
      );
    }

    // Hash sensitive data (email/phone) if provided
    const hashData = (data: string): string => {
      // Simple hash function - in production, use crypto.createHash('sha256')
      return Buffer.from(data.toLowerCase().trim()).toString('base64');
    };

    // Prepare the conversion event data
    const conversionEvent: ConversionEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      user_data: {
        client_ip_address: ipAddress || request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip'),
        client_user_agent: userAgent || request.headers.get('user-agent'),
        ...(userEmail && { em: hashData(userEmail) }),
        ...(userPhone && { ph: hashData(userPhone) }),
      },
      custom_data: eventData || {},
      event_source_url: request.headers.get('referer') || '',
      action_source: 'website',
    };

    // Send to Facebook Conversions API
    const facebookResponse = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [conversionEvent],
          access_token: ACCESS_TOKEN,
          test_event_code: process.env.FACEBOOK_TEST_EVENT_CODE, // Optional: for testing
        }),
      }
    );

    const result: FacebookConversionResponse = await facebookResponse.json();

    if (!facebookResponse.ok) {
      console.error('Facebook Conversions API error:', result);
      
      // Handle specific Facebook API errors
      if (result.messages && result.messages.length > 0) {
        return NextResponse.json(
          { 
            error: 'Facebook API error',
            details: result.messages,
            fbtrace_id: result.fbtrace_id
          },
          { status: facebookResponse.status }
        );
      }

      return NextResponse.json(
        { 
          error: 'Failed to send conversion event to Facebook',
          fbtrace_id: result.fbtrace_id
        },
        { status: facebookResponse.status }
      );
    }

    // Success response
    return NextResponse.json({ 
      success: true, 
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
      message: 'Conversion event sent successfully'
    });

  } catch (error) {
    console.error('Server-side tracking error:', error);
    
    // Handle different types of errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    if (error instanceof TypeError && error.message.includes('fetch')) {
      return NextResponse.json(
        { error: 'Network error connecting to Facebook API' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'An unexpected error occurred while processing the conversion event'
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const ACCESS_TOKEN = process.env.FACEBOOK_CONVERSION_TOKEN;

  return NextResponse.json({
    status: 'ok',
    pixel_configured: !!(PIXEL_ID && PIXEL_ID !== 'your_pixel_id_here'),
    token_configured: !!(ACCESS_TOKEN && ACCESS_TOKEN !== 'your_conversion_token_here'),
    timestamp: new Date().toISOString()
  });
}