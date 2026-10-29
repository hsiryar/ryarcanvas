import React from "react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { TrustGuaranteesBar } from "../components/TrustGuaranteesBar";
import {
  TrendingUp,
  Target,
  Users,
  Compass,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  BarChart3,
  Video,
} from "lucide-react";

export const DigitalMarketingView: React.FC = () => {
  const marketingWhatsAppUrl = buildWhatsAppUrl(
    WHATSAPP_MESSAGES.digitalMarketing()
  );

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#324BB0] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            <TrendingUp className="w-4 h-4" />
            <span>Paid Advertising Management</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60">
            <span>Meta Ads & TikTok Ads Only</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181D28] tracking-tight">
          Reach the Right Audience. <br />
          <span className="brand-gradient-text">Create More Opportunities.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5B6275] max-w-2xl mx-auto leading-relaxed">
          RYAR Canvas provides high-performance paid advertising campaigns. Our services focus <strong>strictly on Meta Ads (Facebook & Instagram) and TikTok Ads (strictly no Google ads)</strong>, backed by direct WhatsApp strategy consultations.
        </p>

        {/* Primary CTA */}
        <div className="pt-4">
          <a
            href={marketingWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base brand-gradient hover:opacity-95 shadow-md shadow-[#324BB0]/20 transition-all active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat Us on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Trust & Commitments Bar */}
      <TrustGuaranteesBar />

      {/* Two Supported Platforms Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#324BB0]">
            Core Channels
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181D28]">
            Supported Advertising Platforms
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6275]">
            We specialize specifically in Meta Ads and TikTok Ads to maintain high creative and tactical focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Platform 1: Meta Ads */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 space-y-5 brand-card-hover">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-50 text-[#324BB0] rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#324BB0] bg-blue-50 px-2.5 py-1 rounded-md">
                Facebook & Instagram
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#181D28]">
                Meta Advertising
              </h3>
              <p className="text-xs text-[#5B6275] mt-1 leading-relaxed">
                Connect with prospective buyers and clients through comprehensive audience targeting and visual storytelling.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0] text-xs text-[#181D28]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Reach relevant demographic, interest, and behavioral audiences</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Promote products, services, and special offers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Generate qualified inquiries and customer leads</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Drive high-intent traffic to websites or online stores</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>A/B test advertising copy, hooks, and creative formats</span>
              </div>
            </div>
          </div>

          {/* Platform 2: TikTok Ads */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 space-y-5 brand-card-hover">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-purple-50 text-[#7E33B8] rounded-xl">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#7E33B8] bg-purple-50 px-2.5 py-1 rounded-md">
                TikTok Ads
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#181D28]">
                TikTok Advertising
              </h3>
              <p className="text-xs text-[#5B6275] mt-1 leading-relaxed">
                Harness high-energy short-form video creative to capture immediate attention and drive user action.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0] text-xs text-[#181D28]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Introduce innovative products to engaged, mobile-first audiences</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Test short-form video hooks, visual styles, and creators</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Increase brand discovery and modern cultural visibility</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Drive targeted landing page traffic and potential customer leads</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16865C] shrink-0 mt-0.5" />
                <span>Track event engagement, conversion milestones, and click rates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Planning Methodology */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xl font-bold text-[#181D28]">
              Our Campaign Planning Process
            </h3>
            <p className="text-xs text-[#5B6275]">
              Systematic execution from goal discovery through active optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#324BB0] mb-1">Phase 1</div>
              <div className="text-xs font-bold text-[#181D28]">Understanding Business Goals</div>
              <p className="text-[11px] text-[#5B6275] mt-1 leading-relaxed">
                Reviewing your offer, desired customer actions, and unit economics.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#324BB0] mb-1">Phase 2</div>
              <div className="text-xs font-bold text-[#181D28]">Target Audience Review</div>
              <p className="text-[11px] text-[#5B6275] mt-1 leading-relaxed">
                Defining exact demographics, competitor positioning, and customer pain points.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#324BB0] mb-1">Phase 3</div>
              <div className="text-xs font-bold text-[#181D28]">Campaign Messaging</div>
              <p className="text-[11px] text-[#5B6275] mt-1 leading-relaxed">
                Developing hooks, headlines, and call-to-action scripts for ads.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#324BB0] mb-1">Phase 4</div>
              <div className="text-xs font-bold text-[#181D28]">Creative Asset Coordination</div>
              <p className="text-[11px] text-[#5B6275] mt-1 leading-relaxed">
                Preparing image assets, video cuts, and destination page parameters.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#324BB0] mb-1">Phase 5</div>
              <div className="text-xs font-bold text-[#181D28]">Technical Campaign Setup</div>
              <p className="text-[11px] text-[#5B6275] mt-1 leading-relaxed">
                Configuring pixels, event triggers, budgets, and placement matrices.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#324BB0] mb-1">Phase 6</div>
              <div className="text-xs font-bold text-[#181D28]">Performance Review</div>
              <p className="text-[11px] text-[#5B6275] mt-1 leading-relaxed">
                Reviewing click-throughs, lead quality, and recommending optimizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Policy Transparency */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Commercial Transparency & Budget Distinctions</span>
          </div>
          <p className="text-xs text-amber-900/80 leading-relaxed">
            <strong>Ad Spend vs. Management Fees:</strong> Agency service fees cover campaign strategy, technical configuration, and creative management. The advertising spend itself is paid directly by the client to Meta or TikTok.
          </p>
          <p className="text-xs text-amber-900/80 leading-relaxed">
            <strong>No Exaggerated Guarantees:</strong> We provide diligent campaign strategy, setup, and optimization, but do not promise guaranteed sales, return on ad spend (ROAS), or exact revenue figures, as market conditions and offer receptivity vary.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#181D28]">
          Discuss Your Advertising Campaign
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6275] max-w-xl mx-auto leading-relaxed">
          Reach out on WhatsApp to share your business goals, target demographic, and preferred advertising budget. We will provide a clear, customized strategy discussion.
        </p>
        <a
          href={marketingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm brand-gradient hover:opacity-95 shadow-md shadow-[#324BB0]/20 transition-all active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat Us on WhatsApp</span>
        </a>
      </section>
    </div>
  );
};
