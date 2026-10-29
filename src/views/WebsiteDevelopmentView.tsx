import React from "react";
import { WEBSITE_PACKAGES, WebsitePackage } from "../data/packages";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { TrustGuaranteesBar } from "../components/TrustGuaranteesBar";
import {
  Globe,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  Server,
  Code2,
  Sparkles,
  Clock,
} from "lucide-react";

export const WebsiteDevelopmentView: React.FC = () => {
  const customPackageUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.websiteCustom());

  const getPackageUrl = (pkg: WebsitePackage) => {
    return buildWhatsAppUrl(
      WHATSAPP_MESSAGES.websitePackage({
        packageName: pkg.name,
        price: pkg.price,
        duration: pkg.duration,
        websiteCount: pkg.websiteCount,
        timeline: pkg.timeline,
      })
    );
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#324BB0] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            <Globe className="w-4 h-4" />
            <span>Website Development Service</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            <Clock className="w-3.5 h-3.5" />
            <span>Handover: 1 to 3 weeks</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181D28] tracking-tight">
          Build Your Website. <br />
          <span className="brand-gradient-text">Grow Your Digital Presence.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5B6275] max-w-2xl mx-auto leading-relaxed">
          Best for blogging, content brands, and online publishers. Includes domain-related setup, high-performance hosting packages, website development, and advertising-code setup guidance with a fast <strong>1 to 3 weeks handover timeline</strong>.
        </p>
      </section>

      {/* Trust & Commitments Bar */}
      <TrustGuaranteesBar />

      {/* Scope & Transparency Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-[#181D28]">
              <ShieldCheck className="w-5 h-5 text-[#324BB0]" />
              <span>Important Scope & Transparency Details</span>
            </div>
            <span className="text-xs font-semibold text-[#324BB0] bg-blue-50 px-2.5 py-1 rounded-md hidden sm:inline-block">
              Handover: 1 to 3 weeks
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#5B6275] leading-relaxed">
            This service is best suited to blogging, editorial, portfolio, and content-focused websites. Every package represents a fixed one-time development investment paired with the designated hosting duration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] space-y-1.5">
              <span className="text-xs font-semibold text-[#181D28]">
                What is Included in Scope:
              </span>
              <ul className="space-y-1 text-xs text-[#5B6275]">
                <li>• Rapid 1 to 3 weeks complete delivery and handover</li>
                <li>• Website development tailored for blogging & content</li>
                <li>• High-performance hosting for the selected duration (12–48 mo)</li>
                <li>• Domain-related setup guidance or registration where agreed</li>
                <li>• Technical advertising-code placement guidance</li>
                <li>• Pre-launch quality verification and launch guidance</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] space-y-1.5">
              <span className="text-xs font-semibold text-[#181D28]">
                Monetization & Inclusions Policy:
              </span>
              <ul className="space-y-1 text-xs text-[#5B6275]">
                <li>• We do not promise guaranteed Google AdSense approval or monetization</li>
                <li>• Network approvals depend entirely on platform rules & content quality</li>
                <li>• Domain renewals or custom third-party integrations are clarified before purchase</li>
                <li>• Exact technical details are confirmed through WhatsApp prior to payment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid (All 6 Packages + Custom Package) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181D28]">
            Website Development Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6275]">
            Transparent package rates in USD. 1 to 3 weeks delivery. Select a package below to discuss your exact requirements and launch timeline on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBSITE_PACKAGES.map((pkg) => {
            const pkgUrl = getPackageUrl(pkg);
            return (
              <div
                key={pkg.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 flex flex-col justify-between brand-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#324BB0] bg-blue-50 px-2.5 py-1 rounded-md">
                      {pkg.duration} Hosting
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3" />
                      <span>{pkg.timeline}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#181D28] leading-snug">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="pt-1 pb-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#181D28]">
                        ${pkg.price}
                      </span>
                      <span className="text-xs font-semibold uppercase text-[#5B6275]">
                        USD
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5B6275]">
                      One-time package price (not billed monthly)
                    </span>
                  </div>

                  <p className="text-xs text-[#5B6275] leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="pt-3 border-t border-[#E2E8F0] space-y-2">
                    {pkg.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-[#181D28]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16865C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={pkgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#324BB0] hover:bg-[#293E96] text-white font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Choose This Package</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Custom Package Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7E33B8] bg-purple-950/60 px-2.5 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tailored Requirements</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Custom Website Package
              </h3>

              <div className="pt-1 pb-2">
                <span className="text-2xl font-bold text-slate-200">
                  Custom Quote
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Based on your specific scale and duration
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Need a different number of websites, a different hosting duration, specialized CMS setup, or a more specific architectural setup? Contact us to discuss your requirements.
              </p>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Custom domain & hosting multi-server configuration</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bespoke content schemas & editorial layouts</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full WhatsApp scoping call with our developers</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={customPackageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl brand-gradient hover:opacity-95 text-white font-semibold text-xs sm:text-sm transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
