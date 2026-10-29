import React from "react";
import { BRAND } from "../data/config";
import { FileText, CheckCircle2 } from "lucide-react";

export const TermsOfServiceView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 text-left">
      <div className="space-y-3 pb-6 border-b border-[#E2E8F0]">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#324BB0]">
          <FileText className="w-4 h-4" />
          <span>Agency Engagement Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181D28]">
          Terms of Service
        </h1>
        <p className="text-xs text-[#5B6275]">
          Last Updated: October 2026 · Official Domain: {BRAND.domain}
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6 text-sm text-[#5B6275] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">1. Agreement to Terms</h2>
          <p>
            By accessing or browsing this website (<span className="font-mono text-slate-800">{BRAND.domain}</span>), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please discontinue using the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">2. Scope of Agency Services</h2>
          <p>
            RYAR Canvas provides professional digital services, including website development, e-commerce development with custom administrative panels, and digital marketing (Meta Ads and TikTok Ads).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>
              <strong>Information Only:</strong> Descriptions and packages published on this website constitute service offerings and guidelines. Formal engagements commence only after written scope confirmation, agreement on deliverables, and confirmed payment terms between both parties.
            </li>
            <li>
              <strong>One-Time Pricing Structure:</strong> Listed website and e-commerce package prices represent fixed one-time development and hosting allocations in USD for the specified duration. They are not recurring monthly platform fees.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">3. Client Responsibilities & Scope Clarifications</h2>
          <p>
            Clients must provide necessary content, branding guidelines, digital assets, and timely feedback required to execute agreed projects:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>
              <strong>Hosting Durations:</strong> Hosting included in any package covers the defined period (e.g. 12, 24, or 48 months). Renewal terms thereafter are subject to separate agreement.
            </li>
            <li>
              <strong>Domain Registrations:</strong> Domain purchases and annual renewals outside confirmed scope remain the client's responsibility.
            </li>
            <li>
              <strong>Third-Party Networks & Compliance:</strong> We provide advertising-code setup guidance, but approval by networks (such as Google AdSense, Meta, or TikTok) is governed by each platform's proprietary policies. Approval is not guaranteed.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">4. Intellectual Property</h2>
          <p>
            The RYAR Canvas name, official logo, typography, original copy, and visual identity published on this website are the intellectual property of RYAR Canvas. Upon full payment of client project fees, client-specific website deliverables are transferred as agreed in the confirmed project scope.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, RYAR Canvas shall not be liable for any indirect, incidental, or consequential damages resulting from third-party advertising network actions, payment processor disruptions, or server outages beyond our direct control.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#181D28]">6. Inquiries and Contact</h2>
          <p>
            For questions regarding these Terms, contact us directly via our official WhatsApp or Instagram links.
          </p>
        </section>
      </div>
    </div>
  );
};
