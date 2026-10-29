export interface WebsitePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  websiteCount: number;
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
    description: "Suitable for launching one website with a 12-month hosting package.",
    features: [
      "1 Website development",
      "12 Months included hosting",
      "Domain-related setup guidance",
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
    description: "A flexible option for managing two websites with 12 months of hosting.",
    features: [
      "Up to 2 Websites developed",
      "12 Months included hosting",
      "Domain-related setup guidance",
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
    description: "Extended hosting coverage for one website over 24 months.",
    features: [
      "1 Website development",
      "24 Months extended hosting",
      "Domain-related setup guidance",
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
    description: "An option for launching up to three websites with 24 months of hosting.",
    features: [
      "Up to 3 Websites developed",
      "24 Months extended hosting",
      "Domain-related setup guidance",
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
    description: "Longer-term hosting for a portfolio of up to five websites.",
    features: [
      "Up to 5 Websites developed",
      "48 Months long-term hosting",
      "Domain-related setup guidance",
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
    description: "An expanded option for managing up to ten websites with 48 months of hosting.",
    features: [
      "Up to 10 Websites developed",
      "48 Months long-term hosting",
      "Domain-related setup guidance",
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
    description: "A one-time website development package with 12 months of hosting included, subject to the confirmed project scope.",
    features: [
      "Custom storefront development",
      "Custom Admin Panel for products & orders",
      "12 Months included hosting",
      "No mandatory monthly Shopify subscription",
      "Product catalog & inventory architecture",
      "Checkout workflow & payment gateway setup guidance",
    ],
  },
  {
    id: "ecom-pkg-b",
    name: "18 Months / 24 Months Hosting",
    price: 189,
    duration: "18 Months / 24 Months",
    durationClarificationNeeded: true,
    description: "An extended hosting package. Confirm whether the intended hosting duration is 18 or 24 months before ordering.",
    features: [
      "Custom storefront development",
      "Custom Admin Panel for products & orders",
      "18 or 24 Months hosting (confirmed before order)",
      "No mandatory monthly Shopify subscription",
      "Product catalog & inventory architecture",
      "Order management & payment gateway setup guidance",
    ],
  },
  {
    id: "ecom-pkg-c",
    name: "48 Months Hosting",
    price: 199,
    duration: "48 Months",
    description: "A longer hosting package for your online store, with the exact included features and service scope confirmed before payment.",
    features: [
      "Custom storefront development",
      "Custom Admin Panel for products & orders",
      "48 Months long-term hosting",
      "No mandatory monthly Shopify subscription",
      "Product catalog & inventory architecture",
      "Order management & payment gateway setup guidance",
    ],
  },
];
