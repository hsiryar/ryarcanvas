import React from "react";
import { Lock, Rocket, MessageSquare, Timer, ShieldCheck } from "lucide-react";

export const TrustGuaranteesBar: React.FC = () => {
  const guarantees = [
    {
      icon: Lock,
      title: "Secure Direct Communication",
      desc: "Confidential scoping & direct channel",
      badgeEmoji: "🔒",
      accent: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: Rocket,
      title: "Fast Performance & SEO-Optimized",
      desc: "High-speed scores & semantic structure",
      badgeEmoji: "🚀",
      accent: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      icon: MessageSquare,
      title: "Direct WhatsApp Communication",
      desc: "Instant guidance at +92 349 7925109",
      badgeEmoji: "💬",
      accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      icon: Timer,
      title: "100% On-Time Delivery & Zero Hidden Fees",
      desc: "1–3w websites · 2–5w e-commerce",
      badgeEmoji: "⏱️",
      accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
  ];

  return (
    <div className="w-full bg-white border-y border-[#E2E8F0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#324BB0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#181D28]">
              Quality Guarantees & Client Commitments
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#16865C] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 hidden sm:inline-block">
            Verified Agency Standard
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#E2E8F0] hover:shadow-xs transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${item.accent}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#181D28] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#5B6275] mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
