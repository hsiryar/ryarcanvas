import { BRAND } from "../data/config";

/**
 * Builds the canonical WhatsApp destination URL with properly URI-encoded text.
 */
export function buildWhatsAppUrl(message: string): string {
  return `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  // General Inquiry
  general: () =>
    "Hello RYAR Canvas! I visited your website and would like to discuss your services. Please guide me through the available options.",

  // Hero Primary CTA
  heroQuote: () =>
    "Hello RYAR Canvas! I'm interested in your digital services. Please help me choose the right solution for my business.",

  // Website Development Package
  websitePackage: (params: {
    packageName: string;
    price: number;
    duration: string;
    websiteCount: number;
    timeline?: string;
  }) =>
    `Hello RYAR Canvas! I'm interested in the Website Development service (best for blogging, with domain, hosting, development, and ads code setup).

Selected Package: ${params.packageName}
Package Price: $${params.price} USD
Hosting Duration: ${params.duration}
Number of Websites: ${params.websiteCount}
Handover Timeline: ${params.timeline || "1 to 3 weeks"}

Please confirm the package inclusions, domain and hosting setup, delivery timeline, and the next steps.`,

  // Custom Website Package
  websiteCustom: () =>
    "Hello RYAR Canvas! I'd like a custom website development package (1 to 3 weeks handover). Please help me choose the right solution. My requirements are:",

  // E-commerce Package
  ecommercePackage: (params: {
    packageName: string;
    price: number;
    timeline?: string;
    durationNote?: string;
  }) => {
    let message = `Hello RYAR Canvas! I'm interested in your E-commerce Website + Custom Admin Panel service (One-Time Payment, NO monthly Shopify fees or recurring subscriptions).

Selected Package: ${params.packageName}
Package Price: $${params.price} USD
Handover Timeline: ${params.timeline || "2 to 5 weeks"}`;

    if (params.durationNote) {
      message += `\nPreferred Duration: ${params.durationNote}`;
    }

    message += `\n\nPlease confirm the available hosting duration, the included store features, custom admin panel scope, payment gateway options, hosting details, and the next steps.`;
    return message;
  },

  // Custom E-commerce Package
  ecommerceCustom: () =>
    "Hello RYAR Canvas! I'd like a custom e-commerce solution with custom admin panel and NO monthly Shopify platform fees (2 to 5 weeks handover). Please help me choose the right solution. My requirements are:",

  // Digital Marketing Inquiry
  digitalMarketing: () =>
    "Hello RYAR Canvas! I'm interested in your Digital Marketing services for Meta Ads (Facebook/Instagram) and TikTok Ads (no Google ads). I'd like to discuss my business goals, target audience, campaign requirements, and pricing.",

  // Coming Soon Early Access
  comingSoon: (serviceName: string) =>
    `Hello RYAR Canvas! I'm interested in early access for ${serviceName}. Please share more details and keep me updated as it develops.`,
};
