import React from "react";
import { BRAND } from "../data/config";
import { Shield, Lock } from "lucide-react";

export const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 text-left">
      <div className="space-y-3 pb-6 border-b border-[#E2E8F0]">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#324BB0]">
          <Shield className="w-4 h-4" />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181D28]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#5B6275]">
          Last Updated: October 2026 · Official Domain: {BRAND.domain}
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6 text-sm text-[#5B6275] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">1. Introduction</h2>
          <p>
            RYAR Canvas ("we," "our," or "us") operates the website located at{" "}
            <span className="font-mono text-slate-800">{BRAND.domain}</span>. We are dedicated to respecting your privacy and protecting any personal details you share with us. This Privacy Policy clarifies how information is handled when you browse our static website, inquire about our digital services, or sign up for early-access notifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">2. Information We Collect</h2>
          <p>
            Because RYAR Canvas operates as a clean, static agency website, we do not require account logins or process financial transactions directly on this site:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>
              <strong>Direct Inquiries:</strong> When you initiate contact via WhatsApp or Instagram, you communicate through external platforms governed by their respective privacy terms.
            </li>
            <li>
              <strong>Early Access Registrations:</strong> If you submit our early access form, we collect the email address, optional name, and area of interest you provide solely to send launch notices.
            </li>
            <li>
              <strong>Standard Technical Data:</strong> Standard server access logs (IP addresses, user-agent headers) may be recorded by our static hosting provider (GitHub Pages) for delivery security and availability.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">3. How We Use Information</h2>
          <p>Information shared with us is used exclusively to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Discuss prospective digital projects, scope specifications, and package quotations.</li>
            <li>Deliver early-access announcements and service launch updates.</li>
            <li>Maintain site integrity and address technical communications.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties or marketing aggregators.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">4. External Communication Channels & Third-Party Links</h2>
          <p>
            Our website provides direct links to third-party services, including WhatsApp and Instagram. When you click these links, you leave our website. We do not control and are not responsible for the privacy practices, encryption standards, or terms of third-party platforms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">5. Data Security & Storage</h2>
          <p>
            We implement sensible security measures to safeguard any correspondence. Static assets are served securely via HTTPS. Client project contracts, credentials, and production deployment parameters are managed confidentially through dedicated channels.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">6. Your Rights & Contact</h2>
          <p>
            You may request the deletion or correction of your email from our early-access list at any time by messaging us directly via our official WhatsApp or Instagram channels.
          </p>
        </section>
      </div>
    </div>
  );
};
