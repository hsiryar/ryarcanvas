export interface WebsitePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  websiteCount: number;
  timeline: string;
  description: string;
  features: string[];
}

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: "web-pkg-a",
    name: "12 Months Hosting + 1 Website",
    price: 99,
    duration: "12 Months",
    websiteCount: 1,
    timeline: "1 to 3 weeks",
    description: "Suitable for launching one website with a 12-month hosting package. Best for blogging, content brands, and personal portfolios.",
    features: [
      "1 Website development (Handover: 1 to 3 weeks)",
      "12 Months included hosting",
      "Domain setup & DNS guidance",
      "Responsive design for all devices",
      "Advertising-code setup guidance",
      "Pre-launch testing & launch guidance",
    ],
  },
  {
    id: "web-pkg-b",
    name: "12 Months Hosting + 2 Websites",
    price: 139,
    duration: "12 Months",
    websiteCount: 2,
    timeline: "1 to 3 weeks",
    description: "A flexible option for managing two websites with 12 months of hosting. Best for multi-niche blogging and content brands.",
    features: [
      "Up to 2 Websites developed (Handover: 1 to 3 weeks)",
      "12 Months included hosting",
      "Domain setup & DNS guidance",
      "Multi-site content setup",
      "Advertising-code setup guidance",
      "Pre-launch testing & launch guidance",
    ],
  },
  {
    id: "web-pkg-c",
    name: "24 Months Hosting + 1 Website",
    price: 129,
    duration: "24 Months",
    websiteCount: 1,
    timeline: "1 to 3 weeks",
    description: "Extended hosting coverage for one website over 24 months. Best for blogging projects with long-term runway.",
    features: [
      "1 Website development (Handover: 1 to 3 weeks)",
      "24 Months extended hosting",
      "Domain setup & DNS guidance",
      "Optimized performance setup",
      "Advertising-code setup guidance",
      "Pre-launch testing & launch guidance",
    ],
  },
  {
    id: "web-pkg-d",
    name: "24 Months Hosting + 3 Websites",
    price: 189,
    duration: "24 Months",
    websiteCount: 3,
    timeline: "1 to 3 weeks",
    description: "An option for launching up to three websites with 24 months of hosting. Best for blogging networks and editorial projects.",
    features: [
      "Up to 3 Websites developed (Handover: 1 to 3 weeks)",
      "24 Months extended hosting",
      "Domain setup & DNS guidance",
      "Structured content architecture",
      "Advertising-code setup guidance",
      "Pre-launch testing & launch guidance",
    ],
  },
  {
    id: "web-pkg-e",
    name: "48 Months Hosting + 5 Websites",
    price: 239,
    duration: "48 Months",
    websiteCount: 5,
    timeline: "1 to 3 weeks",
    description: "Longer-term hosting for a portfolio of up to five websites with 48 months of continuous hosting.",
    features: [
      "Up to 5 Websites developed (Handover: 1 to 3 weeks)",
      "48 Months long-term hosting",
      "Domain setup & DNS guidance",
      "Scalable portfolio setup",
      "Advertising-code setup guidance",
      "Pre-launch testing & launch guidance",
    ],
  },
  {
    id: "web-pkg-f",
    name: "48 Months Hosting + 10 Websites",
    price: 299,
    duration: "48 Months",
    websiteCount: 10,
    timeline: "1 to 3 weeks",
    description: "An expanded option for managing up to ten websites with 48 months of hosting. Maximum value for blogging publishers.",
    features: [
      "Up to 10 Websites developed (Handover: 1 to 3 weeks)",
      "48 Months long-term hosting",
      "Domain setup & DNS guidance",
      "Expanded multi-site deployment",
      "Advertising-code setup guidance",
      "Pre-launch testing & launch guidance",
    ],
  },
];

export interface EcommercePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  timeline: string;
  description: string;
  features: string[];
  durationClarificationNeeded?: boolean;
}

export const ECOMMERCE_PACKAGES: EcommercePackage[] = [
  {
    id: "ecom-pkg-a",
    name: "12 Months Hosting",
    price: 129,
    duration: "12 Months",
    timeline: "2 to 5 weeks",
    description: "Superior online store with custom admin panel. Zero monthly Shopify fees or recurring subscription costs (secure one-time payment).",
    features: [
      "Custom storefront development (Handover: 2 to 5 weeks)",
      "Custom Admin Panel for products & orders",
      "12 Months included hosting",
      "NO monthly Shopify platform fees (One-time payment)",
      "Product catalog & inventory architecture",
      "Checkout workflow & payment gateway setup guidance",
    ],
  },
  {
    id: "ecom-pkg-b",
    name: "18 Months / 24 Months Hosting",
    price: 189,
    duration: "18 Months / 24 Months",
    timeline: "2 to 5 weeks",
    durationClarificationNeeded: true,
    description: "Extended hosting coverage. Superior online store with NO monthly Shopify fees or recurring subscriptions (confirm 18 or 24 months).",
    features: [
      "Custom storefront development (Handover: 2 to 5 weeks)",
      "Custom Admin Panel for products & orders",
      "18 or 24 Months hosting (confirmed before order)",
      "NO monthly Shopify platform fees (One-time payment)",
      "Product catalog & inventory architecture",
      "Order management & payment gateway setup guidance",
    ],
  },
  {
    id: "ecom-pkg-c",
    name: "48 Months Hosting",
    price: 199,
    duration: "48 Months",
    timeline: "2 to 5 weeks",
    description: "Maximum hosting longevity for your online store with custom admin panel. Zero monthly Shopify fees or recurring subscription fees.",
    features: [
      "Custom storefront development (Handover: 2 to 5 weeks)",
      "Custom Admin Panel for products & orders",
      "48 Months long-term hosting",
      "NO monthly Shopify platform fees (One-time payment)",
      "Product catalog & inventory architecture",
      "Order management & payment gateway setup guidance",
    ],
  },
];
