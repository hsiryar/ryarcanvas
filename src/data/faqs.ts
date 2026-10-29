export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-shopify-monthly-fees",
    question: "Do I need to pay any monthly fees for the E-commerce store?",
    answer:
      "No, it's a secure one-time payment with zero monthly Shopify fees! You own your platform without mandatory recurring platform subscriptions.",
  },
  {
    id: "faq-delivery-handover-timeline",
    question: "How long does delivery take?",
    answer:
      "Handover takes 1–3 weeks for website development and 2–5 weeks for an e-commerce website with custom admin panel.",
  },
  {
    id: "faq-get-started",
    question: "How do we get started?",
    answer:
      "Simply select your package and click to chat directly via WhatsApp (+92 349 7925109). We'll confirm your requirements, timeline, and next steps immediately.",
  },
  {
    id: "faq-services",
    question: "What services does RYAR Canvas provide?",
    answer:
      "RYAR Canvas provides website development (best for blogging with domain, hosting, development, and ads setup), e-commerce website development with a custom admin panel (one-time payment, no monthly Shopify fees), and digital marketing focused strictly on Meta Ads (Facebook & Instagram) and TikTok Ads.",
  },
  {
    id: "faq-ordering",
    question: "How can I order a service?",
    answer:
      "Choose the relevant service and package on its dedicated service page, then click its WhatsApp button. A prefilled message will automatically open WhatsApp, allowing you to discuss your exact project requirements, delivery timeline, and technical scope directly with our team.",
  },
  {
    id: "faq-homepage-prices",
    question: "Why are prices not shown on the homepage?",
    answer:
      "The homepage is designed to introduce our service capabilities, working principles, and live work. Detailed package tiers, inclusions, hosting durations, and transparent fixed USD prices are clearly displayed on their respective dedicated service pages.",
  },
  {
    id: "faq-billing-monthly",
    question: "Are website development packages billed monthly?",
    answer:
      "No. The listed prices are one-time package prices in USD covering development and the specified hosting duration (e.g. 12, 24, or 48 months). They are not recurring monthly subscription fees. Inclusions and hosting renewal terms are confirmed before payment.",
  },
  {
    id: "faq-adsense-guarantee",
    question: "Does the website development service guarantee AdSense approval?",
    answer:
      "No. We provide advertising-code setup guidance and technical site configuration, but approval and monetization depend entirely on the third-party advertising network's guidelines, site content eligibility, and policy compliance.",
  },
  {
    id: "faq-google-ads",
    question: "Do you provide Google Ads?",
    answer:
      "No. Our digital marketing service focuses exclusively on paid Meta Ads (Facebook and Instagram) and TikTok Ads.",
  },
  {
    id: "faq-custom-package",
    question: "Can I request a custom package?",
    answer:
      "Yes. If you need a specific number of websites, tailored hosting arrangements, bespoke admin features, or custom advertising strategies, click any custom package button to discuss your exact specifications with us on WhatsApp.",
  },
  {
    id: "faq-coming-soon",
    question: "How do I join a coming-soon service?",
    answer:
      "Visit the relevant coming-soon page and express your interest via the early-access form or direct WhatsApp inquiry. When registrations are configured or the service is ready for public launch, we will share updates directly.",
  },
  {
    id: "faq-github-pages-hosting",
    question: "Are all services hosted on GitHub Pages?",
    answer:
      "No. GitHub Pages hosts the RYAR Canvas agency marketing website itself. Client projects—especially custom e-commerce stores with databases, administrative dashboards, and payment gateways—are deployed onto dedicated cloud, server, or container environments suited to their architecture.",
  },
];
