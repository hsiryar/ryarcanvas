import React, { useState } from "react";
import { ECOMMERCE_PACKAGES, EcommercePackage } from "../data/packages";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { TrustGuaranteesBar } from "../components/TrustGuaranteesBar";
import {
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Server,
  Layers,
  Sparkles,
  MessageSquare,
  Lock,
  Clock,
} from "lucide-react";

export const EcommerceDevelopmentView: React.FC = () => {
  // Option state for package B duration preference
  const [pkgBDurationChoice, setPkgBDurationChoice] = useState<"18 Months" | "24 Months">("24 Months");

  const customPackageUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.ecommerceCustom());

  const getPackageUrl = (pkg: EcommercePackage) => {
    let durationNote: string | undefined;
    if (pkg.durationClarificationNeeded) {
      durationNote = `Preferred choice: ${pkgBDurationChoice} (confirming 18 vs 24 months)`;
    }
    return buildWhatsAppUrl(
      WHATSAPP_MESSAGES.ecommercePackage({
        packageName: pkg.name,
        price: pkg.price,
        timeline: pkg.timeline,
        durationNote,
      })
    );
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E33B8] bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
            <ShoppingBag className="w-4 h-4" />
            <span>E-commerce Solutions</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            <Clock className="w-3.5 h-3.5" />
            <span>Handover: 2 to 5 weeks</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181D28] tracking-tight">
          Your Online Store. <br />
          <span className="brand-gradient-text">Your Platform. Your Control.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5B6275] max-w-2xl mx-auto leading-relaxed">
          Launch a superior online store with a custom admin panel designed to manage your products and orders with <strong>NO monthly Shopify fees or recurring subscription costs</strong> (secure one-time payment) and a <strong>2 to 5 weeks handover timeline</strong>.
        </p>

        {/* Mandatory Commercial Banner */}
        <div className="mt-6 inline-block bg-purple-50 border border-purple-200 rounded-2xl p-4 sm:p-5 text-left max-w-2xl">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#7E33B8] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-[#181D28]">
                One-Time Website Development Payment — No Mandatory Monthly Shopify Platform Subscription
              </h2>
              <p className="text-xs text-[#5B6275] mt-1 leading-relaxed">
                You pay the agreed one-time package price for the development and included hosting period, rather than paying compulsory monthly recurring platform subscription charges to Shopify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Commitments Bar */}
      <TrustGuaranteesBar />

      {/* Admin Panel Architecture & Cost Transparency */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Custom Admin Panel Capability */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7E33B8] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#181D28]">
              What the Custom Admin Panel Manages
            </h3>
            <p className="text-xs text-[#5B6275] leading-relaxed">
              Designed for intuitive everyday store administration without code modifications:
            </p>
            <ul className="space-y-2 text-xs text-[#181D28]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                <span>Product catalog, titles, descriptions & imagery</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                <span>Pricing, inventory levels, & stock statuses</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                <span>Order viewing, customer records & fulfillment state</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                <span>Storefront content, announcements & promotional banners</span>
              </li>
            </ul>
          </div>

          {/* Operational Cost Transparency */}
          <div className="bg-slate-50 border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#181D28]">
              Transparent Operational Cost Factors
            </h3>
            <p className="text-xs text-[#5B6275] leading-relaxed">
              While you avoid mandatory monthly Shopify platform subscriptions, genuine commercial transparency is our pledge. Standard operational costs may include:
            </p>
            <ul className="space-y-1.5 text-xs text-[#5B6275]">
              <li>• Annual domain registrations or renewals</li>
              <li>• Hosting renewal fees after the included term concludes</li>
              <li>• Standard payment gateway transaction fees (e.g. Stripe/PayPal)</li>
              <li>• Optional third-party integrations or premium plugins</li>
              <li>• Optional ongoing maintenance or bespoke feature upgrades</li>
            </ul>
            <div className="pt-2 text-[11px] text-[#5B6275] border-t border-[#E2E8F0]">
              *All technical specifications and server requirements are agreed upon via WhatsApp before any order is finalized.
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181D28]">
            E-commerce Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6275]">
            One-time development pricing in USD with hosting included. Click a package to initiate prefilled WhatsApp consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOMMERCE_PACKAGES.map((pkg) => {
            const pkgUrl = getPackageUrl(pkg);
            return (
              <div
                key={pkg.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between brand-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-xs font-bold text-[#7E33B8] bg-purple-50 px-2.5 py-1 rounded-md">
                      {pkg.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3" />
                      <span>{pkg.timeline}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#181D28] leading-snug">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#181D28]">
                        ${pkg.price}
                      </span>
                      <span className="text-xs font-semibold uppercase text-[#5B6275]">
                        USD
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5B6275]">
                      One-time development fee
                    </span>
                  </div>

                  <p className="text-xs text-[#5B6275] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Duration Clarification Selector for Package B */}
                  {pkg.durationClarificationNeeded && (
                    <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-xl space-y-1.5">
                      <label className="block text-[11px] font-semibold text-[#181D28]">
                        Select preferred duration to discuss:
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setPkgBDurationChoice("18 Months")}
                          className={`flex-1 py-1 px-2 text-xs font-medium rounded-md border transition-colors ${
                            pkgBDurationChoice === "18 Months"
                              ? "bg-[#7E33B8] text-white border-[#7E33B8]"
                              : "bg-white text-slate-700 border-slate-200"
                          }`}
                        >
                          18 Months
                        </button>
                        <button
                          type="button"
                          onClick={() => setPkgBDurationChoice("24 Months")}
                          className={`flex-1 py-1 px-2 text-xs font-medium rounded-md border transition-colors ${
                            pkgBDurationChoice === "24 Months"
                              ? "bg-[#7E33B8] text-white border-[#7E33B8]"
                              : "bg-white text-slate-700 border-slate-200"
                          }`}
                        >
                          24 Months
                        </button>
                      </div>
                      <span className="text-[10px] text-[#5B6275] block">
                        Will be confirmed on WhatsApp before payment.
                      </span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5">
                    {pkg.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-1.5 text-xs text-[#181D28]"
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
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#7E33B8] hover:bg-[#6A2B9D] text-white font-semibold text-xs sm:text-sm transition-colors text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Choose This Package</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Custom Package */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-md">
                Bespoke Solution
              </span>

              <h3 className="text-base font-bold text-white">
                Custom E-commerce Solution
              </h3>

              <div>
                <span className="text-2xl font-bold text-slate-200">
                  Custom Quote
                </span>
                <p className="text-[11px] text-slate-400">
                  Tailored to your catalog size & features
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Need additional features, complex ERP/CRM integrations, high-concurrency hosting, or a custom-architected admin panel? Let's discuss your requirements.
              </p>

              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-200">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Custom product variations & bulk import</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Custom payment gateway integration</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated infrastructure scoping</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={customPackageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl brand-gradient hover:opacity-95 text-white font-semibold text-xs sm:text-sm transition-opacity"
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
