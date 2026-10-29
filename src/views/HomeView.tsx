import React, { useState } from "react";
import { BRAND } from "../data/config";
import { FAQS } from "../data/faqs";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { NavView } from "../components/Header";
import { TrustGuaranteesBar } from "../components/TrustGuaranteesBar";
import {
  Globe,
  ShoppingBag,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  MessageSquare,
  Bot,
  Layers,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Clock,
  Timer,
  Compass,
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (view: NavView, hash?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const heroQuoteWhatsAppUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.heroQuote());
  const marketingWhatsAppUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.digitalMarketing());

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#324BB0]/10 via-[#7E33B8]/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Official Tagline Kicker */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#324BB0]">
                <Sparkles className="w-4 h-4 text-[#7E33B8]" />
                <span>{BRAND.tagline}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#181D28] tracking-tight leading-[1.12]">
                Your Ideas. <br />
                <span className="brand-gradient-text">
                  Our Digital Expertise.
                </span>
              </h1>

              {/* Supporting Body */}
              <p className="text-base sm:text-lg text-[#5B6275] max-w-2xl leading-relaxed">
                From professional websites and powerful online stores to targeted
                digital advertising, RYAR Canvas helps turn your business ideas
                into practical digital experiences.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={heroQuoteWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base brand-gradient hover:opacity-95 shadow-md shadow-[#324BB0]/20 transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Get a Quote</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById("services-overview");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[#181D28] font-semibold text-base bg-white border border-[#E2E8F0] hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#5B6275]" />
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5B6275]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16865C]" />
                  <span>Transparent Fixed Packages</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16865C]" />
                  <span>No Mandatory Monthly Platform Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16865C]" />
                  <span>Direct WhatsApp Inquiries</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Refined Agency UI Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Browser Shell Frame */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="px-4 py-3 bg-slate-50 border-b border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[11px] font-mono text-[#5B6275] bg-white px-3 py-0.5 rounded-md border border-[#E2E8F0]">
                      riarcanvas.online
                    </div>
                    <div className="w-4" />
                  </div>

                  {/* Browser Content */}
                  <div className="p-6 space-y-5 bg-gradient-to-b from-white to-slate-50/60">
                    {/* Header Mini Preview */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]/70">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center text-white text-xs font-bold">
                          RC
                        </div>
                        <span className="text-xs font-bold text-[#181D28]">
                          RYAR Canvas
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Active Deployment
                      </span>
                    </div>

                    {/* Capability Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white border border-[#E2E8F0] rounded-xl shadow-xs">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#181D28]">
                          <Globe className="w-3.5 h-3.5 text-[#324BB0]" />
                          Web Sites
                        </div>
                        <p className="text-[11px] text-[#5B6275] mt-1">
                          12 to 48 mo hosting
                        </p>
                      </div>

                      <div className="p-3 bg-white border border-[#E2E8F0] rounded-xl shadow-xs">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#181D28]">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#7E33B8]" />
                          eCommerce
                        </div>
                        <p className="text-[11px] text-[#5B6275] mt-1">
                          Custom admin panel
                        </p>
                      </div>
                    </div>

                    {/* Marketing Card */}
                    <div className="p-3.5 bg-white border border-[#E2E8F0] rounded-xl shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-50 text-[#324BB0]">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#181D28]">
                            Paid Advertising
                          </div>
                          <div className="text-[11px] text-[#5B6275]">
                            Meta (FB/IG) & TikTok Ads
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#324BB0] font-semibold">
                        Configured
                      </span>
                    </div>

                    {/* Direct Contact Flow preview */}
                    <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-emerald-900 font-medium">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Direct WhatsApp Channel</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold">
                        Instant Scope
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative floating detail */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-[#E2E8F0] shadow-lg rounded-xl p-3 hidden sm:flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#181D28]">
                      Production Ready
                    </div>
                    <div className="text-[11px] text-[#5B6275]">
                      Static GitHub Pages + Domain
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES & QUALITY GUARANTEES BAR */}
      <TrustGuaranteesBar />

      {/* 2. TRUST & VALUE PROPOSITIONS */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#324BB0] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#181D28]">
                Practical Digital Solutions
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                Focused on digital setups that directly support your business operations and content brand.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7E33B8] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#181D28]">
                No Mandatory Monthly Lock-In
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                One-time development model for online stores with zero monthly Shopify platform subscription fees.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#324BB0] flex items-center justify-center">
                <Timer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#181D28]">
                100% On-Time Handover
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                Guaranteed 1–3 weeks for websites and 2–5 weeks for custom e-commerce stores.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16865C] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#181D28]">
                Direct WhatsApp Communication
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                Instant scoping and consultation directly with our engineering team at +92 349 7925109.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (STRICTLY NO PRICES ON HOMEPAGE) */}
      <section id="services-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
            Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181D28] tracking-tight">
            Tailored Digital Services
          </h2>
          <p className="text-sm sm:text-base text-[#5B6275]">
            Explore our specialized development and advertising services. Click any service to view full specifications, package tiers, and scope details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Website Development */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between brand-card-hover">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#324BB0] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#324BB0] bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5" />
                  <span>1 to 3 weeks</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#181D28]">
                Website Development
              </h3>
              <p className="text-sm text-[#5B6275] leading-relaxed">
                Launch a professional website for your blog, content brand, or
                online project. Handover timeline is <strong>1 to 3 weeks</strong>. Best for blogging, includes domain, hosting, development, and ads code setup/guidance.
              </p>

              <div className="pt-2 border-t border-[#E2E8F0]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Handover timeline: 1 to 3 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Best for blogging & content brands</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Domain, hosting & ads code setup guidance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Packages from 1 to 10 websites (12–48 mo hosting)</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate("service-web")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#324BB0] hover:bg-[#293E96] text-white font-semibold text-sm transition-colors"
              >
                <span>Explore Website Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: E-commerce Website + Custom Admin Panel */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between brand-card-hover relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7E33B8] flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7E33B8] bg-purple-50 border border-purple-200/60 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5" />
                  <span>2 to 5 weeks</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#181D28]">
                E-commerce Website + Custom Admin Panel
              </h3>
              <p className="text-sm text-[#5B6275] leading-relaxed">
                Build a superior online store with a custom administration
                experience to manage your products and orders. Handover timeline is <strong>2 to 5 weeks</strong>. Explicitly <strong>NO monthly Shopify fees</strong> or recurring subscription costs (secure one-time payment).
              </p>

              <div className="pt-2 border-t border-[#E2E8F0]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                  <span>Handover timeline: 2 to 5 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                  <span>ZERO monthly Shopify fees (One-time payment)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                  <span>Custom product & order management admin panel</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#7E33B8]" />
                  <span>12, 18/24, or 48 months included hosting</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate("service-ecommerce")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7E33B8] hover:bg-[#6A2B9D] text-white font-semibold text-sm transition-colors"
              >
                <span>Explore E-commerce Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Digital Marketing */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between brand-card-hover">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#324BB0] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md">
                  <span>Meta & TikTok</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#181D28]">
                Digital Marketing
              </h3>
              <p className="text-sm text-[#5B6275] leading-relaxed">
                Reach your target audience and generate business opportunities. Services focus strictly on <strong>Meta Ads (Facebook/Instagram)</strong> and <strong>TikTok Ads</strong> (strictly no Google ads).
              </p>

              <div className="pt-2 border-t border-[#E2E8F0]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Meta Ads (Facebook & Instagram targeting)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#324BB0]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>TikTok Ads creative production & setup</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Strictly no Google Ads (focused specialism)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5B6275]">
                  <CheckCircle2 className="w-4 h-4 text-[#324BB0]" />
                  <span>Direct consultation via WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-2.5">
              <a
                href={marketingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl brand-gradient text-white font-semibold text-sm hover:opacity-95 shadow-xs transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate("service-marketing")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-[#181D28] font-medium text-xs transition-colors"
              >
                <span>View Marketing Strategy</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#5B6275]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE RYAR CANVAS */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181D28] tracking-tight">
              Why Choose RYAR Canvas
            </h2>
            <p className="text-sm sm:text-base text-[#5B6275]">
              We believe in straightforward agency relationships grounded in clarity, technical honesty, and reliable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[#181D28]">
                Practical Digital Solutions
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                We focus on digital services that support your business goals and online presence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[#181D28]">
                Clear Communication
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                We discuss your requirements, explain available options, and clarify the agreed scope before work begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[#181D28]">
                Tailored Recommendations
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                We help you choose a suitable service based on your needs rather than pushing unnecessary features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[#181D28]">
                Transparent Package Discussions
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                We explain package pricing, hosting duration, included services, and potential additional costs before confirming an order.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[#181D28]">
                Direct Communication
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                Speak with our team directly through WhatsApp to discuss your project and next steps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[#181D28]">
                No Hidden Platform Fees
              </h3>
              <p className="text-xs text-[#5B6275] leading-relaxed">
                Our packages specify the exact inclusions so you have full predictability over development expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR WORKING PROCESS */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181D28] tracking-tight">
            Our Working Process
          </h2>
          <p className="text-sm sm:text-base text-[#5B6275]">
            A transparent four-step journey designed to ensure alignment, clear deliverables, and a smooth launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-2xl relative">
            <div className="w-10 h-10 rounded-xl brand-gradient text-white font-bold flex items-center justify-center text-sm mb-4">
              1
            </div>
            <h3 className="font-bold text-base text-[#181D28] mb-2">
              Tell Us About Your Idea
            </h3>
            <p className="text-xs text-[#5B6275] leading-relaxed">
              Contact RYAR Canvas through WhatsApp and explain your business, project goals, and preferred timeline.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-2xl relative">
            <div className="w-10 h-10 rounded-xl brand-gradient text-white font-bold flex items-center justify-center text-sm mb-4">
              2
            </div>
            <h3 className="font-bold text-base text-[#181D28] mb-2">
              Discuss the Right Solution
            </h3>
            <p className="text-xs text-[#5B6275] leading-relaxed">
              We help you evaluate the available services, hosting periods, technical architecture, and scope.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-2xl relative">
            <div className="w-10 h-10 rounded-xl brand-gradient text-white font-bold flex items-center justify-center text-sm mb-4">
              3
            </div>
            <h3 className="font-bold text-base text-[#181D28] mb-2">
              Confirm the Details
            </h3>
            <p className="text-xs text-[#5B6275] leading-relaxed">
              Both parties confirm deliverables, price, technical requirements, estimated timeline, and payment terms before work begins.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-2xl relative">
            <div className="w-10 h-10 rounded-xl brand-gradient text-white font-bold flex items-center justify-center text-sm mb-4">
              4
            </div>
            <h3 className="font-bold text-base text-[#181D28] mb-2">
              Move Forward Together
            </h3>
            <p className="text-xs text-[#5B6275] leading-relaxed">
              We build and configure your project according to the agreement, with transparent milestone updates.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SECTION ("Our Work") */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181D28] tracking-tight">
            Our Work
          </h2>
          <p className="text-sm sm:text-base text-[#5B6275]">
            Explore selected digital projects and see how ideas take shape through thoughtful design and development.
          </p>
        </div>

        {/* Dynamic Project Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.filter((p) => p.active).map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden brand-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Clickable project thumbnail */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video overflow-hidden bg-slate-100"
                  aria-label={`View live project ${project.name} (opens in new tab)`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} live application preview`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                    <span>Visit Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>

                {/* Card Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5B6275]">
                    <span className="font-medium text-[#324BB0]">
                      {project.category}
                    </span>
                    <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                      External Link
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#181D28] group-hover:text-[#324BB0] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6275] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-xs font-semibold text-[#181D28] hover:bg-slate-50 transition-colors"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5B6275]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMING SOON SECTION ON HOMEPAGE */}
      <section id="coming-soon" className="bg-[#F8FAFC] py-16 sm:py-20 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7E33B8]">
              In Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181D28] tracking-tight">
              Coming Soon Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#5B6275]">
              We are actively preparing new capabilities designed to broaden automation and digital capabilities for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. AI Calling Agent */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7E33B8] flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#7E33B8]">
                  Coming Soon
                </div>
                <h3 className="text-lg font-bold text-[#181D28]">
                  AI Calling Agent
                </h3>
                <p className="text-xs text-[#5B6275] leading-relaxed">
                  Smarter conversations and automated voice interactions designed to support customer workflows and inbound communications.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate("coming-soon-ai")}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-xs font-semibold text-[#181D28] transition-colors"
                >
                  <span>Learn More & Early Access</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5B6275]" />
                </button>
              </div>
            </div>

            {/* 2. Automated Lead Gen Pipeline */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#324BB0] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
                  Coming Soon
                </div>
                <h3 className="text-lg font-bold text-[#181D28]">
                  Automated Lead Gen Pipeline
                </h3>
                <p className="text-xs text-[#5B6275] leading-relaxed">
                  Future-focused lead generation workflows designed to help businesses explore organized discovery and lead qualification.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate("coming-soon-leads")}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-xs font-semibold text-[#181D28] transition-colors"
                >
                  <span>Learn More & Early Access</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5B6275]" />
                </button>
              </div>
            </div>

            {/* 3. Ryar Canvas Academy */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16865C] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#16865C]">
                  Coming Soon
                </div>
                <h3 className="text-lg font-bold text-[#181D28]">
                  Ryar Canvas Academy
                </h3>
                <p className="text-xs text-[#5B6275] leading-relaxed">
                  Practical digital skills education, creative execution, and online business opportunities for emerging builders.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate("coming-soon-academy")}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 text-xs font-semibold text-[#181D28] transition-colors"
                >
                  <span>Join the Interest List</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5B6275]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
            Transparent Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181D28] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5B6275]">
            Everything you need to know about our services, package models, and working structure.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.id}
                className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#181D28] hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#324BB0]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5B6275] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#324BB0]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5B6275] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. STRONG FINAL CALL TO ACTION */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="brand-gradient rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
              Let's Work Together
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Connect directly with RYAR Canvas on WhatsApp. We will discuss your goals, explain available service packages, and help you choose the right solution.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={heroQuoteWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#181D28] font-bold text-base hover:bg-slate-100 shadow-lg transition-transform active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-[#324BB0]" />
                <span>Chat Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
